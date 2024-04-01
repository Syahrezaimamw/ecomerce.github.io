import React from 'react'
import { FaPlus } from "react-icons/fa6";
export const Blokprice = ({price,desk}) => {
  return (
    <div className='px-6 blokp'>
        <h1 className='flex items-center text-3xl font-semibold'>{price} <FaPlus className='text-xl font-bold'/></h1>
        <p className='text-[rgba(0,0,0,0.6)] text-[14px]   '>{desk}</p>
    </div>
  )
}
