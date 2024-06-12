import React from 'react'
import { HiOutlineClock } from "react-icons/hi";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Tag from '../tags/Tag';
import { Link } from 'react-router-dom';

const MovieDetail = ({movie}) => {

  let {
    title ,
    overview,
    release_date,
    genres,
    videos,
    poster_path,
    backdrop_path,
    runtime
  } = movie;

  return (
    <div>
<div className='relative h-[720px] md:h-[560px]'>
<img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" className="pic h-[270px] sm:h-[300px] opacity-[.4] w-full" />
<div className="m-auto w-[90%] sm:w-[93%] flex  h-fit absolute top-[60px] sm:top-[100px] bottom-0 left-0 right-0">
    <div className="flex md:flex-row flex-col gap-[25px] md:gap-[10px] w-full lg:items-center ">
<img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className="pic w-[100px] sm:w-[130px] h-[190px] sm:h-[210px] md:w-[180px] md:h-[260px] rounded-[10px]" />
<div className="flex w-full flex-col gap-[20px] mb-[30px]">
<div className="flex flex-col gap-[10px]">
<div className="flex items-center gap-[20px]">
<div className="flex items-center gap-[7px]">
  {
    genres.map((genre) => (
      <Tag text={genre.name}/>
    ))
  }
  </div>
  <div className="hidden lg:flex items-center gap-[6px]">
    <CiCalendarDate className='fontcl2'/>
  <p className='main-f fontcl3 text-[13px]'>{release_date}</p>
  </div>
</div>
<div className="flex lg:flex-row flex-col justify-between items-start lg:items-center">
<p className='text-[28px] sm:text-[32px] md:text-[36px] main-f fontcl'>{title}</p>
<div className="flex items-center gap-[20px]">
<div className="lg:hidden flex items-center gap-[6px]">
    <CiCalendarDate className='fontcl2'/>
  <p className='main-f fontcl3 text-[12px] sm:text-[13px]'>{release_date}</p>
  </div>
<div className="flex items-center gap-[6px]">
<HiOutlineClock className='fontcl2'/>
<p className="fontcl3 main-f text-[12px] sm:text-[13px]">{runtime} mins</p>
</div>
</div>
</div>
</div>
<p className='text-[14px] md:text-[16px] main-f fontcl3 w-full lg:w-[560px]'>{overview}</p>
<Link to={`https://www.youtube.com/watch?v=${videos.results[0].key}`} className="btn1 flex items-center gap-[5px] w-fit px-[16px] py-[3px] mega-trans">
  <MdOutlineSmartDisplay className=' text-[18px]' />
  <p className='main-f '>Watch Now</p>
</Link>
</div>
    </div>
</div>
</div>
    </div>
  )
}

export default MovieDetail