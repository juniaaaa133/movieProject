import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";

const Error = () => {

let {message , status} = useRouteError();

return (
<div className='flex flex-col items-center justify-center gap-[20px]'>
<div className='text-center main-f mt-[200px] fontcl2 text-[30px] '>{status == 500 ? message : "No Internet!"}</div>
<Link to={`/`} className="btn1 flex items-center gap-[5px] w-fit px-[16px] py-[3px] mega-trans">
  <IoHomeOutline className=' text-[18px]' />
  <p className='main-f '>Homepage</p>
</Link>
</div>
)
}

export default Error