import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";

const UserDetail = () => {

  let navigate = useNavigate();
  let data = useLoaderData();
  let {
    name ,
    email,
    phone ,
    username,
    website
  } = data;
  console.log(data)

  return (
    <div className='flex flex-col gap-[40px] p-[25px] h-fit w-[360px] mt-[80px] mx-auto bg-white'>
          <div className="flex items-center gap-[8px]">
          <img src="https://i.pinimg.com/564x/60/07/0e/60070ed889df308cbe80253e8c36b3a3.jpg" alt="" className="w-[45px] h-[45px] rounded-full" />
          <p className=" text-[16px]">{name}</p>
          </div>
       <div className="flex gap-[20px] justify-center flex-col">
       <p className=" text-[14px] text-[#616161]">
          Username - {username}
        </p>
        <p className=" text-[14px] text-[#616161]">
          Email - {email}
        </p>
        <p className=" text-[14px] text-[#616161]">
          Phone - {phone}
        </p>
        <p className=" text-[14px] text-[#616161]">
          Website - {website}
        </p>
       </div>
       <div onClick={()=>navigate('/products')} className="flex cursor-pointer select-none items-center gap-[6px] w-full">
        <IoMdArrowBack />
        <p className="text-[13px]">Users</p>
      </div>
    </div>
  )
}

export default UserDetail

export let loader = async ({req,params}) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  if(!res.ok){
    throw json({message : "Cannot get user"},{status : 500});
  }
  let data = await res.json();
  return data;
}