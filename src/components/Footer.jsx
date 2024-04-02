import React from 'react'
import Logo from '../images/SHOP.CO.png'
import { Bulleticon } from './Bulleticon'
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { Listfooter } from './Listfooter';
import badge1 from '../images/Badge.png'
import badge2 from '../images/Badge (1).png'
import badge3 from '../images/Badge (2).png'
import badge4 from '../images/Badge (3).png'
import badge5 from '../images/Badge (4).png'
export const Footer = () => {
    return (
        <div className=' pt-[180px]'>
            <div className='w-full bg-[#F0F0F0] relative pt-[0px] pb-10 px-'>
                <div className='flex justify-center w-full'>

                    <div className='relative bottom-[78px] rounded-2xl mx-5 xl:mx-0 flex flex-col lg:flex-row items-center justify-between text-white lg:px-16 md:px-10 px-7 py-8 m-auto bg-black max-w-7xl'>
                        <h1 className='text-[40px] font-bold w-full lg:w-[45%] leading-[43px]'>
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h1>
                        <div className='flex flex-col w-full lg:w-[fit-content] mt-8 lg:mt-0 h-full gap-3'>
                            <button className='py-3 w-full lg:w-[400px] font-semibold flex items-center text-black/40 ps-7 bg-white rounded-full'>
                                <FaRegEnvelope className='text-xl'></FaRegEnvelope>
                                <input type="text" className='font-normal outline-none ms-4 placeholder:text-black/40' placeholder='Enter your email addres' />

                            </button>
                            <button className='py-3 w-full lg:w-[400px] font-semibold text-black bg-white rounded-full'>
                                Subscribe to Newsletter
                            </button>
                        </div>

                    </div>
                </div>


                <div className='px-5 m-auto max-w-7xl xl:px-0'>
                    <div className='flex flex-col gap-9 lg:gap-0 lg:flex-row justify-between w-full pb-10 border-b-[2px] border-[rgba(0,0,0,0.1)]'>

                        <div className=' w-full lg:w-[25%]'>
                            <img src={Logo} alt="" />
                            <p className='text-[rgba(0,0,0,0.6)] text-[15px] mt-3 leading-[25px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className='flex gap-4 mt-8'>
                                <Bulleticon><FaTwitter className='group-hover:text-white'></FaTwitter></Bulleticon>
                                <Bulleticon><FaFacebookF className='group-hover:text-white'></FaFacebookF></Bulleticon>
                                <Bulleticon><FaInstagram className='text-lg group-hover:text-white'></FaInstagram></Bulleticon>
                                <Bulleticon><FaGithub className='group-hover:text-white'></FaGithub></Bulleticon>

                            </div>
                        </div>
                        <div className='w-full lg:w-[65%] flex flex-wrap gap-7 justify-between'>
                            <Listfooter judul='company'>
                                {['About', 'Featurs', 'Work', 'Career']}
                            </Listfooter>
                            <Listfooter judul='help'>
                                {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']}
                            </Listfooter>
                            <Listfooter judul='faq'>
                                {['Account', 'Manage Deliveries', 'Orders', 'Payments']}
                            </Listfooter>
                            <Listfooter judul='resource'>
                                {['free eBooks', 'Developments Tutorial', 'How to - Blog', 'Youtube Playlist']}
                            </Listfooter>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between w-full gap-5 pt-5 lg:flex-row lg:items-start'>
                        <p className='text-[15px] text-center lg:text-start text-[rgba(0,0,0,0.6)] mt-[2px]'>Syahreza &copy; 2024,All Rights Reserved</p>
                        <div className='flex items-start justify-center w-full gap-5 lg:w-[fit-content]'>
                            {[badge1, badge2, badge3, badge4, badge5].map((a) => (
                                <img src={a} alt="" />
                            ))}
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}
