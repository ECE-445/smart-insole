import BasicHeatMap from "./components/HeatMap";

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
    </div>
  )
}

export default App