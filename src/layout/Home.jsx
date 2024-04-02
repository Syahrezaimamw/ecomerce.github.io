import React, { createContext, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Main1 } from '../main/Main1'
import { Sliderlogo } from '../components/Sliderlogo'
import { Main2 } from '../main/Main2'
import { Footer } from '../components/Footer'
import { Popup } from '../components/Popup'

export const Popupp = createContext({
  showpop: false
})

export const Home = () => {
  const [showpop, setShowpop] = useState(false)
  return (
    <div className='relative'>
      <Popupp.Provider value={{ showpop, setShowpop }}>

        <Navbar></Navbar>
        <Main1 />
        <Sliderlogo />
        <Main2></Main2>
        {/* <Popup></Popup> */}
        <Footer></Footer>
      </Popupp.Provider>
    </div>
  )
}
