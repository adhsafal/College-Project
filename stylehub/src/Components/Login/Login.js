import React from 'react'
import './Login.css'

import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../Logo/Logo';

const Login = () => {
    return (
        <>
            <div className='login'>

                <div className="login__text">
                    <Logo />
                    <h1>Sign in to Our Website</h1><br />
                    <p style={{ fontSize: '1.1em', fontWeight: 'bolder' }}>If you don't have an account.<br />
                        You can {<Link to='/registration' className="underlineHover"
                            style={{
                                fontSize: '1.3em',
                                fontWeight: 'bolder',
                                color: '#26b7ff'
                            }}>
                            Register here !
                        </Link>}
                    </p>
                </div>
                <div class="wrapper fadeInDown">
                    <h1 style={{ marginTop: '2em' }}>Sign In</h1><br />
                    <div id="formContent">
                        <div className="fadeIn first">
                            <AccountCircleIcon style={{ fontSize: '3em' }} />
                        </div>

                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" required />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" style={{ marginTop: '3em' }} />
                        <div id="formFooter">
                            <a className="underlineHover" href="#" style={{ color: 'black', fontSize: '1.1em', fontWeight: 'bolder' }}>Forgot Password?</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
