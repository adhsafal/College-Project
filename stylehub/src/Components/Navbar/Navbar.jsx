import React from 'react'
import './Navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../Logo/Logo';


const Navbar = () => {
    return (
        <header className='header'>
            <Logo />
            <nav className="navbar__contents">
                <ul>
                    <li>
                        <h2 className='navbar__links'><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></h2>
                    </li>
                    <li>
                        <h2 className='navbar__links'><Link to='/product' style={{ textDecoration: 'none', color: 'black' }}>Product</Link></h2>
                    </li>
                    <li>
                        <h2 className='navbar__links' ><Link to='/customize' style={{ textDecoration: 'none', color: 'black' }}>Customize</Link></h2>
                    </li>
                </ul>
                <ul className='navbar__icons'>
                    <li>
                        <button type="button" className="btn position-relative">
                            <Link to='/login'><AccountCircleIcon className='icons' /></Link>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn position-relative">
                            <Link to='/cart'><ShoppingCartIcon className='icons' /></Link>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
