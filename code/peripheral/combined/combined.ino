#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <SD.h>
#include <SPI.h>

#define SD_CS   35       // Chip select pin for the SD card module
#define SD_MOSI 37      // MOSI pin for SPI communication
#define SD_MISO 36      // MISO pin for SPI communication
#define SD_CLK  38      // Clock pin for SPI communication

#define SERVICE_UUID        "19b10000-e8f2-537e-4f6c-d104768a1214"
#define SENSOR_CHARACTERISTIC_UUID "19b10001-e8f2-537e-4f6c-d104768a1214"
#define CONTROL_CHARACTERISTIC_UUID "19b10002-e8f2-537e-4f6c-d104768a1214"

Adafruit_MPU6050 mpu;

BLEServer* pServer = NULL;
BLECharacteristic* pSensorCharacteristic = NULL;
BLECharacteristic* pControlCharacteristic = NULL;
bool deviceConnected = false;
bool oldDeviceConnected = false;
bool bluetoothEnabled = true;
bool startHike = false;

File dataFile;
bool sdConnected = false;

unsigned long lastSDWriteMillis = 0;
unsigned long lastBLENofityMillis = 0;
const unsigned long sdInterval = 1000 / 8; // Interval for 60Hz SD write (in milliseconds)
const unsigned long bleInterval = 500; // Interval for BLE notification (in milliseconds)

// Pins for the pressure sensors
const int potPin_10 = 14;
const int potPin_9 = 13;
const int potPin_8 = 12;
const int potPin_7 = 11;
const int potPin_6 = 10;

const int potPin_5 = 18;
const int potPin_4 = 17;
const int potPin_3 = 16;
const int potPin_2 = 15;
const int potPin_1 = 7;

//Pins for the LED
const int BLE_ledPin = 1;
const int SH_ledPin = 19;
const int button_Pin = 2;
int buttonState = 0;

class ControlCallbacks: public BLECharacteristicCallbacks {
public:
    void onWrite(BLECharacteristic *pCharacteristic) {
        std::string value = pCharacteristic->getValue();
        if (value.length() > 0) {
            if (value[0] == '2') {
                // Stop Bluetooth data transmission
                bluetoothEnabled = false;
                Serial.println("Bluetooth data transmission stopped.");
            } else if (value[0] == '1') {
                // Resume Bluetooth data transmission
                bluetoothEnabled = true;
                Serial.println("Bluetooth data transmission resumed.");
            }
        }
    }
};

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};


void setup() {
  Serial.begin(115200);
  Wire.begin();
  
  // Initialize SPI communication
  SPI.begin(SD_CLK, SD_MISO, SD_MOSI, SD_CS);

  sdConnected = true;
  if (!SD.begin(SD_CS)) {
    Serial.println("Card Mount Failed");
    sdConnected = false;
  }
  Serial.println("SD card initialized.");

  // Initialize MPU6050 sensor
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
    while (1) {
      delay(10);
    }
  }
  Serial.println("MPU6050 found.");

  // Open file for writing
  dataFile = SD.open("/sensor_data.txt", FILE_WRITE);
  if (!dataFile) {
    Serial.println("Error opening file for writing.");
    sdConnected = false;
  }

  // Create the BLE Device
  BLEDevice::init("ESP32");

  // Create the BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Create the BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // Create a BLE Characteristic for sensor data
  pSensorCharacteristic = pService->createCharacteristic(
                      SENSOR_CHARACTERISTIC_UUID,
                      BLECharacteristic::PROPERTY_READ   |
                      BLECharacteristic::PROPERTY_NOTIFY |
                      BLECharacteristic::PROPERTY_INDICATE
                    );

  pSensorCharacteristic->addDescriptor(new BLE2902());

  // Create a BLE Characteristic for control
  pControlCharacteristic = pService->createCharacteristic(
                      CONTROL_CHARACTERISTIC_UUID,
                      BLECharacteristic::PROPERTY_WRITE
                    );
  pControlCharacteristic->setCallbacks(new ControlCallbacks());

  // Start the service
  pService->start();

  // Start advertising
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(false);
  pAdvertising->setMinPreferred(0x0);  // set value to 0x00 to not advertise this parameter
  BLEDevice::startAdvertising();
  Serial.println("Waiting a client connection to notify...");

  // Initialize pressure sensor pins
  pinMode(potPin_10, INPUT);
  pinMode(potPin_9, INPUT);
  pinMode(potPin_8, INPUT);
  pinMode(potPin_7, INPUT);
  pinMode(potPin_6, INPUT);
  pinMode(potPin_5, INPUT);
  pinMode(potPin_4, INPUT);
  pinMode(potPin_3, INPUT);
  pinMode(potPin_2, INPUT);
  pinMode(potPin_1, INPUT);

  pinMode(BLE_ledPin, OUTPUT);
  pinMode(button_Pin, INPUT);
  pinMode(SH_ledPin, OUTPUT);

}

void loop() {
  unsigned long currentMillis = millis();

  int potValue_10 = analogRead(potPin_10);
  int potValue_9 = analogRead(potPin_9);
  int potValue_8 = analogRead(potPin_8);
  int potValue_7 = analogRead(potPin_7);
  int potValue_6 = analogRead(potPin_6);

  int potValue_5 = analogRead(potPin_5);
  int potValue_4 = analogRead(potPin_4);
  int potValue_3 = analogRead(potPin_3);
  int potValue_2 = analogRead(potPin_2);
  int potValue_1 = analogRead(potPin_1);

  /* Get new sensor events with the readings */
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);
  
  // SD write interval check
  if (currentMillis - lastSDWriteMillis >= sdInterval && sdConnected && startHike) {
    // Print time elapsed in milliseconds
    Serial.print("Time Elapsed (SD Write): ");
    Serial.print(currentMillis - lastSDWriteMillis);
    Serial.println(" milliseconds");
    
    lastSDWriteMillis = currentMillis;

    dataFile.print("Acceleration: ");
    dataFile.print(a.acceleration.x);
    dataFile.print(", ");
    dataFile.print(a.acceleration.y);
    dataFile.print(", ");
    dataFile.println(a.acceleration.z);

    dataFile.print("Gyro: ");
    dataFile.print(g.gyro.x);
    dataFile.print(", ");
    dataFile.print(g.gyro.y);
    dataFile.print(", ");
    dataFile.println(g.gyro.z);

    dataFile.print("Pressure sensor values: ");
    dataFile.print(potValue_1);
    dataFile.print(", ");
    dataFile.print(potValue_2);
    dataFile.print(", ");
    dataFile.print(potValue_3);
    dataFile.print(", ");
    dataFile.print(potValue_4);
    dataFile.print(", ");
    dataFile.print(potValue_5);
    dataFile.print(", ");
    dataFile.print(potValue_6);
    dataFile.print(", ");
    dataFile.print(potValue_7);
    dataFile.print(", ");
    dataFile.print(potValue_8);
    dataFile.print(", ");
    dataFile.print(potValue_9);
    dataFile.print(", ");
    dataFile.println(potValue_10);

    // Flush the data to the SD card
    dataFile.flush();
  }

  // BLE notification interval check
  if (currentMillis - lastBLENofityMillis >= bleInterval && deviceConnected && bluetoothEnabled) {
    lastBLENofityMillis = currentMillis;
    
    // Concatenate sensor data as a single string
    String sensorData = String(potValue_1) + "," + String(potValue_2) + "," + String(potValue_3) + "," + String(potValue_4) + "," + String(potValue_5) + "," + String(potValue_6) + "," + String(potValue_7) + "," + String(potValue_8) + "," + String(potValue_9) + "," + String(potValue_10) + "," + String(a.acceleration.x) + "," + String(a.acceleration.y) + "," + String(a.acceleration.z)+ String(g.gyro.x) + "," + String(g.gyro.y) + "," + String(g.gyro.z);

    // Update characteristic value and notify
    pSensorCharacteristic->setValue(sensorData.c_str());
    pSensorCharacteristic->notify();

    Serial.println("New sensor data notified to BLE client.");
    analogWrite(BLE_ledPin, 200);
  }

  if (!deviceConnected){analogWrite(BLE_ledPin, 0);}
  
  // Handle disconnecting
  if (!deviceConnected && oldDeviceConnected) {
      Serial.println("Device disconnected.");
      delay(500); // Give the Bluetooth stack the chance to get things ready
      pServer->startAdvertising(); // Restart advertising
      Serial.println("Start advertising");
      oldDeviceConnected = deviceConnected;
  }
  
  // Handle connecting
  if (deviceConnected && !oldDeviceConnected) {
      // Do stuff here on connecting
      oldDeviceConnected = deviceConnected;
      Serial.println("Device Connected");
  }

    // Read the state of the button (pressed or not pressed)
  buttonState = digitalRead(button_Pin);

  // Check if the button is pressed
  if (buttonState == HIGH) {
    // Print a message when the button is pressed
    if (startHike){Serial.println("Ending the hike!");}
    else {Serial.println("Starting the hike!");}
    delay(500); // Delay to avoid multiple readings due to button bounce
    startHike = !startHike;
    Serial.println(startHike);
  }
  // Turn the LED on if startHike is true, otherwise turn it off
  if (startHike) {
    digitalWrite(SH_ledPin, HIGH); // Turn LED on
  } else {
    digitalWrite(SH_ledPin, LOW); // Turn LED off
  }
}
