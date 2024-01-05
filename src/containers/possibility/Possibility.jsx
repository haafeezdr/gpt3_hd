import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilty" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibility is beyound our imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, nihil. Quisquam dicta sit quod similique.</p>
        <h4>Request for early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility