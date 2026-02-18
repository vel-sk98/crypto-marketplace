import React from 'react'
import './Navbar.css'
import logo2 from '../../assets/logo2.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='navbar'>
          <img src={logo2} alt='logo' className='logo'/>
          <ul>
              <Link to='/' ><li>Home</li></Link>
              <Link to='/features' ><li>Features</li></Link>
              <Link to='/pricing' ><li>Pricing</li></Link>
              <Link to='/blog' ><li>Blog</li></Link>
          </ul>
          <div className='nav-right'>
              <select>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="inr">INR</option>
              </select>
              <button>Sign up <img src={arrow_icon} alt='arrow'/></button>
          </div>
      
      </div>
  )
}

export default Navbar