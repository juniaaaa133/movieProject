import React from 'react'
import Tag from '../../tags/Tag'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import './index.css'
import { Link } from 'react-router-dom';

const Hero = ({movie,genre}) => {

let {
  id,
  title ,
  overview,
  backdrop_path,
} = movie;

  return (
    <div className='w-full  h-[100vh] relative'>
      <div className="absolute w-[87%]   z-[3] top-[inherit] sm:top-0 bottom-[30px] sm:bottom-0 m-auto left-0 sm:right-[inherit] right-0 sm:left-[40px] h-fit flex flex-col gap-[20px] ">
    <div className="flex items-center gap-[7px]">
    <Tag text={genre.name}/>
    </div>
<Link to={`/movies/${id}`} className="flex items-center flex-wrap gap-[20px]">
<p className="main-f w-fit leading-[50px] sm:leading-[80px] text-[48px] sm:text-[70px] md:text-[76px] font-[600] fontcl line-">{title}</p>
<div className="bcu relative rounded-full w-[40px] h-[40px] bs">
<FaPlay className='trans text-[15px] fontcl2 absolute top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto'/>
</div>
</Link>
<p className="md:w-[450px] fontcl3 text-[14px] main-f">{overview}</p>
<Link to={`/movies/${id}`} className="btn1 flex items-center gap-[5px] w-fit px-[16px] py-[3px] mega-trans">
  <CiCircleInfo className=' text-[18px]' />
  <p className='main-f '>More Info</p>
</Link>
      </div>
        <div  className="hero-layout w-full h-full absolute top-0 left-0"></div>
        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" className="pic w-full h-full" />
    </div>
  )
}

export default Hero