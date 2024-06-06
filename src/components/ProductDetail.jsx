import React, { useEffect, useState } from 'react'
import {  useLoaderData, useNavigate, useParams, useRouteLoaderData } from 'react-router'
import { colors, generateUser } from './Products';
import { IoMdArrowBack } from "react-icons/io";

const ProductDetail = () => {

  let navigate = useNavigate();
  let data = useLoaderData();
  let {
    userId,
    title,
    body
  } = data;

  return (
    <div className="md:w-[600px] sm:w-[70%] w-[90%] mx-auto justify-center items-center mt-[80px] flex flex-col gap-[50px]">
      <div className="flex items-center gap-[15px] main-f">
        <p className='text-[13px] text-[#828282]'>Posted by</p>
        <div style={{
      backgroundImage : `linear-gradient(to bottom,white,${colors[Math.floor(Math.random() * colors.length)]})`
    }} className='w-fit text-[13px] px-[25px] py-[5px] rounded-[25px] h-fit shadow-lg '>
      {
        generateUser(userId)
      }
    </div>
      </div>
      <p className="text-align text-[20px] font-[600] main-f">{title}</p>
      <p className="text-[15px] text-[#525252] main-f text-align">{body}</p>
      <div onClick={()=>navigate('/products')} className="flex cursor-pointer select-none items-center gap-[6px] w-full">
        <IoMdArrowBack />
        <p className="text-[13px]">Posts</p>
      </div>
    </div>
  )
}

export default ProductDetail

export let loader = async ({req,params}) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  if(!res.ok){
    throw json({message : "Cannot get post!"} , {status : 500})
  }
  let data = await res.json();
  return data;
}