import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='md:w-[500px] w-[95%] sm:w-[80%] shadow-md gap-[20px] h-[50px] flex items-center justify-center rounded-[35px] sticky top-[20px] left-0 right-0 m-auto bg-white'>
      <NavLink to='/' className='text-[16px] active:text-[#e4cf2d] trans main-f'>Home</NavLink>
      <NavLink to='/about' className='text-[16px] active:text-[#e4cf2d] trans main-f'>About</NavLink>
      <NavLink to='/products' className='text-[16px] active:text-[#e4cf2d] trans main-f'>Posts</NavLink>
      <NavLink to='/users' className='text-[16px] active:text-[#e4cf2d] trans main-f'>Users</NavLink>
    </nav>
  )
}

export default Nav