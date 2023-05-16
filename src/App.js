import "./App.css"
import React from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Layout from "./pages/Layout"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
