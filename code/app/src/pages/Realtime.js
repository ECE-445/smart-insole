import BasicHeatMap from "../components/HeatMap.js"
import { Link } from "react-router-dom";
import ChartComponent from "../components/ChartComponent.js"
import { getSeededRandom } from "@visx/mock-data"
import genBins from "@visx/mock-data/lib/generators/genBins"

// Sample data
const rawData = []
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 4; j++) {
    const intensity = Math.floor(Math.random() * 100) // Random intensity value between 0 and 100
    rawData.push({ x: i, y: j, intensity })
  }
}
// Determine the maximum x and y values to define the size of the heatmap
const maxX = Math.max(...rawData.map((data) => data.x))
const maxY = Math.max(...rawData.map((data) => data.y))

// Initialize the heatmap data array with the appropriate dimensions
const heatmapData = Array.from({ length: maxY + 1 }, () => ({
  bins: Array(maxX + 1).fill(0),
  count: 0,
}))

// Fill in the heatmap data with the intensity values
rawData.forEach(({ x, y, intensity }) => {
  heatmapData[y].bins[x] = intensity
  heatmapData[y].count += intensity
})

const seededRandom = getSeededRandom(0.41)

const binData = genBins(
  /* length = */ 6,
  /* height = */ 6,
  /** binFunc */ (idx) => 150 * idx,
  /** countFunc */ (i, number) => 25 * (number - i) * seededRandom()
)

export const Realtime = () => {
  return (
    <div
      style={{
        backgroundColor: "#800080",
        color: "white",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header>
        <h1>Smart Analytics Insole</h1>
      </header>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <BasicHeatMap
          width={600}
          height={500}
          events={true}
          data={binData}
          margin={{ top: 20, left: 20, right: 20, bottom: 50 }}
          separation={10}
          title="Heatmap Title"
        />
      </div>
      <ChartComponent
        data={Array.from({ length: 100 }, (_, i) =>
          Math.floor(Math.random() * i * 10)
        )}
        lables={Array.from({ length: 100 }, (_, i) => i + 1)}
        title="Chart Title"
      />
      <div style={{ marginTop: "20px" }}>
        <Link to="/bluetooth">
          <button style={{ marginRight: "10px" }}>Go to bluetooth Page</button>
        </Link>
        <Link to="/">
          <button>Reload Current Page</button>
        </Link>
      </div>
    </div>
  )
}


