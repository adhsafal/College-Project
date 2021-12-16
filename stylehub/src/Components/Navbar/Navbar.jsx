import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <header className='header'>
            <Link to="/">
                <img className='navbar__logo'
                    src="logo.png"
                    alt="logo"
                />
            </Link>
            <nav className="navbar__contents">
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }}>
                        <h2 className='navbar__links'>Home</h2>
                    </Link></li>
                    <li><Link to='/product' style={{ textDecoration: 'none' }}>
                        <h2 className='navbar__links'>Product</h2>
                    </Link></li>
                    <li><Link to='/customize' style={{ textDecoration: 'none' }}>
                        <h2 className='navbar__links' >Customize</h2>
                    </Link></li>

                </ul>
                <ul className='navbar__icons'>
                    <li><Link to='/login'><AccountCircleIcon className='icons' /></Link></li>
                    <li><Link to='/product'><ShoppingCartIcon className='icons' /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
