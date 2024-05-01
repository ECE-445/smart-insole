#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

BLEServer* pServer = NULL;
BLECharacteristic* pSensorCharacteristic = NULL;
bool deviceConnected = false;
bool oldDeviceConnected = false;

#define SERVICE_UUID        "19b10000-e8f2-537e-4f6c-d104768a1214"
#define SENSOR_CHARACTERISTIC_UUID "19b10001-e8f2-537e-4f6c-d104768a1214"

Adafruit_MPU6050 mpu;

const int P_10 = 7;
const int P_9 = 15;
const int P_8 = 18;
const int P_7 = 6;
const int P_6 = 5;
const int P_5 = 10;
const int P_4 = 11;
const int P_3 = 12;
const int P_2 = 13;
const int P_1 = 14;

bool startHike = false;
const int SH_LED = 1;
const int BLE_LED = 2;
const int Button_Pin = 16;

unsigned long curr_time = 0;
unsigned long press_time = 0;
unsigned long press_interval = 4000;


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
  // Start the service
  pService->start();

  // Start advertising
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(false);
  pAdvertising->setMinPreferred(0x0);  // set value to 0x00 to not advertise this parameter
  BLEDevice::startAdvertising();
  Serial.println("Waiting a client connection to notify...");

  pinMode(BLE_LED, OUTPUT);
  pinMode(SH_LED, OUTPUT);
  pinMode(Button_Pin, INPUT_PULLDOWN);

  delay(100);
}

void loop() {
    curr_time = millis();
    if (deviceConnected && startHike) {
        // Read potentiometer value
        int v10 = analogRead(P_10);
        int v9 = analogRead(P_9);
        int v8 = analogRead(P_8);
        int v7 = analogRead(P_7);
        int v6 = analogRead(P_6);
        int v5 = analogRead(P_5);
        int v4 = analogRead(P_4);
        int v3 = analogRead(P_3);
        int v2 = analogRead(P_2);
        int v1 = analogRead(P_1);

        // Concatenate sensor data as a single string
        String sensorData = String(v1) + "," + String(v2) + "," + String(v3) + "," + String(v4) + "," + String(v5) + "," + String(v6) + "," + String(v7) + "," + String(v8) + "," + String(v9) + "," + String(v10);

        // Update characteristic value and notify
        pSensorCharacteristic->setValue(sensorData.c_str());
        pSensorCharacteristic->notify();
        Serial.print("New sensor data notified: ");
        Serial.println(sensorData);
        delay(250); // Delay to avoid Bluetooth congestion
        digitalWrite(BLE_LED, HIGH);
    }
    if (!deviceConnected) {
      digitalWrite(BLE_LED, LOW);
    }
    int buttonState = digitalRead(Button_Pin);
    float voltage = analogRead(Button_Pin) * (3.3 / 4095.0); // Assuming the reference voltage is 3.3V and ADC resolution is 12 bits
    Serial.println(String(analogRead(Button_Pin)));
    if (voltage >= 3.25 && (curr_time - press_time  >= press_interval)){
      Serial.println("Button pressed!");
      startHike = !startHike;
      press_time = curr_time;
      delay(500);
    }

    if (startHike) {
      digitalWrite(SH_LED, HIGH); // Turn LED on
    } else {
      digitalWrite(SH_LED, LOW); // Turn LED off
    }

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
}
