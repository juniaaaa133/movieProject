import React from 'react'
import { NavLink } from 'react-router-dom'

export let colors = ['#F87171' , '#f5f771' , '#71adf7' , '#78f771' , '#f7bb71' , '#cf71f7', '#53ed67']

export const data = [
  {
    id : 1,
    name : 'Shr Joon Htoe',
    price : 250
  },
  {
    id : 2,
    name : 'Hot Hot',
    price : 1200
  },
  {
    id : 3,
    name : "Julie's Cheese Sandwich",
    price : 4000
  },
  {
    id : 4,
    name : 'Nabati (Chocolate Wafer)',
    price : 800
  },
]

const Products = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-[30px] mt-[70px]">
      <p className="text-[18px] main-f font-[600]">Snackshock</p>
    <div className="grided">
   {
    data.map((item,index) => (
      <NavLink to={`/products/${item.id}`} key={index}  className="w-full flex shadow-lg justify-between h-[130px] bg-white">
      <div className="w-[70%] flex flex-col px-[20px]  justify-center gap-[10px] h-full main-f">
  <p className="text-[18px]">{item.name}</p>
  <p className="text-[15px] text-[#5f5f5f]">{item.price} Ks</p>
      </div>
      <div className="w-[30%] h-full" style={{
        backgroundColor : colors[(Math.floor(Math.random() * colors.length))]
      }}></div>
    </NavLink>
    ))
   }
    </div>
    </div>
  )
}

export default Products