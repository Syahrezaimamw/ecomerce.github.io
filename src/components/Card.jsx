import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export const Card = ({ img, title, price, jenis, products, setProducts }) => {
    const [value, setValue] = useState(5);
    // const obj={

    // }
    const [state,setState]=useState(false)
   
    const data = JSON.parse(localStorage.getItem('cartproduct'))

    return (
        <div className='w-[240px]'>
            <div className='w-full overflow-hidden bg-[#F0EEED] rounded-lg'>
                <img src={img} alt="" className='' />
            </div>
            <h1 className='font-semibold' onClick={() => {
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
                
                
                
               
            }} >{title.substring(0, 19)}</h1>
            <p className='text-[15px] text-[rgba(0,0,0,0.6)]'>{jenis.substring(0, 20)}...</p>

            <p className='text-xl font-semibold'>${price}</p>
        </div>
    )
}
