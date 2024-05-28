

import React from 'react'
import './NotFound.css'
import { assets } from '../../assets/assets'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <img className='not-found'    src={assets.not_found} alt='' />
      <h2>Page Not Found</h2>
    </div>
  )
}

export default NotFound
