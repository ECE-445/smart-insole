import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Home"
import { Bluetooth } from "./pages/Bluetooth"
import { Realtime } from "./pages/Realtime"
import { FileUpload } from "./pages/FileUpload"


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/bluetooth" element={<Bluetooth />} />
        <Route exact path="/realtime" element={<Realtime />} /> 
        <Route exact path="/fileupload" element={<FileUpload />} />
      </Routes>
    </Router>
  )
}

export default App
