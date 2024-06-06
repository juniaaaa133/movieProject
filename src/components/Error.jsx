import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom';

const Error = () => {

    let err = useRouteError();
    console.log(err)
  return (
    <div className='flex gap-[10px] main-f flex-col items-center justify-center absolute top-0 right-0 left-0 bottom-0 m-auto w-[300px] h-fit p-[20px] rounded-[5px]'>
        <p className='text-[40px] '>Oops!</p>
        <p className='text-[15px] text-[#393939]'>{err.status == 500 ?err.data.message : "Please check your connection."}</p>
        <Link to='/' className='px-[23px] py-[5px] bg-[#fff53b]'>Homepage</Link>
    </div>
  )
}

export default Error