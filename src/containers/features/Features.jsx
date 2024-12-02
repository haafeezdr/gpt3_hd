import React from 'react'
import './features.css'


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into the Future Today & Make it Happen.'</h1>
        <p>Get Started, Contact Us Today Via our company line 08034980051 or send us an email </p>
      </div>
      <div class="container">
        <form target="_blank" action="https://formsubmit.co/alsacamng@gmail.com" method="POST">
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
              </div>
              <div class="col">
                <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
          </div>
          <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
        </form>
     </div>
    </div>
  )
}

export default Features