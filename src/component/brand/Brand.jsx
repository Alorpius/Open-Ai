import React from 'react'
import './brand.css'
 import { google,shopify,slack,atlassan,dropbox} from './import'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={atlassan} alt='aw'/>
      </div>
      <div>
        <img src={slack} alt='ser'/>
      </div>
      <div>
        <img src={shopify} alt='shop'/>
      </div>
      <div>
        <img src={dropbox} alt='dropbox'/>
      </div>
    </div>
  )
}

export default Brand
