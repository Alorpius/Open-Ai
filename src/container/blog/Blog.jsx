import React from 'react'
import './Blog.css'
import {Article} from '../../component'
import {bg1,bg2,bg3,bg4,bg5} from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'> A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={bg1}/> 
        </div>
        <div className='gpt3__blog-container_groupB'>
         <Article imgUrl={bg2} Date='02 Dec 2022' title='images as props from article'/>
         <Article imgUrl={bg3} Date='02 Dec 2022' title='images as props from article'/>
         <Article imgUrl={bg4} Date='02 Dec 2022' title='images as props from article'/>
         <Article imgUrl={bg5} Date='02 Dec 2022' title='images as props from article'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
