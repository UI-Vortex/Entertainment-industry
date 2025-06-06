import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login/Login"
import Sign from "./Components/Sign/Sign"
import Movie from "./Components/Movies/Movie"

function App() {

 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
