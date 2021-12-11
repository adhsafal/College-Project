import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className="navbar__wrapper">
                    <div className="navbar__content">
                        <Link to='/' style={{ padding: "10%", fontWeight: 'bold', textDecoration: 'none' }}>Home</Link>
                        <Link to='/customize' style={{ padding: "10%", fontWeight: "bold", textDecoration: 'none' }}>Customize</Link>
                        <Link to='/product' style={{ padding: "10%", fontWeight: "bold", textDecoration: 'none' }}>Product</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
