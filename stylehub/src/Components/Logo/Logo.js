import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img src="logo.png"
                    alt="logo"
                    style={{
                        height: "17vh",
                    }}
                />
            </Link>
        </div>
    )
}

export default Logo
