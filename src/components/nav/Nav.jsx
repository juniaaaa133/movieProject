import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaSearchMinus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import './index.css'

const Nav = () => {

let [isOpenedMenu,setIsOpenedMenu] = useState(false);
let [isOpenedSearch,setIsOpenedSearch] = useState(false);
let [isScrolled,setIsScrolled] = useState(false);
let [searchValue,setSearchValue] = useState('');

let navigate = useNavigate();

let searchMovies = (e) => {
  e.preventDefault();
  setSearchValue(e.target.value);
}

let generateSearchedString = () => {
  if(searchValue.trim() == 0){
    alert('Please search only valid values')
    return;
  }
  navigate(`/movies/search-movies/${searchValue.toLowerCase()}`)
}

useEffect(()=>{
window.addEventListener('scroll',() =>
   window.scrollY > 500? setIsScrolled(true) : setIsScrolled(false)
)},[])

  return (
    <>
    <div className={`z-[6] top-0  items-center w-[100%] h-[56px] flex justify-between px-[20px] md:px-[40px] ${isScrolled ? 'fixed bg-org' :'absolute bg-tran'}`}>
      <div className="flex items-center gap-[10px]">
      <RxHamburgerMenu onClick={()=>setIsOpenedMenu(true)} className='lg:hidden block p-[10px] mini-trans rounded-full bcu active:bg-[#424242] bg-inherit text-[40px] fontcl'/>
        <NavLink to='/' className='logo-f fontcl2 text-[25px] '>Mabel</NavLink>
      </div>
<div className="flex items-center gap-[80px]">
<div className="lg:flex hidden items-center gap-[20px]">
          <NavLink to='/' className='nv trans fontclH logo-f text-[15px] pb-[2px] '>Home</NavLink>
          <NavLink to='/upcomings' className='nv trans fontclH logo-f text-[15px] pb-[2px]'>Upcomings </NavLink>
          <NavLink to='/populars' className='nv trans fontclH logo-f text-[15px] pb-[2px]'>Most Populars</NavLink>
        </div>
<CiSearch onClick={()=>setIsOpenedSearch(true)} className={`sm:hidden block p-[10px] mini-trans rounded-full bcu active:bg-[#424242] bg-inherit text-[40px] fontcl ${!isOpenedSearch ? 'block' : 'hidden'}`} />
<FaSearchMinus onClick={()=>setIsOpenedSearch(false)} className={`sm:hidden block p-[10px] mini-trans rounded-full bcu active:bg-[#424242] bg-inherit text-[40px] fontcl ${isOpenedSearch ? 'block' : 'hidden'}`} />
<div className="hidden sm:flex items-center gap-[10px]">
  <input type="text" onChange={(e)=>searchMovies(e)} placeholder='Search' className=" md:w-[280px] px-[10px] pb-[5px] border-b-solid border-b-[1.6px] bg-inherit outline-none fontcl main-f border-b-[#e8e8e8] " />
<CiSearch onClick={generateSearchedString} className='p-[10px] trans rounded-[5px] bcu hover:bg-[#424242] bg-inherit text-[40px] fontcl'/>
</div>
</div>
    </div>

    <div className={`${isOpenedSearch ? 'top-[0]' : 'top-[-120px]'} mega-trans sm:hidden flex gap-[10px] pb-[20px] bg-org fixed z-[5] items-end w-[100%] h-[112px] justify-end px-[20px] md:px-[40px] `}>
  <input type="text" onChange={(e)=>searchMovies(e)} placeholder='Search' className=" w-[75%] px-[10px] pb-[5px] border-b-solid border-b-[1.6px] bg-inherit outline-none fontcl main-f border-b-[#e8e8e8] " />
<CiSearch onClick={generateSearchedString} className='p-[10px] trans rounded-[5px] bcu hover:bg-[#424242] bg-inherit text-[40px] fontcl'/>
    </div>

    <div onClick={()=>setIsOpenedMenu(false)} className={`fixed z-[6] top-0 left-0 w-full h-[100vh] bg-[#0f0f0f7f] ${isOpenedMenu ? 'block' : 'hidden'}`}></div>
    <div className={`bg-org z-[7] flex flex-col fixed top-0 p-[20px] w-[200px] h-[100vh] mega-trans ${isOpenedMenu ? 'left-0' : 'left-[-210px]'}`}>
    <div className="flex mb-[50px] items-center gap-[10px]">
      <RxCross1 onClick={()=>setIsOpenedMenu(false)} className='lg:hidden block p-[10px] mini-trans rounded-full bcu active:bg-[#424242] bg-inherit text-[40px] fontcl'/>
        <NavLink to='/' className='logo-f fontcl2 text-[25px] '>Mabel</NavLink>
      </div>
      <div className="flex flex-col gap-[16px]">      
      <NavLink to='/' className='nv trans fontclH logo-f text-[15px] pb-[2px] '>Home</NavLink>
          <NavLink to='/upcomings' className='nv trans fontclH logo-f text-[15px] pb-[2px]'>Upcomings </NavLink>
          <NavLink to='/populars' className='nv trans fontclH logo-f text-[15px] pb-[2px]'>Most Populars</NavLink>
  
      </div>
        </div>
    </>
    



  )
}

export default Nav
