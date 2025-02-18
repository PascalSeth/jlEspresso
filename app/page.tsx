import React from 'react'
import Hero from './components/sections/Hero'
import CoffeeMachine from './components/sections/CoffeeMachine'
import CultureServices from './components/sections/Services'
import CoffeeCarousel from './components/sections/Coffee'

function Home() {
  return (
    <div>
      <Hero/>
      <CultureServices/>
      <CoffeeCarousel/>
      <CoffeeMachine/>
    </div>
  )
}

export default Home