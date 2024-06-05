import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { colors, data } from './Products';

const ProductDetail = () => {

let {id} = useParams();
let [product,setProduct] = useState(null);

let filterProduct = (_) => {
  let filteredData = data.find((product) => product.id === parseInt(id));
  setProduct(filteredData);
}

useEffect(()=>{
  filterProduct();
},[])

  return (
    product && 
    <div style={{
      backgroundImage : `linear-gradient(to left bottom,white,${colors[Math.floor(Math.random() * colors.length)]})`
    }} className='w-[85%] sm:w-[300px] rounded-[5px] items-center justify-center h-[250px] shadow-lg mx-auto bg-white  mt-[60px] flex flex-col gap-[15px] '>
      <p className="text-[18px] main-f">{product.name}</p>
      <p className="text-[15px] main-f text-[#5e5e5e]">{product.price} Ks</p>
    </div>
  )
}

export default ProductDetail