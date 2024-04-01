import React from 'react'
import calvin from '../images/calvin.png'
import gucci from '../images/gucci.png'
import prada from '../images/prada.png'
import Ver from '../images/Ver.png'
import zara from '../images/zara.png'
export const Sliderlogo = () => {
    return (
        <div className="relative inline-flex w-full py-6 bg-black flex-nowrap ">
            <ul className="flex items-center justify-center md:justify-start [&_li_img]:w-[160px] [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    <img src={Ver} alt="Facebook" />
                </li>
                <li>
                    <img src={gucci} alt="Disney" className=' w-[70px] hidden' />
                </li>
                <li>
                    <img src={gucci} alt="Airbnb" />
                </li>
                <li>
                    <img src={prada} alt="Apple" />
                </li>
                <li>
                    <img src={calvin} alt="Spark" />
                </li>
            </ul>
            <ul
                className="flex items-center justify-center [&_li_img]:w-[160px]  md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
            >
                <li>
                    <img src={Ver} alt="Facebook" />
                </li>
                <li>
                    <img src={gucci} alt="Disney" className=' w-[70px] hidden' />
                </li>
                <li>
                    <img src={gucci} alt="Airbnb" />
                </li>
                <li>
                    <img src={prada} alt="Apple" />
                </li>
                <li>
                    <img src={calvin} alt="Spark" />
                </li>
            </ul>
        </div>


    )
}


