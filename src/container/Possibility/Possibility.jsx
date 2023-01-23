import React from 'react'
import possibility from '../../images/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt='ai'/>
      </div>
     <div className='gpt3__possibility-content'>
      <h4>Request early access to get started</h4>
      <h1 className='gradient__text'>The possibility is beyond your imagination</h1>
      <p>lorem word of a pdf develope tseting page that includes clonin of a web page in a front end browser uttilizing react skills with use stae and use effect</p>
      <h4>Request early access to get started</h4>
     </div>
    </div>
  )
}

export default Possibility
