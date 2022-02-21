import { useEffect } from 'react'

export const DefaultRanking = () => {
  useEffect(() => {
    // Update the document title using the browser API
  })
  return (
    <div>
      <h1>Movie ranking</h1>
      <div className="top-ten">
        <div className="pill">Top 10 Revenue</div>
        <div className="pill">Top 10 Revenue per Year</div>
      </div>
    </div>
  )
}
