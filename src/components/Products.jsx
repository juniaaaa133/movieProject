import React from 'react'
import { Link, NavLink, json, useLoaderData } from 'react-router-dom'

export let colors = ['#F87171' , '#f5f771' , '#71adf7' , '#78f771' , '#f7bb71' , '#cf71f7', '#53ed67']

const Products = () => {

let data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] mt-[70px]">
      <p className="text-[18px] main-f font-[600]">Gostraww</p>
    <div className="grided">
   {
    data.map((post,index) => (
      <Link to={`/products/${post.id}`} key={index}  className="w-full flex flex-col shadow-lg justify-between h-[380px] bg-white">
         <div className="h-[5%] w-full" style={{
        backgroundColor : colors[(Math.floor(Math.random() * colors.length))]
      }}></div>
      <div className="h-[95%] flex flex-col px-[20px] py-[30px] gap-[20px] w-full main-f">
  <p className="text-[13px] text-[#7c7c7c] mb-[15px]">Posted by {generateUser(post.userId)}</p>
  <p className="text-[18px] font-[600]">
{
  post.title.length > 45 ? post.title.substring(1,40) + '...See More' : post.title
}
</p>
  <p className="text-[15px] text-[#505050]">
  {
  post.body.length > 130 ? post.body.substring(1,125) + '...See More' : post.body
}
   </p>
      </div>
     
    </Link>
    ))
   }
    </div>
    </div>
  )
}

export default Products

export const loader = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if(!res.ok){
    throw json({message : "Cannot get data!"} ,{status : 500})
  }
  let data = await res.json();
  return data;
}

export const generateUser = (id) => {
  switch (id) {
    case 1:
      return 'Leo Kyaw'
    case 2:
      return 'Sabal Moe'
    case 3:
      return 'Joker Kg Lay'
    case 4:
      return 'William Steve'
    case 4:
      return 'Chocolate Daisy'
    default:
      return 'Anonymous'
  }
}