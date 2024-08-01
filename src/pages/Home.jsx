import React, { useState } from 'react'
import slider from '../assets/images/Slider.png'
import Products from '../components/Products'
import Reklama from '../components/Reklama'
import About from '../components/About'
import Press from '../components/Press'
import Acard from '../components/Acard'
import Watching from '../components/Watching'

const Home = ({API,addToCard}) => {

  return (
    <div>
      <div className='container mx-auto w-full'>

        <img className='w-full' src={slider} alt="" />
      </div>
      <Products API={API} addToCard={addToCard}/>
      <Reklama />
      <About/>
      <Press/>
      <Acard/>
      <Watching API={API} addToCard={addToCard}/>
    </div>
  )
}

export default Home
