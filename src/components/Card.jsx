import React, { useContext, useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { FaCartShopping } from "react-icons/fa6";

import { Popupp } from '../layout/Home';
export const Card = ({ img, title, price, jenis, products, setProducts }) => {
    const {showpop,setShowpop}=useContext(Popupp)
    const [state,setState]=useState(false)
    const data = JSON.parse(localStorage.getItem('cartproduct'))
    const [statepop,setStatepop]=useState(false)

function handleAddCart(){
  
    
}
    
    return (
        <div className='relative w-[240px]'>
            <div className='w-full overflow-hidden bg-[#F0EEED] rounded-lg'>
                <img src={img} alt="www" className='' />
                
            </div>
            <h1 className='mt-2 font-semibold'>{title.substring(0, 19)}</h1>
            <p className='text-[15px] text-[rgba(0,0,0,0.6)] mt-[1px]'>{jenis.substring(0, 20)}...</p>
            <p className='flex items-center justify-between w-full mt-4 text-xl font-semibold' ><span>
            ${price}
                </span>
                <span className={`${statepop ? 'flex':'hidden'} animate__animated animate__fadeIn  font-medium text-[14px] relative left-[20px]`}> Ditambahkan</span>
                <FaCartShopping className='me-3 cursor-pointer text-[17px]'  onClick={() =>{
                      setStatepop(true)
                      setTimeout(()=>{
                          setStatepop(false)
                          
                      },1000)
                      
                      if(state==false ){
                          setProducts([...products,{qty:1,title:title,price:price,img:img}])
                          setState(true)
                      }else{  
                      products.map((a)=>{
                          if(a.title==title){
                              setProducts([...products])
                          }else{
                              setProducts([...products,{qty:1,title:title,price:price,img:img}])
                          }
                      })
                      }
                }} /></p>
        </div>
    )
}
