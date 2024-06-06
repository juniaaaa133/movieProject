import React from 'react'
import { Link, json, useLoaderData } from 'react-router-dom'

const Users = () => {

  let data = useLoaderData();

  return (
    <div className='grided my-[80px] mx-auto'>
     {
      data.map((user,index) => (
        <Link key={index} to={`/users/${user.id}`}className="shadow-md flex gap-[15px] w-full px-[20px] main-f h-[70px] bg-white items-center">
        <img src="https://i.pinimg.com/564x/60/07/0e/60070ed889df308cbe80253e8c36b3a3.jpg" alt="" className="w-[45px] h-[45px] rounded-full" />
      <div className="flex gap-[8px] flex-col">
      <p className=" text-[16px]">{user.name}</p>
        <p className=" text-[12px] text-[#616161]">{user.email}</p>
      </div>
      </Link>
      ))
     }
    </div>
  )
}

export default Users

export let loader = async () => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok){
    throw json({message : "Cannot get users"},{status : 500});
  }
  let data = await res.json();
  return data;
}