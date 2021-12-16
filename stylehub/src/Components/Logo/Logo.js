import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img src="logo.png"
                    alt="logo"
                    style={{
                        position: "relative",
                        height: "15vh",
                        left: "15px"
                    }}
                />
            </Link>
        </div>
    )
}

export default Logo
