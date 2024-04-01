import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { getApi } from '../service/api'
import { Btn } from '../components/Btn'
export const Main2 = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    useEffect(() => {
        getApi().then(a => setData(a))

    }, [])
    function handleShow() {
        show ? setShow(false) : setShow(true)

    }
    const [products,setProducts]=useState(localStorage.cartproduct? JSON.parse(localStorage.getItem('cartproduct')):[])
    useEffect(()=>{
        localStorage.setItem('cartproduct',JSON.stringify(products))
    },[products])
    // localStorage.removeItem('cartproduct')


        
        // 
    console.log(products)
    return (
        <div className='m-auto mt-20 max-w-7xl'>
            <h1 className='text-[40px] font-bold text-center uppercase'> new arrivals</h1>
            <div className='hidden lg:flex mt-[40px] gap-5 justify-center flex-wrap'>
                {
                    data.map((e, i) => (
                        i < 5 ?
                            <Card key={i} img={e.images[0]} setProducts={setProducts} products={products} jenis={e.description} title={e.title} price={e.price}></Card> : ''
                    ))
                }

            </div>
            <div className={`lg:hidden flex flex-col m-auto bg-white `}>
                <div className="flex pb-10 overflow-x-scroll hide-scroll-bar">
                    <div className="flex gap-10 ml-10 flex-nowrap lg:ml-40 md:ml-20 ">
                        {
                            data.map((e, i) => (
                                i < 5 ?
                                    <Card key={i} setProducts={setProducts} products={products} img={e.images[0]} jenis={e.description} title={e.title} price={e.price}></Card> : ''
                            ))
                        }

                    </div>
                </div>
            </div>


            <div className={`${show ? 'flex' : 'hidden'} mt-[40px] gap-5 justify-center flex-wrap`}>
                {
                    data.map((e, i) => (
                        i >= 5 ?
                            <Card key={i} img={e.images[0]} setProducts={setProducts} products={products} jenis={e.description} title={e.title} price={e.price}></Card> : ''
                    ))
                }

            </div>
            <div className='flex justify-center w-full mt-10 mb-5'>

                <Btn onClick={handleShow}>{show == false ? 'View All ' : 'Close All'}</Btn>
            </div>
        </div>
    )
}
