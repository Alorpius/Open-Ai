import React from 'react'
import './navbar.css'
import {RiCloseLine,RiMenu3Line} from 'react-icons/ri'
import bg from '../../images/logo.png'
import { useState } from 'react'

const Menu=()=>(
  <>
      <p><a href='#Home'>Home</a></p>
      <p><a href='#whpt3'>What is GP3?</a></p>
      <p><a href='#possibility'>Open Ai</a></p>
      <p><a href='#feautures'>Case studies</a></p>
      <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu]=useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
        <img src={bg} alt='logo'/>
        </div>
        <div className='gpt3__navbar-links_container'>
           <Menu/>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>sign in</p>
          <button type='button'>sign up</button>
        </div>
        <div className='gpt3__navbar-menu'>
            {toggleMenu 
            ? <RiCloseLine color='fff' size={27} onClick={()=>setToggleMenu(false)}/>
             : <RiMenu3Line color='fff' size={27} onClick ={()=>setToggleMenu(true)}/>}
             {toggleMenu && (
             <div className='gpt3__navbar-menu_container scale-up'>
                <div className='gpt3__navbar-menu_container-links'>
                  <Menu/>
             <div className='gpt3__navbar-menu_container-links-sign'>
               <p>sign in</p>
               <button type='button'>sign up</button>
        </div>
                </div>
              </div>)}
            
        </div>
      </div>
    </div>
  )
}

export default Navbar
