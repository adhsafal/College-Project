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
                    height={"110px"}
                    width={"130px"} />
            </Link>
            <nav className="navbar__links">
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }}>
                        <h2 className='links'>Home</h2>
                    </Link></li>
                    <li><Link to='/product' style={{ textDecoration: 'none' }}>
                        <h2 className='links'>Product</h2>
                    </Link></li>
                    <li><Link to='/customize' style={{ textDecoration: 'none' }}>
                        <h2 className='links' >Customize</h2>
                    </Link></li>

                </ul>
                <ul className='navbar__icons'>
                    <li><Link to='/product'><AccountCircleIcon className='icons' /></Link></li>
                    <li><Link to='/product'><ShoppingCartIcon className='icons' /></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
