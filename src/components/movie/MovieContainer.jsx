import React from 'react'
import './index.css'

const MovieContainer = ({children}) => {
  return (
    <div className='mv-grided w-[100%]'>{children}</div>
  )
}

export default MovieContainer