import React from 'react'

const Text = ({text}) => {
  return (
    <div className='flex items-center w-fit mt-[230px] m-auto gap-[20px] main-f'>
        <div className="w-[60px] h-[1.5px] bg-main"></div>
        <h2 className='main-f text-[24px] text-[#393939]'>{text}</h2>
        <div className="w-[60px] h-[1.5px] bg-main"></div>
    </div>
    
  )
}

export default Text