import { BrowserRouter as Router } from 'react-router-dom'
import { MovieRanking } from './pages/movies/movies'
import { Navigation } from './pages/navbar/Navigation'
function App () {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <MovieRanking />
      </div>
    </Router>
  )
}

export default App
