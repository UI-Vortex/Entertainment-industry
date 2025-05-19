import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Sign from "./Components/Sign/Sign"

function App() {

 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
