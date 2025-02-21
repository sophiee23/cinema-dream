import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(state => state.movie)

  useEffect( ()=>{
    dispatch(movieAction.getMovies())
  }, [])

  if(loading){
    return (
      <ClipLoader
        color={'red'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
  } else {
    return (
      <div>
        <Banner movie={popularMovies.results[0]}/>
        <h1>Popular movies</h1>
        <MovieSlide movies={popularMovies}/>
        <h1>Top rated movies</h1>
        <MovieSlide movies={topRatedMovies}/>
        <h1>Upcoming movies</h1>
        <MovieSlide movies={upcomingMovies}/>
      </div>
    )
  }
}

  
export default Home
