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



const Customize = () => {


    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
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
            <div className="customize__body">
                <div className="customize__text">
                    <p>Customize it Yourself</p>
                    <h1>T-Shirt</h1>
                    <p>Please select the appropriate size and color you want in your T-shirt</p>
                </div>
                <div className="customize__product" style={{
                    height: '300px',
                    width: '25%',
                    position: 'relative',
                    left: '200px',
                    top: '50px',

                }}>
                    <Hoodie />
                </div>
                <div className="customize__sizes">
                    <h3>Size</h3>
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
                    <h3>Quantity</h3>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={increaseQuantity}>+</Button>
                        <Button onClick={decreaseQuantity}>-</Button>
                    </ButtonGroup>
                    <p>{quantity}</p>
                </div>
                <Button onClick={cartText}> {text} </Button>
            </div>

        </>
    )
}

export default Customize
