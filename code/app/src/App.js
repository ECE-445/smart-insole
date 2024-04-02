import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Bluetooth } from "./pages/Bluetooth"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/bluetooth" element={<Bluetooth />} />
      </Routes>
    </Router>
  )
}

export default App
