import { ForkLeft } from '@mui/icons-material'
import React from 'react'

import Navbar from '../Navbar/Navbar'
import Tshirt from '../Three/Tshirt'

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className='row'>
                    <div className="col-md-4">
                        <h3>This is the home page.</h3>
                    </div>
                </div>
            </div>

            {/* <h1>This is the home page!!</h1>
            <br />
            <div style={{
                height: '300px',
                width: '25%',
                position: 'relative',
                left: '200px',
                top: '50px'

            }}>
                <Tshirt />
            </div> */}
        </>
    )
}

export default Home;
