import React, { useEffect } from 'react'
import { KEY } from '../../api_data'
import { json, useLoaderData } from 'react-router'
import MovieDetail from '../../components/movie/MovieDetail';
import HeadText from '../../components/head/HeadText';
import MovieContainer from '../../components/movie/MovieContainer';
import Movie from '../../components/movie/Movie';

const Detail = () => {

  let {movieDetailData,movies,genres} = useLoaderData();

  return (
    <div>
      <MovieDetail movie={movieDetailData} />
      <HeadText text={'Recommended Movies'} />
      <MovieContainer>
      {
          movies.map((movie,index) => {
           let genre = genres.find(({id}) =>id == movie.genre_ids[0])
            return <Movie movie={movie} genre={genre}  key={index}/>

          })
        }
      </MovieContainer>
    </div>
  )
}

export default Detail

export const loader = async ({req,params}) => {
 try {
  let res1 = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${KEY}&append_to_response=videos`
  )
  let movieDetailData = await res1.json();

  let res2 = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${KEY}`
  )
  let data = await res2.json();
  let movies = data.results;

  let res3 = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
  )
    let data2 = await res3.json()
    let genres = data2.genres;

  return {movieDetailData,movies,genres}
 } catch (error) {
  throw json({message : 'Something went wrong !' , status : 500})
 }
}