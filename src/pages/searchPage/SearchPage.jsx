import React from 'react'
import { KEY } from '../../api_data'
import { useLoaderData, useParams } from 'react-router'
import HeadText from '../../components/head/HeadText';
import MovieContainer from '../../components/movie/MovieContainer';
import Movie from '../../components/movie/Movie';

const SearchPage = () => {

    let {movies,genres} = useLoaderData();
    let {query} = useParams();

  return (
    
    <div className="">
<div className="flex flex-col items-center">
<HeadText text={'Search results for'} />
<p className="fontcl main-f text-[20px] mt-[-40px]">"{query}"</p>
</div>
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

export default SearchPage

export const loader = async ({req,params}) => {
    try {
        let res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${params.query}&page=1&include_adult=false`
        )
        let data = await res.json();
    
        let res2 = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}`
          )
        let data2 = await res2.json();
    
        let movies = data.results;
        let genres = data2.genres;
    
        return {movies,genres};
    } catch (error) {
        throw json({message : 'Something went wrong !' , status : 500})
    }
    
}