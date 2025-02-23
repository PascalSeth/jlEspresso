import React from 'react'
import MajestyCoffeeShowcase from './CoffeeMakerShowcase'
import CoffeeGrid from './coffeGrid'
import ShopBenefits from './Benefits'
import CoffeeMachineFAQ from './Faq'


function CoffeeMaker() {
  return (
    <div>
        <MajestyCoffeeShowcase/>
        <CoffeeGrid/>
        <ShopBenefits/>
        <CoffeeMachineFAQ/>
    </div>
  )
}

export default CoffeeMaker