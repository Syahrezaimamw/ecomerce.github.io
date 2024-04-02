import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Btn } from '../components/Btn';
export const Maincart = () => {
    
    const [products,setData]=useState(localStorage.cartproduct?JSON.parse(localStorage.getItem('cartproduct')):[])
    const [total,setTotal]=useState(localStorage.cartproduct?JSON.parse(localStorage.getItem('cartproduct')):[{price:0}])
    useEffect(()=>{
        localStorage.setItem('cartproduct',JSON.stringify(products))
    },[products])

    let num=0
    let angka=[]
    const hasil=products.map((a)=>{
      return a.price

    })
    let sum = 0;
for (let i = 0; i < hasil.length; i++) {
    sum += hasil[i];
}
const delivery=12
const discount=sum * 0.20
const totall = discount + delivery
console.log(sum);
    return (
        <div className='pt-8 m-auto max-w-7xl'>
            <div className='flex items-center gap-4 '>
                <p>Home</p>
                <FaAngleRight className='text-[16px]' />
                <p className='font-medium'> Cart</p>
            </div>
            <h1 className='text-5xl font-bold uppercase mt-[20px]'>Your cart</h1>
            <div className='flex justify-between w-full mt-6'>
                <div className=' border-[1.5px] h-[450px] border-gray-200 flex-col flex gap-5 overflow-y-scroll overflow-hidden  p-4 w-[60%] rounded-xl'>
                    {
                        products.map((a,i) => (
                            <div key={i} className='flex items-center justify-between mb-4'>
                                <div className='flex items-center h-full'>

                                
                                <div className='h-full w-[140px] rounded-xl overflow-hidden bg-[#F0EEED]'>
                                    <img src={a.img} alt="" />
                                </div>
                                <div className='ms-3'>
                                    <h1 className='text-lg font-semibold'>{a.title}</h1>
                                    <p className='text-[16px]'>Size : <span className='text-[15px] text-[rgba(0,0,0,0.6)]'>Large</span></p>
                                    <p className='text-[16px]'>Color : <span className='text-[15px] text-[rgba(0,0,0,0.6)]'>White</span></p>
                                    <h1 className='mt-2 text-lg font-semibold'>${a.price}</h1>
                                </div>
                                </div>
                                <div className='flex flex-col justify-between h-full'>
                                <div className='flex justify-end w-full'>
                                        
                                    <FaTrash className='text-[#FF3333] cursor-pointer' onClick={()=>{
                                        const aa= products.filter((e)=> e.title != a.title  )
                                       setData(aa)
                                    }
                                    }/>
                                    </div>
                                    <button className='flex bg-[#F0F0F0] py-2 rounded-full px-4 items-center gap-4 b'>
                                      
                                        <FaMinus className=''/>
                                        
                                        <p>1</p>
                                        <FaPlus/>
                                        
                                    </button>
                                    
                                </div>

                            </div>
                        ))
                    }

                </div>
                <div className='h-full border-[1.5px] border-gray-200  p-4 w-[38%] rounded-xl'>
                    <h1 className='text-xl font-bold'>Order Summary</h1>
                    <div className='flex flex-col gap-4 mt-5'>

                        <div className='flex justify-between w-full'>
                            <p className='text-[rgba(0,0,0,0.6)]'>Subtotal</p>
                            <h1 className='font-semibold'>${sum}</h1>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='text-[rgba(0,0,0,0.6)]'>Discount (20%)</p>
                            <h1 className='font-semibold'>-${Math.round(discount)}</h1>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='text-[rgba(0,0,0,0.6)]'>Delivery Free</p>
                            <h1 className='font-semibold'>${delivery}</h1>
                        </div>
                    </div>
                    <div className='flex justify-between w-full mt-8'>
                        <p className='font-semibold'>Total</p>
                        <h1 className='font-semibold'>${Math.round(totall)}</h1>
                    </div>

                    <div className='flex justify-between mt-8'>
                        <div className='px-4 py-2 bg-[#F0F0F0] rounded-full flex items-center w-[75%]'>
                            <FaRegBookmark className='text-[rgba(0,0,0,0.4)]' />
                            <input type="text" placeholder='Add promo code' className='bg-transparent outline-none ms-2 ' />

                        </div>
                        <button className='px-8 py-2 text-white bg-black rounded-full'>Aplly</button>
                    </div>
                    <button className='w-full py-[16px] mt-7 text-white bg-black rounded-full justify-center gap-3 flex items-center'>Go to Checkout <FaArrowRight className='mt-1' /></button>

                </div>
            </div>
        </div>
    )
}
