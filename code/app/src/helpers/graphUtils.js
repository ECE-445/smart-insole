import Plotly from "plotly.js-dist";

let timeData = [];
let elevationGainData = [];
let counter = 0;

export function updateElevationGraph(accelerationData) {
  counter += 1;
  const deltaTime = 0.01;

  const accelerometerZ = accelerationData.z - 9.58;
  const elevationGainIncrement = accelerometerZ * deltaTime;

  const previousElevationGain = elevationGainData.length > 0 ? elevationGainData[elevationGainData.length - 1] : 0;
  const newElevationGain = previousElevationGain + elevationGainIncrement;

  timeData.push(counter);
  elevationGainData.push(newElevationGain);

  Plotly.newPlot('graph', [{
    x: timeData,
    y: elevationGainData,
    type: 'scatter',
    mode: 'lines',
    line: { color: '#00ff00' },
    name: 'Elevation Gain vs Time'
  }], {
    title: 'Real-Time Elevation Gain',
    xaxis: { title: 'Time (s)' },
    yaxis: { title: 'Elevation Gain (m)' }
  });
}


const distanceData = []; // Array to store distance data
let counter_2= 0; // Counter to track time

export function updatePaceGraph(accelerationData) {
  counter_2 += 1;

  // Assuming accelerationData contains the instantaneous acceleration data
  // Calculate distance increment based on acceleration
  const distanceIncrement = calculateDistanceIncrement(accelerationData);

  // Calculate total distance covered
  const totalDistance = distanceData.reduce((acc, val) => acc + val, 0) + distanceIncrement;

  // Calculate total time elapsed
  const totalTime = counter * 0.01; // Assuming each counter increment represents 0.0001 seconds

  // Calculate average pace (pace = distance / time)
  const averagePace = distanceIncrement / totalTime;

  // Store data for plotting
  distanceData.push(averagePace);
  timeData.push(counter_2);

  // Plot the pace graph
  Plotly.newPlot('pace-graph', [{
    x: timeData,
    y: distanceData,
    type: 'scatter',
    mode: 'lines',
    line: { color: '#00ff00' },
    name: 'Average Pace vs Time'
  }], {
    title: 'Real-Time Average Pace',
    xaxis: { title: 'Time (ms)' },
    yaxis: { title: 'Average Pace (m/s)' }
  });
}



function calculateDistanceIncrement(accelerationData) {
    // Assuming accelerationData contains the accelerometer reading [x, y, z]
    // The z-axis acceleration (in m/s^2) is used for distance calculation
  
    const deltaTime = 0.0001; // Assuming each update represents 0.0001 seconds
  
    // Extract the z-axis acceleration component
    const zAcceleration = accelerationData.z; // Assuming the z-axis is the third component
  
    // Convert acceleration to m/s^2
    const acceleration = zAcceleration / 9.81; // 1 g = 9.81 m/s^2
  
    // Calculate distance increment using kinematic equation: s = ut + (1/2)at^2
    // Initial velocity (u) is assumed to be 0 m/s
    const distanceIncrement = 0.5 * acceleration * deltaTime * deltaTime;
  
    return distanceIncrement;
  }