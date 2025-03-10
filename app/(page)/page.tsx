import React from 'react'
import Hero from '../components/sections/Hero'
import CoffeeMachine from '../components/sections/CoffeeMachine'
import CoffeeCarousel from '../components/sections/Coffee'
import JLEspressoServices from '../components/sections/CoreOfferings'
import JLEspressoDifference from '../components/sections/Services'

function Home() {
  return (
    <div>
      <Hero/>
      <JLEspressoDifference/>
      <CoffeeCarousel/>
      <CoffeeMachine/>
      <JLEspressoServices/>
    </div>
  )
}

export default Home