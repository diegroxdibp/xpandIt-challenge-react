import axios, { Canceler } from 'axios'
import { useEffect, useState } from 'react'
import { Movie, MovieFullDescription } from '../models/movie'

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
        console.log(e)
      })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, movies, hasMore }
}

export function getMoviesTop10Revenue () {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [movies, setMovies] = useState<Movie[]>([])

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
        console.log(e)
      })
  }, [])

  return { loading, error, movies }
}

export function getMoviesYears (): number[] {
  const [years, setYears] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API_URL}/movies`
    })
      .then((response) => {
        setYears(() => {
          return [
            ...new Set([
              ...response.data.content.map((movie: Movie) => movie.year)
            ])
          ].sort()
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  console.log('years', years)
  return years
}

export function getMoviesFullDescription (id: string) {
  const [movie, setMovie] = useState<any>()
  useEffect(() => {
    axios
      .get<MovieFullDescription>(`${API_URL}/movies/${id}`)
      .then((response) => {
        console.log(response)
        setMovie(response)
        return response
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return movie
}
