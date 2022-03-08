import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Customize.css'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ButtonToggle from '@mui/material/ToggleButton'
import TextField from '@mui/material/TextField';

import Hoodie from '../Three/Hoodie'
import Tshirt2 from '../Three/Tshirt2'
import Tshirt from '../Three/Tshirt'
import Login from '../Login/Login';



const Customize = (props) => {


    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const [text, setText] = useState("Add to Cart");

    const cartText = () => {
        setText("Added to cart")
    }

    const types = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

    const [active, setActive] = useState(types[0]);

    return (
        <>
            <Navbar />
            <br />
            <section className='container' >
                <div className="d-flex row " >
                    <div className="sections__left col-md-3"  >
                        <h4 style={{ fontWeight: 'bold' }}>
                            Customize it Yourself
                        </h4>
                        <h1 style={{ fontWeight: 'bold' }}>
                            T-Shirt
                        </h1>
                        <p style={{ fontWeight: 'bold' }}>Please select the appropriate size and color you want in your T-shirt</p>

                    </div>
                    <div className="sections__middle col-md-6" >
                        <div className="customize__product" style={{
                            height: '100%',
                            width: '100%',
                        }}>
                            <Tshirt />
                        </div>
                    </div>
                    <div className="sections__right col-md-3" >
                        <div className="customize__sizes " >
                            <h3 style={{ fontWeight: 'bold' }}>Size</h3>
                            <ButtonGroup variant="text" aria-label="text button group" onClick={() => setActive()}>
                                {types.map(type => (
                                    <ButtonToggle
                                        key={type}
                                        active={active === type}
                                        onClick={() => setActive(type)}
                                    >
                                        {type}
                                    </ButtonToggle>
                                ))}
                            </ButtonGroup>
                        </div>

                        <div className="customize__quantity">
                            <h3 style={{ fontWeight: 'bold' }}>Quantity</h3>

                            <div className="sizeButton">
                                <ButtonGroup variant="text" aria-label="text button group">
                                    <Button onClick={decreaseQuantity} style={{ fontWeight: 'bold', color: 'black' }}>-</Button>
                                    <Button onClick={increaseQuantity} style={{ fontWeight: 'bold', color: 'black' }}>+</Button>
                                </ButtonGroup>
                                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{quantity}</p>
                            </div>
                            <button className='btn btn-outline-primary addButton' onClick={cartText} style={{ fontWeight: 'bold', color: 'black' }}> {text} </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Customize
