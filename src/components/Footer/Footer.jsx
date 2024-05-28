
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
      <img src={assets.logo1}  style={{width:'150px'}}   alt='' />
      <p>Food brings people together on many different levels. It's nourishment of the soul and body; it's truly love.</p>
      <div className='footer-social-icons'>
        <img src={assets.facebook_icon}  alt='' />
        <img src={assets.twitter_icon} alt='' />
        <img src={assets.linkedin_icon} alt='' />
      </div>
        </div>
        <div className='footer-content-center'>
<h2>Company</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
</ul>
        </div>
        <div className='footer-content-right'>
<h2>Get in touch</h2>
<ul>
    <li>+19-212-459-5896</li>
    <li>contact@happyfood.com</li>
</ul>
        </div>
      </div> 
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @ Happyfood.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
