import React from 'react'
import './footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>  
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links-logo'>
          <img src={logo} alt='logo'/>
          <p>Lamgbasa Ado ajah Lagos.All Right Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>social media</p>
          <p>Counters</p>
          <p>contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy policy</p>
          <p>contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Lamgbasa Ado Ajah Lagos</p>
          <p>+3241948362</p>
          <p>tpub@gmail.com\</p>
        </div>
      </div>
      <div className='gpt3__footer_copyright'>
          <p>@ Copyright. All Rights Reserved 2020</p>
        </div>
    </div>
  )
}

export default Footer
