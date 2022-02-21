import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { MovieRanking } from './pages/movies/movies'
import { Navigation } from './pages/navbar/Navigation'
function App () {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<MovieRanking />}></Route>
          {/* <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
