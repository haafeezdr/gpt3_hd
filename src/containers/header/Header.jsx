import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import showcase from '../../assets/showcase.jpg'

const Header = () => {
  return (
    <div className='gpt3__header section__padding ' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>ALSACAM NIGERIA LIMITED</h1>
        <p>Established in 1991, the company is a leading provider of advanced minning opertions and services. We are dedicated to providing the best possible service to our customers. We deal with various natural minerals like gold, lithium, copper, coltan, iron ore and many more.</p>
        
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>We have worked with over 1000 of well satisfied clients.</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={showcase} alt="showcase" />
      </div>
    </div>
  )
}

export default Header