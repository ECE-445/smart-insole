import BasicHeatMap from "./components/HeatMap"
import ChartComponent from "./components/ChartComponent.js"

function App() {
  return (
    <div>
      <header>
        <h1>Smart Analytics Insole</h1>
      </header>
      <BasicHeatMap
        width={800}
        height={400}
        events={true}
        margin={{ top: 20, left: 30, right: 30, bottom: 50 }}
        separation={30}
      />
      <ChartComponent
        data={Array.from({ length: 100 }, (_, i) =>
          Math.floor(Math.random() * i * 10)
        )}
        lables={Array.from({ length: 100 }, (_, i) => i + 1)}
        title="Chart Title"
      />
    </div>
  )
}

export default App
