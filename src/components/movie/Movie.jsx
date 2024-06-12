import React, { useRef } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Movie = ({movie,genre}) => {

  let {
    id,
    title,
    genre_ids,
    poster_path,
    release_date,
  } = movie;

  return (
    <Link to={`/movies/${id}`} className='mv-ctn bg-org relative bcu shadow-md mv rounded-[20px] overflow-hidden '>
      <div className=" flex z-[3] px-[15px] leading-[16px] sm:leading-[18px] md:leading-[20px] flex-col absolute left-0 bottom-[20px]">
<p className="text-[16px] sm:text-[18px] lg:text-[20px] main-f fontcl">{title}</p>
<p className="text-[9px] sm:text-[11px] md:text-[13px] main-f fontcl6">{release_date}</p>
<p className="text-[11px] sm:text-[12px] md:text-[14px] main-f fontcl3">{genre == undefined ? "Unknown" : genre.name}</p>
      </div>
<div className="trans mv-layer absolute bottom-0 left-0 w-full h-full"></div>
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className="mv-ctn w-full h-full  pic" />
    </Link>
  )
}

export default Movie