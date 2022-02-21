import { Link } from 'react-router-dom'

export const MovieRanking = () => (
  <div>
    <h1>Movie ranking</h1>
    <div className="top-ten">
      <div className="pill">Top 10 Revenue</div>
      <div className="pill">Top 10 Revenue per Year</div>
    </div>

    <div className="year-select-backdrop">
      <div className="year-select">
        <h1>Select a year</h1>
        <span> year </span>
      </div>
    </div>

    <div className=" movie-grid header">
      <span>RANKING</span>
      <span className="title">TITLE</span>
      <span>YEAR</span>
      <span>REVENUE</span>
      <span></span>
    </div>

    <h2>Hello from page A</h2>
    <br />
    <Link to="/pageB">Navigate to Page B</Link>
  </div>
)
