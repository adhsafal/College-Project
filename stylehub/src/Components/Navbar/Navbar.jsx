import React from 'react'
import './Navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'

import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../Logo/Logo';


const Navbar = () => {


    return (

        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <Logo />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link navbar__links active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__links" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar__links" to="/customize">Customize</Link>
                        </li>
                        <div className="navbar__icons">
                            <li className='nav-item'>
                                <button type="button" className="btn position-relative">
                                    <Link to='/login'><AccountCircleIcon className='icons' /></Link>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button type="button" className="btn position-relative">
                                    <Link to='/cart'><ShoppingCartIcon className='icons' /></Link>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                    </span>
                                </button>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>


        // <header className='header'>
        //     <Logo />
        //     <nav className="navbar__contents">
        //         <ul>
        //             <li>
        //                 <h2 className='navbar__links'><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link></h2>
        //             </li>
        //             <li>
        //                 <h2 className='navbar__links'><Link to='/product' style={{ textDecoration: 'none', color: 'black' }}>Product</Link></h2>
        //             </li>
        //             <li>
        //                 <h2 className='navbar__links' ><Link to='/customize' style={{ textDecoration: 'none', color: 'black' }}>Customize</Link></h2>
        //             </li>
        //         </ul>
        //         <ul className='navbar__icons'>
        //             <li>
        //                 <button type="button" className="btn position-relative">
        //                     <Link to='/login'><AccountCircleIcon className='icons' /></Link>
        //                 </button>
        //             </li>
        //             <li>
        //                 <button type="button" className="btn position-relative">
        //                     <Link to='/cart'><ShoppingCartIcon className='icons' /></Link>
        //                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        //                         0
        //                     </span>
        //                 </button>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>
    )
}

export default Navbar
