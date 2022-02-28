import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MovieRanking } from './pages/movies/movies'
import { Navigation } from './pages/navbar/Navigation'
function App () {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<MovieRanking />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
