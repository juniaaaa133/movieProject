import React from 'react'
import Carousel from '../../components/carousel/Carousel';
import HeadText from '../../components/head/HeadText';
import MovieContainer from '../../components/movie/MovieContainer';
import Movie from '../../components/movie/Movie';
import { KEY } from '../../api_data';
import { useLoaderData } from 'react-router';

const Upcoming = () => {

  let { upcomingMovies,topRMovies,genreData} = useLoaderData();

  return (
    <div>
      <Carousel genres={genreData} movies={topRMovies}/>
      <HeadText text={'Upcoming Movies'} />
      <MovieContainer>
        {
          upcomingMovies.map((movie,index) => {
           let genre = genreData.find(({id}) =>id == movie.genre_ids[0])
            return <Movie movie={movie} genre={genre}  key={index}/>

          })
        }
      </MovieContainer>
    </div>
  )
}

export default Upcoming

export const loader = async () => {
  try {
    let res1 = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`
    )
    let data1 = await res1.json();
  
    let res2 = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`
    )
      let data2 = await res2.json();
  
    let res3 = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
    )
      let data3 = await res3.json();
  
    let topRMovies = data1.results;
    let upcomingMovies = data2.results;
    let genreData = data3.genres;
  
    return {topRMovies , upcomingMovies , genreData};
  } catch (error) {
    throw json({message : 'Something went wrong !' , status : 500})
  }
 
}