import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
       <div className='gpt3__whatgpt3-feature'>
          <Feature title="ALSACAM" text="We  extract valuable minerals, metals, and other natural resources from the earth. These resources are then processed and used in various industries, from construction and manufacturing to technology and energy" />
       </div>
       <div className='gpt3__whatgpt3-heading'>
           <h1 className='gradient__text'>What we do at ALSACAM LTD</h1> 
           <p>Explore our services</p>
       </div>
       <div className='gpt3__whatgpt3-container'>
          <Feature title="Exploration & Extraction" text=" Identify potential sites with valuable minerals or resources. Conduct geological surveys. Use drilling, sampling, and geophysical methods to assess deposits. Remove the desired material from the earth." />
          <Feature title="Processing" text="Refine and prepare raw materials for use or sale.Crushing and grinding the ore. Separating valuable materials using chemicals, heat, or mechanical methods."  />
          <Feature title="Distribution and Sales" text=" Deliver processed resources to industries or markets.Construction (e.g., cement, aggregates).Technology (e.g., rare earth metals for electronics). Energy (e.g., coal, uranium)."  />
       </div>
    </div>
  )
}

export default WhatGPT3