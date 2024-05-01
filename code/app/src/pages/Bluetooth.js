import React, { useState, useEffect } from "react";
import Plotly from "plotly.js-dist";
import { Link } from "react-router-dom";
import { updateElevationGraph, updatePaceGraph } from "../helpers/graphUtils.js";
import { ShoeOutline } from "../components/ShoeOutline";



export const Bluetooth = () => {
  const [recivedVal, setRecivedVal] = useState("");
  const [temp, setTemp] = useState("Disconnected");
  const [time, setTime] = useState("");
  const [ShoeData, setShoeData] = useState(Array(10).fill(0));
  const [isConnected, setIsConnected] = useState(false);



  const handleToggleCircle = (index) => {
    setShoeData((prevData) => {
      const newData = [...prevData];
      newData[index] = (newData[index] + 1) % 2; // Toggle between 0 and 1
      return newData;
    });
  };

  /*
  useEffect(() => {
    const graph = document.getElementById("graph");

    Plotly.newPlot(graph, [{
      x: [],
      y: [],
      type: "scatter",
      mode: "lines",
      name: "Accelerometer Measurements",
    }], {
      title: "Real-time Accelerometer Measurements",
      xaxis: { title: "Time" },
      yaxis: { title: "Acceleration" },
    });

    return () => Plotly.purge(graph);
  }, []);
  */
  useEffect(() => {
    // Update temp text based on isConnected value
    if (isConnected) {
      setTemp("Connected");
    } else {
      setTemp("Disconnected");
    }
  }, [isConnected]);


  useEffect(() => {
    const graph = document.getElementById("graph");
  
    if (recivedVal !== "" && time !== "") {
      Plotly.extendTraces(graph, {
        x: [[time]],
        y: [[recivedVal]],
      }, [0]);
    }
  
  }, [recivedVal, time]);

  useEffect(() => {
    const data = recivedVal.split(',');
  
    const psens_values = Array(10).fill(0);

    psens_values[0] = parseFloat(data[0]);
    psens_values[1] = parseFloat(data[2]);
    psens_values[2] = parseFloat(data[2]);
    psens_values[3] = parseFloat(data[3]);
    psens_values[5] = parseFloat(data[4]);
    psens_values[4] = parseFloat(data[5]);
    psens_values[6] = parseFloat(data[6]);
    psens_values[7] = parseFloat(data[7]);
    psens_values[9] = parseFloat(data[8]);
    psens_values[8] = parseFloat(data[9])
  
    const x = parseFloat(data[10]);
    const y = parseFloat(data[11]);
    const z = parseFloat(data[12]);
  
    const accelerometerData = { x, y, z };
    updateElevationGraph(accelerometerData);
    updatePaceGraph(accelerometerData);
  

    setShoeData(prevShoeData => {    
      const categories = psens_values.map(value => {
          if (value > 4000) {
            return 0;
          } else if (value <= 4000 && value >= 2500) {
            return 1;
          } else if (value < 2500 && value >= 1000) {
            return 2;
          } else {
            return 3;
          }
        }); 
      return [...prevShoeData.slice(0, -10), ...categories];
    });
    
  }, [recivedVal]);

  const connectButton = () => {
    if (isWebBluetoothEnabled()) {
      connectToDevice();
      setIsConnected(true);
    }
  }

  const handleCharacteristicListener = (shouldSubscribe) => {
    if (sensorCharacteristicFound) {
      if (shouldSubscribe) {
        sensorCharacteristicFound.addEventListener(
          "characteristicvaluechanged",
          handleCharacteristicChange
        );
        sensorCharacteristicFound.startNotifications();
        console.log("Notifications Started.");
      } else {
        sensorCharacteristicFound.removeEventListener(
          "characteristicvaluechanged",
          handleCharacteristicChange
        );
        sensorCharacteristicFound.stopNotifications();
      }
    }
  };

  const disconnectButton = () => {
    window.location.reload();
  }

  function isWebBluetoothEnabled() {
    if (!navigator.bluetooth) {
      console.log("Web Bluetooth API is not available in this browser!");
      setTemp("Web Bluetooth API is not available in this browser!");
      return false;
    }
    console.log("Web Bluetooth API supported in this browser.");
    return true;
  }

  function connectToDevice() {
    console.log("Initializing Bluetooth...");
    navigator.bluetooth
      .requestDevice({
        filters: [{ name: deviceName }],
        optionalServices: [bleService],
      })
      .then((device) => {
        console.log("Device Selected:", device.name);
        setTemp("Connected to device " + device.name);
        device.addEventListener("gattservicedisconnected", onDisconnected);
        return device.gatt.connect();
      })
      .then((gattServer) => {
        bleServer = gattServer;
        console.log("Connected to GATT Server");
        return bleServer.getPrimaryService(bleService);
      })
      .then((service) => {
        bleServiceFound = service;
        console.log("Service discovered:", service.uuid);
        return service.getCharacteristic(sensorCharacteristic);
      })
      .then((characteristic) => {
        console.log("Characteristic discovered:", characteristic.uuid);
        sensorCharacteristicFound = characteristic;
        handleCharacteristicListener(true); // Subscribe to characteristic updates
        setIsConnected(true);
        return characteristic.readValue();
      })
      .then((value) => {
        console.log("Read value: ", value);
        const decodedValue = new TextDecoder().decode(value);
        console.log("Decoded value: ", decodedValue);
        setRecivedVal(decodedValue); 
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  function onDisconnected(event) {
    console.log("Device Disconnected:", event.target.device.name);
    setTemp("Device disconnected");
    connectToDevice();
  }

  function handleCharacteristicChange(event) {
      const newValueReceived = new TextDecoder().decode(event.target.value);
      console.log("Characteristic value changed: ", newValueReceived);
      setRecivedVal(newValueReceived);
      setTime(getDateTime());
    
  }

  function writeOnCharacteristic(value) {
    if (bleServer?.connected) {
      bleServiceFound
        .getCharacteristic(ledCharacteristic)
        .then((characteristic) => {
          console.log("Found the LED characteristic: ", characteristic.uuid);
          const data = new Uint8Array([value]);
          return characteristic.writeValue(data);
        })
        .then(() => {
          console.log("Value written to LED characteristic:", value);
          if (value === 2) {
            setIsConnected(false); // Update connection state to disconnected
          }
        })
        .catch((error) => {
          console.error("Error writing to the LED characteristic: ", error);
        });
    } else {
      console.error(
        "Bluetooth is not connected. Cannot write to characteristic."
      );
      window.alert(
        "Bluetooth is not connected. Cannot write to characteristic. \n Connect to BLE first!"
      );
    }
  }
  

  function disconnectDevice() {
    console.log("Disconnect Device.");
    if (bleServer && bleServer.connected) {
      if (sensorCharacteristicFound) {
        sensorCharacteristicFound.removeEventListener(
          "characteristicvaluechanged",
          handleCharacteristicChange
        );
        sensorCharacteristicFound.stopNotifications();
      }
      bleServer.disconnect()
        .then(() => {
          console.log("Device Disconnected");
          setTemp("Device Disconnected");
          setIsConnected(false); // Update connection state to disconnected
          bleServer = null; // Reset the server instance
          bleServiceFound = null; // Reset the service instance
          sensorCharacteristicFound = null; // Reset the characteristic instance
        })
        .catch((error) => {
          console.error("An error occurred during disconnection:", error);
        });
    } else {
      console.error("Bluetooth is not connected.");
      window.alert("Bluetooth is not connected.");
    }
  }
  

  function getDateTime() {
    var currentdate = new Date();
    var day = ("00" + currentdate.getDate()).slice(-2);
    var month = ("00" + (currentdate.getMonth() + 1)).slice(-2);
    var year = currentdate.getFullYear();
    var hours = ("00" + currentdate.getHours()).slice(-2);
    var minutes = ("00" + currentdate.getMinutes()).slice(-2);
    var seconds = ("00" + currentdate.getSeconds()).slice(-2);

    var datetime =
      day +
      "/" +
      month +
      "/" +
      year +
      " at " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    return datetime;
  }

  var deviceName = "ESP32";
  var bleService = "19b10000-e8f2-537e-4f6c-d104768a1214";
  var ledCharacteristic = "19b10002-e8f2-537e-4f6c-d104768a1214";
  var sensorCharacteristic = "19b10001-e8f2-537e-4f6c-d104768a1214";

  var bleServer;
  var bleServiceFound;
  var sensorCharacteristicFound;

  return (
    <div
      style={{
        backgroundColor: "#800080",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>ESP32 Web BLE Application</h1>
      <button onClick={connectButton} id="connectBleButton">
        Connect to BLE Device
      </button>
      <button onClick={disconnectButton}>Disconnect BLE Device</button>
      <p>
        BLE state:{" "}
        <strong>
        <span style={{ color: isConnected ? "green" : "red" }}>{temp}</span>
        </strong>
      </p>
      <ShoeOutline circleValues={ShoeData} handleToggleCircle={handleToggleCircle}/>
      <h3>Live View of Foot Pressure Distribution</h3>
      <div id="graph" style={{ width: "70%", margin: "auto", border: "7px solid #ff0000", borderRadius: "5px" }}></div>
      <div id="pace-graph" style={{ width: "70%", margin: "auto", border: "7px solid #ff1493", borderRadius: "5px", marginTop: "20px"}}></div>
      <h2>Fetched Value</h2>
      <p>{recivedVal}</p>
      <p>Last reading: {time}</p>

      <Link to="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
};
