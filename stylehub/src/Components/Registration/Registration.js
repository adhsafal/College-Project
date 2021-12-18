import { fontWeight } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'


const Registration = () => {
    return (
        <>
            <div className='login'>
                <div className="login__text">
                    <Logo />
                    <h1>Sign Up to Our Website</h1><br />
                    <p style={{ fontSize: '1.1em', fontWeight: 'bolder' }}>If you already have an account.<br />
                        You can {<Link to='/login' className="underlineHover"
                            style={{
                                fontSize: '1.3em',
                                fontWeight: 'bolder',
                                color: '#26b7ff'
                            }}>
                            Login here !
                        </Link>}
                    </p>
                </div>
                <div class="wrapper fadeInDown">
                    <h1>Sign Up</h1><br />
                    <div id="formContent">
                        <input type="text" id="email" className="fadeIn second" name="email" placeholder="Enter Email" style={{ marginTop: '2em' }} />
                        <input type="text" id="uname" className="fadeIn second" name="uname" placeholder="Create User name" />
                        <input type="text" id="number" className="fadeIn second" name="number" placeholder="Phn. number" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="Confirm password" />
                        <input type="submit" className="fadeIn fourth" value="Register" style={{ marginTop: '3em', fontWeight: 'bolder' }} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration