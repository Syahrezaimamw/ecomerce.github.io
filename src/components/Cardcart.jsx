import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
export const Cardcart = ({ img, title, price, qty, products, setProducts }) => {
    return (
        <div className='relative flex items-center justify-between mb-4'>
            <div className='flex items-center h-full'>
                <div className='h-full sm:w-[140px] w-[150px] rounded-xl overflow-hidden bg-[#F0EEED]'>
                    <img src={img} alt="" className='h-full ' />
                </div>
                <div className='ms-3'>
                    <h1 className='text-lg font-semibold w-[90%] md:w-full'>{title}</h1>
                    <p className='text-[16px]'>Size : <span className='text-[15px] text-[rgba(0,0,0,0.6)]'>Large</span></p>
                    <p className='text-[16px]'>Color : <span className='text-[15px] text-[rgba(0,0,0,0.6)]'>White</span></p>
                    <h1 className='mt-2 text-lg font-semibold'>${price}</h1>
                </div>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex justify-end w-full '>

                    <FaTrash className='text-[#FF3333] absolute top-[24px] cursor-pointer' onClick={() => {
                        const aa = products.filter((e) => e.title != title)
                        setProducts(aa)
                    }
                    } />
                </div>
                <button className='flex bg-[#F0F0F0] right-[1px] bottom-0 absolute sm:static py-2 rounded-full px-4 items-center gap-4 b'>

                    <FaMinus className='h-full ' onClick={() => {
                        const databaru = products.map((a) => {
                            return a.qty >= 2 ?
                                a.title == title ? { ...a, qty: a.qty - 1 } : a
                                :
                                a.title == title ? { ...a, qty: a.qty - 0 } : a
                        })
                        setProducts(databaru)
                    }
                    } />
                    <p>{qty}</p>
                    <FaPlus className='h-full text-[14px]' onClick={() => {
                        const databaru = products.map((a) => {
                            return a.title === title ? { ...a, qty: a.qty + 1 } : a
                        })
                        setProducts(databaru)

                    }} />

                </button>

            </div>

        </div>
    )
}
