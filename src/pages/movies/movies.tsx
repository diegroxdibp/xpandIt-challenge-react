/* eslint-disable no-tabs */
import { Pill } from '../../components/pill/pill'
import { MovieInfo, MovieGridHeader } from '../../components/movie-grid'
import { MoviePageBody, MoviesWrapper, PillsWrapper } from './styles'
import { Divider } from '../../components/divider'
import getMovies from '../../services/movies.service'
import { Movie } from '../../models/movie'
import { useCallback, useRef, useState } from 'react'
import { EyeIcon } from '../../components/eye'

export const MovieRanking = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const { loading, movies, hasMore } = getMovies(pageNumber)

  const observer = useRef<IntersectionObserver | null>(null)
  const lastMovie = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
          console.log(pageNumber)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  return (
    <MoviePageBody>
      <h1>Movie ranking</h1>
      <PillsWrapper>
        <Pill title="Top 10 Revenue"></Pill>
        <Pill title="Top 10 Revenue per Year"></Pill>
      </PillsWrapper>

      <MovieGridHeader>
        <span>RANKING</span>
        <span className="title">TITLE</span>
        <span>YEAR</span>
        <span>REVENUE</span>
        <span></span>
      </MovieGridHeader>
      <Divider />

      <MoviesWrapper>
        {movies.map((movie: Movie, index: number) => {
          console.log(movie)
          if (index + 1 === movies.length) {
            return (
              <>
                <MovieInfo ref={lastMovie} key={movie.id}>
                  <span>{movie.rank}</span>
                  <span className="title">{movie.title}</span>
                  <span>{movie.year}</span>
                  <span>${movie.revenue}</span>
                  <span>
                    <img src="../../assets/eye.svg" alt="Eye icon" />
                  </span>
                </MovieInfo>
              </>
            )
          } else {
            return (
              <>
                <MovieInfo key={movie.id}>
                  <span>{movie.rank}</span>
                  <span className="title">{movie.title}</span>
                  <span>{movie.year}</span>
                  <span>{movie.revenue}</span>
                  <span>
                    <EyeIcon />
                  </span>
                </MovieInfo>
                <Divider />
              </>
            )
          }
        })}
      </MoviesWrapper>

      {/* <DefaultRanking /> */}
      {/* <Link to="/pageB">Navigate to Page B</Link> */}
    </MoviePageBody>
  )
}
