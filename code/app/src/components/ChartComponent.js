import React, { useEffect, useRef } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

// react-chartjs-2.js.org/examples/line-chart

https: ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ChartComponent = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  }
  const labels = props.lables
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: props.data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      //   {
      //     label: "Dataset 2",
      //     data: labels.map(() => Math.floor(Math.random() * 100)),
      //     borderColor: "rgb(53, 162, 235)",
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  }

  useEffect(() => {
    console.log(props.data)
  })

  return (
    <div>
      <h1>Chart</h1>
      <Line options={options} data={data} />
    </div>
  )
}

export default ChartComponent