/* eslint-disable no-useless-return */
import axios, { Canceler } from 'axios'
import { useEffect, useState } from 'react'

const API_URL = 'http://movie-challenge-api-xpand.azurewebsites.net/api'
// /api/movies?size=20&page=1
export default function getMovies (pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setMovies([])
  }, [])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel: Canceler

    axios({
      method: 'GET',
      url: `${API_URL}/movies?size=20&page=${pageNumber}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c))
    })
      .then((response) => {
        setMovies((previousMovies) => {
          // Remove duplicates
          return [...new Set([...previousMovies, ...response.data.content])]
        })
        setHasMore(response.data.content.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, movies, hasMore }
}
