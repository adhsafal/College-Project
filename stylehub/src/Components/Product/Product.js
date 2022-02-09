import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Tshirt from '../Three/Tshirt'
import Hoodie from '../Three/Hoodie'
import Tshirt2 from '../Three/Tshirt2'

const Product = () => {
    return (
        <>
            <Navbar />

            <div className="carousel">
                <a href=""></a>
            </div>


            {/* <div className="wrapper">
                <div className="container">
                    <div className="row g-1">
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="text-center" style={{ height: '15em' }}>
                                    <Hoodie />
                                </div>
                                <div className="product-details">
                                    <span className="font-weight-bold d-block">$ 7.00</span>
                                    <span>Hoodie</span>
                                    <div className="buttons d-flex flex-row">
                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </div>
                                        <button className="btn btn-success cart-button btn-block">
                                            <span className="dot">1</span>Add to cart
                                        </button>
                                    </div>
                                    <div className="weight"> <small>Buy 3 piece Get 1 piece free!!</small> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="text-center" style={{ height: '15em' }}>
                                    <Tshirt />
                                </div>
                                <div className="product-details">
                                    <span className="font-weight-bold d-block">$ 7.00</span>
                                    <span>T-Shirt</span>
                                    <div className="buttons d-flex flex-row">
                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i></div>
                                        <button className="btn btn-success cart-button btn-block">
                                            <span className="dot">1</span>Add to cart
                                        </button>
                                    </div>
                                    <div className="weight"> <small>Buy 3 piece Get 1 piece free!!</small> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="text-center" style={{ height: '15em' }}>
                                    <Tshirt />
                                </div>
                                <div className="product-details">
                                    <span className="font-weight-bold d-block">$ 7.00</span>
                                    <span>T-Shirt</span>
                                    <div className="buttons d-flex flex-row">
                                        <div className="cart">
                                            <i className="fa fa-shopping-cart"></i></div>
                                        <button className="btn btn-success cart-button btn-block">
                                            <span className="dot">1</span>Add to cart
                                        </button>
                                    </div>
                                    <div className="weight"> <small>Buy 3 piece Get 1 piece free!!</small> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-3">
                                <div className="text-center" style={{ height: '15em' }}>
                                    <Tshirt />
                                </div>
                                <div className="product-details">
                                    <span className="font-weight-bold d-block">$ 7.00</span>
                                    <span>T-Shirt</span>
                                    <div className="buttons d-flex flex-row">
                                        <div className="cart"><i className="fa fa-shopping-cart"></i></div>
                                        <button className="btn btn-success cart-button btn-block">
                                            <span className="dot">1</span>Add to cart
                                        </button>
                                    </div>
                                    <div className="weight"> <small>Buy 3 piece Get 1 piece free!!</small> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Product
