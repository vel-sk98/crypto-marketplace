import React, { useContext } from 'react'
import './Navbar.css'
import logo2 from '../../assets/logo2.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { Link } from 'react-router-dom'
import { CoinContext } from '../../Context/CoinContext'

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (e) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" })
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" })
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }
        }

    }

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={logo2} alt='logo' className='logo' />
            </Link>    
            <ul>
                <Link to={'/'} ><li>Home</li></Link>
                <Link to='/features' ><li>Features</li></Link>
                <Link to='/pricing' ><li>Pricing</li></Link>
                <Link to='/blog' ><li>Blog</li></Link>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign up <img src={arrow_icon} alt='arrow' /></button>
            </div>

        </div>
    )
}

export default Navbar