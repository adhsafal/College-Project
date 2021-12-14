import React from 'react'
import Navbar from '../Navbar/Navbar'
import Tshirt2 from '../Three/Tshirt2'

const Customize = () => {
    return (
        <div>
            <Navbar />
            <h1>This is the customization page!!</h1>
            <br />
            <div style={{
                height: '300px',
                width: '25%',
                position: 'relative',
                left: '200px',
                top: '50px',

            }}>
                <Tshirt2 />
            </div>
        </div>
    )
}

export default Customize
