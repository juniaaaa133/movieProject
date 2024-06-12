import React, { useEffect } from 'react'
import Carousel from '../../components/carousel/Carousel'
import Movie from '../../components/movie/Movie'
import MovieContainer from '../../components/movie/MovieContainer'
import { KEY } from '../../api_data'
import { json, useLoaderData } from 'react-router'
import HeadText from '../../components/head/HeadText'

const Home = () => {

let { discoverMovies,topRMovies,genreData} = useLoaderData();

  return (
    <div>
      <Carousel genres={genreData} movies={topRMovies}/>
      <HeadText text={'Discovered Movies'} />
      <MovieContainer>
        {
          discoverMovies.map((movie,index) => {
           let genre = genreData.find(({id}) =>id == movie.genre_ids[0])
            return <Movie movie={movie} genre={genre}  key={index}/>

          })
        }
      </MovieContainer>
    </div>
  )
}

export default Home

export const loader = async () => {
try {
  
  let res1 = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`
  )
  let data1 = await res1.json();

  let res2 = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US`
  )
    let data2 = await res2.json();

  let res3 = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
  )
    let data3 = await res3.json();

  let topRMovies = data1.results;
  let discoverMovies = data2.results;
  let genreData = data3.genres;

  return {topRMovies , discoverMovies , genreData};
} catch (error) {
  throw json({message : 'Something went wrong !' , status : 500})
}

}