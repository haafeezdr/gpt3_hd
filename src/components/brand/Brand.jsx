import React from 'react'
import './brand.css'
import { gold, colban, copper, iron, lithium } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-div'>
        <img src={lithium} alt="lithium" />
        <h1>Lithium</h1>
      </div>
      <div className='gpt3__brand-div'>
        <img src={gold} alt="gold" />
        <h1>Gold</h1>
      </div>
      <div className='gpt3__brand-div'>
        <img src={colban} alt="colban" />
        <h1>Coltan</h1>
      </div>
      <div className='gpt3__brand-div'>
        <img src={copper} alt="copper" />
        <h1>Copper</h1>
      </div>
      <div className='gpt3__brand-div'>
        <img src={iron} alt="iron" />
        <h1>Iron</h1>
      </div>
   
    </div>
  )
}

export default Brand