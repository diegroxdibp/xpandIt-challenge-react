import axios, { Canceler } from 'axios'
import { useEffect, useState } from 'react'
import { Movie } from '../models/movie'

const API_URL = 'http://movie-challenge-api-xpand.azurewebsites.net/api'
export function getMovies (pageNumber: number) {
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

export function getMoviesTop10Revenue () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies([])
  }, [])

  useEffect(() => {
    setLoading(true)
    setError(false)

    axios({
      method: 'GET',
      url: `${API_URL}/movies`
    })
      .then((response) => {
        setMovies(() => {
          return response.data.content
            .sort((a, b) => (a.revenue < b.revenue ? 1 : -1))
            .filter((movie: Movie, index: number) => index < 10)
        })
        setLoading(false)
      })
      .catch((e) => {
        setError(true)
      })
  }, [])

  return { loading, error, movies }
}
