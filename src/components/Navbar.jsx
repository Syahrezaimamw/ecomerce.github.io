import React from 'react'
import Logo from '../images/SHOP.CO.png'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-5 py-6 m-auto xl:px-0 max-w-7xl'>
            <div className='flex items-center gap-4'>
                <FaBars className='text-2xl md:hidden'/>
                
            <img src={Logo} alt="" className='w-[160px]' />
            </div>
            <ul className='items-center hidden gap-8 md:flex'>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
            <div className='items-center px-6 py-[12px] lg:w-[300px] hidden lg:flex xl:w-[500px] bg-[#F0F0F0] rounded-full '>
                <FaMagnifyingGlass className='lg:text-3xl xl:text-xl  me-1 text-[rgba(0,0,0,0.4)]'>
                    
                </FaMagnifyingGlass>
                <input type="text" name="" id="" className='bg-transparent outline-none ms-3 w-[400px] placeholder:font-lighter placeholder:text-[15px]' placeholder='Search for products' />
                
                
            </div>
            <div className='flex items-center gap-6 text-xl text-[rgba(0,0,0,0.9)]'>
                <FaMagnifyingGlass className='lg:hidden'/>
                <Link to='/ecomerce.github.io/cart'>
                <FaCartShopping></FaCartShopping>
                </Link>
                <FaRegCircleUser></FaRegCircleUser>

            </div>
            
            
        </div>
    )
}
