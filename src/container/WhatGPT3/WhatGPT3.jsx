import React from 'react'
import './WhatGPT3.css'
import {Feauture} from '../../component' 


const WhatGPT3 = () => {
return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
       <div className='gpt3__whatgpt3-feauture'>
        <Feauture title='What is Gpt3' text='Gpt3 is a modern development animation software that allows you to run codes on a software format'/>
       </div>
       <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibility are beyound your imagination</h1>
        <p>Explore the library</p>
       </div>
       <div className='gpt3__whatgpt3-container'>
        <Feauture title='Chatbox' text='we take the opinions of others to develop and maintain our existing profile'/>
        <Feauture title='Education' text='As a team of learned personnel, we pride our knowledgeability over our personal interest'/>
        <Feauture title='knowlegebase' text='we understand that knowlege is power hence we are able to gather a variety of experts from different walks of life and domains'/>
       </div>
    </div>
  )
}

export default WhatGPT3
