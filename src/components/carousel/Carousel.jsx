import React from 'react'
import Hero from './slider/Hero';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Carousel = ({movies,genres}) => {

  return (
<Splide options={{
    type : 'loop',
    arrows: false,
    autoplay : true,
    intervel : 5000,
    speed : 1000,
    pagination : false,
}}>
    {
        movies.map((movie,index) => {
            let genre = genres.find(({id}) => id === movie.genre_ids[0]);
            return <SplideSlide key={index}>
                        <Hero genre={genre} movie={movie}/>
                    </SplideSlide>
        })
    }
</Splide>
)
}

export default Carousel
