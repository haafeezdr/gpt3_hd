import React from 'react'
import './features.css'
import { Feature } from '../../components'


const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From the.Raise your voice to the.Raise your voice to the.Raise your voice to the.Raise your voice to the.Raise your voice to the.Raise your voice to the.Raise your voice to the.',
  },
  {
    title: 'Become the tended active',
    text: 'At jointure ladyship an insisted so humanity he. Friendly Bachelor entrance to on by. As put impossible own apartments b',
  },
  {
    title: 'Message or am nothing',
    text: 'At jointure ladyship an insisted so humanity he. Friendly Bachelor entrance to on by. As put impossible own apartments b',
  },
  {
    title: 'Really boy law county',
    text: 'The perform of the  world is not a good place and to those that feel it is a good chance that the world will not be cconneted in this way so do that',
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into the Future Today & Make it Happen.'</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features