import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main1 } from '../main/Main1'
import { Sliderlogo } from '../components/Sliderlogo'
import { Main2 } from '../main/Main2'
export const Home = () => {
  return (
    <>
  <Navbar></Navbar>
  <Main1/>
  <Sliderlogo/>
  <Main2></Main2>
    </>
  )
}
