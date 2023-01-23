import React from 'react'
import './header.css'
import people from '../../images/people.png'
import ai from '../../images/ai.png'


const Header = () => {
return (
    <div className='gpt3__header section_padding' id='Home' >
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build somethng amazing wth GPT3 Open Ai</h1>
        <p>Lets build a costume website and redeploy on netlify and host on a free doman page
           including other advancement
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter your Emal Address'/>
          <button type='button'>Get started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='likes'/>
          <p>6,000 people reuested access to visit in the last 24hrs</p>
        </div>
         </div>
         <div className='gpt3__header-image'>
          <img src={ai} alt='al'/>
        </div>
    </div>
  )
}

export default Header
