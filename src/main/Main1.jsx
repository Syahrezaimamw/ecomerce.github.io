import React from 'react'
import { Blokprice } from '../components/Blokprice'
import orang from '../images/orang.png'
import bintang from '../images/Vector.png'
export const Main1 = () => {
    return (
        <div className='w-full bg-[#F2F0F1] lg:px-5  '>

        <div className='max-w-7xl min-h-[663px] flex-col  pt-9 gap-8 lg:gap-0  lg:pt-0 lg:flex-row px-5 lg:px-0 mx-auto flex'>
            <div className='flex items-center justify-start w-full md:justify-center lg:w-1/2'>
                <div className='flex flex-col gap-6 md:items-center lg:items-start'>
                    <h1 className='text-5xl font-bold md:text-6xl text-start md:text-center lg:text-5xl xl:text-7xl lg:text-start '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='text-[rgba(0,0,0,0.6)]   text-start md:text-center lg:text-start text-[15px] md:w-[64%] lg:w-[94%]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className='py-3 text-[15px] text-white bg-black rounded-full w-[180px] px-9 black'>Shop Now</button>
                    <div className='flex flex-wrap justify-center gap-5 mt-5 sm:justify-start md:justify-start lg:justify-start '>
                        <Blokprice price='200' desk='International Brands'></Blokprice>
                        <Blokprice price='2.000' desk='High-Quality Products'></Blokprice>
                        <Blokprice price='30.000' desk='Happy Customers'></Blokprice>
                    </div>
                </div>

            </div>
            <div className='relative w-full lg:w-1/2 '>
                <img src={orang} alt="" className='md:w-[600px] w-[500px] lg:absolute bottom-0 md:ms-[13%] lg:ms-0' />
                <img src={bintang} alt="" className='absolute sm:top-[100px] top-[50px] sm:w-[90px] w-[80px] right-[30px]' />
                <img src={bintang} alt="" className='absolute sm:top-[300px] top-[180px] left-[20px] w-[50px]' />

            </div>
        </div>
        </div>
    )
}
