import React, { useState } from 'react';
import { ShoeOutline } from "../components/ShoeOutline";
import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


export const FileUpload = () => {
  const [averages, setAverages] = useState({
    accelerometer: [],
    gyroscope: [],
    pressureSensor: [],
  });

  const [elevationData, setElevationData] = useState([]);
  const [circleValues, setCircleValues] = useState(new Array(10).fill(0));

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        calculateAverages(reader.result);
      };
      reader.readAsText(file);
    }
  };

  const calculateAverages = (content) => {
    const lines = content.split('\n');
    const accelerometerValues = [];
    const gyroscopeValues = [];
    const pressureSensorValues = [];

    for (const line of lines) {
      if (line.startsWith('Pressure sensor values:')) {
        const values = line.split(':')[1].trim().split(',').map(Number);
        pressureSensorValues.push(values);
      } else if (line.startsWith('Acceleration:')) {
        const values = line.split(':')[1].trim().split(',').map(Number);
        accelerometerValues.push(values);
      } else if (line.startsWith('Gyro:')) {
        const values = line.split(':')[1].trim().split(',').map(Number);
        gyroscopeValues.push(values);
      }
    }

    const accelerometerAvg = calculateAverage(accelerometerValues).map(value => value.toFixed(3));
    const gyroscopeAvg = calculateAverage(gyroscopeValues).map(value => value.toFixed(3));
    const pressureSensorAvg = calculateAverageForPressureSensors(pressureSensorValues).map(value => value.toFixed(3));

    setAverages({
      accelerometer: accelerometerAvg,
      gyroscope: gyroscopeAvg,
      pressureSensor: pressureSensorAvg,
    });

    const windowedAccelerometerValues = calculateWindowedAccelerometerValues(accelerometerValues);
    const elevationData = calculateElevationData(windowedAccelerometerValues);
    setElevationData(elevationData);

    let categories = categorizeValues(pressureSensorAvg);
    console.log(pressureSensorAvg)
    console.log(categories);
    setCircleValues(categories);
  };

  const categorizeValues = (values) => {
    return values.map(value => {
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
  };

  const calculateAverage = (values) => {
    const sums = [0, 0, 0];
    for (const [x, y, z] of values) {
      sums[0] += x;
      sums[1] += y;
      sums[2] += z;
    }
    const numValues = values.length;
    return sums.map((sum) => sum / numValues);
  };

  const calculateAverageForPressureSensors = (values) => {
    const sums = new Array(10).fill(0);
    for (const row of values) {
      for (let i = 0; i < 10; i++) {
        sums[i] += row[i];
      }
    }
    const numValues = values.length;
    return sums.map((sum) => sum / numValues);
  };

  const handleToggleCircle = (index) => {
    setCircleValues((prevCircleValues) => {
      const newCircleValues = [...prevCircleValues];
      newCircleValues[index] = (newCircleValues[index] + 1) % 4;
      return newCircleValues;
    });
  };

  const calculateWindowedAccelerometerValues = (accelerometerValues) => {
    const windowSize = 5;
    const windowedValues = [];

    for (let i = 0; i < accelerometerValues.length - windowSize + 1; i++) {
      const window = accelerometerValues.slice(i, i + windowSize);
      const windowAverage = window.reduce((acc, curr) => {
        acc[0] += curr[0];
        acc[1] += curr[1];
        acc[2] += curr[2];
        return acc;
      }, [0, 0, 0]).map(value => value / windowSize);

      windowedValues.push(windowAverage);
    }

    return windowedValues;
  };

  const calculateElevationData = (windowedAccelerometerValues) => {
    const elevationData = [];
    let currentElevation = 0;

    for (const [x, y, z] of windowedAccelerometerValues) {
      const z_axis = z - 9.47;
      //const acceleration = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
      //const elevationChange = acceleration / 9.8; // Assuming acceleration due to gravity is 9.8 m/s^2
      currentElevation += 0.5 * z_axis * (1/64) * (1/64);
      elevationData.push(currentElevation);
    }

    return elevationData;
  };

  const data = {
    labels: Array.from(Array(elevationData.length).keys()),
    datasets: [
      {
        label: 'Elevation Gain/Loss',
        data: elevationData,
        fill: false,
        borderColor: 'rgb(255, 255, 255)',
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Disable aspect ratio maintenance
    plugins: {
        title: {
        display: true,
        text: 'Elevation Gain/Loss Over Time', // Set the chart title
        font: {
            size: 24, // Increase the font size of the title
        },
        },
    },
    scales: {
        y: {
        title: {
            display: true,
            text: 'Elevation (m)',
            font: {
            size: 16, // Increase the font size of the y-axis label
            },
        },
        ticks: {
            color: 'white', // Set the y-axis tick labels to white
        },
        },
        x: {
        title: {
            display: true,
            text: 'Time',
            font: {
            size: 16, // Increase the font size of the x-axis label
            },
        },
        ticks: {
            color: 'white', // Set the x-axis tick labels to white
        },
        },
    },
    };
  return (
    <div style={{ backgroundColor: "#800080", color: "white", textAlign: "center", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <header>
        <h1>Post-Hike Data Analytics</h1>
      </header>
      <p>Upload your MicroSD card data:</p>
      <input type="file" accept=".txt" onChange={handleFileUpload} />
      <h2>Averages:</h2>
      <p>Accelerometer: {averages.accelerometer.join(', ')}</p>
      <p>Gyroscope: {averages.gyroscope.join(', ')}</p>
      <p>Pressure Sensor: {averages.pressureSensor.join(', ')}</p>
      <h3>Average Pressure Sensor Distribution on Foot</h3>
      <ShoeOutline circleValues={circleValues} handleToggleCircle={handleToggleCircle} />
      <div style={{ width: '800px', height: '400px' }}>
        <Line data={data} options={options} />
        </div>
    </div>
  );
};

