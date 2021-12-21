import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Tshirt from '../Three/Tshirt'

const Product = () => {
    return (
        <>
            <Navbar />
            <div class="container">
                <h3 class="text-center">ALL PRODUCTS</h3>
                <div class="row">
                    {/* <!-- Product  --> */}
                    <div class="col-md-4 product-grid">
                        <div class="image">
                            <a href="#">
                                <img src="images/apple-watch.jpg" class="w-100" />
                                <div class="overlay">
                                    <div class="detail">View Details</div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">Apple Watch Series 3 Aluminium</h5>
                        <h5 class="text-center">Price: $550.00</h5>
                        <a href="#" class="btn buy">Add to Cart</a>
                    </div>
                    {/* <!-- ./Product --> */}

                    {/* <!-- Product  --> */}
                    <div class="col-md-4 product-grid">
                        <div class="image">
                            <a href="#">
                                <img src="images/beat.jpg" class="w-100" />
                                <div class="overlay">
                                    <div class="detail">View Details</div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">Beats Solo 3 Wireless</h5>
                        <h5 class="text-center">Price: $159.00</h5>
                        <a href="#" class="btn buy">BUY</a>
                    </div>
                    {/* <!-- ./Product --> */}

                    {/* <!-- Product  --> */}
                    <div class="col-md-4 product-grid">
                        <div class="image">
                            <a href="#">
                                <img src="images/imac.jpg" class="w-100" />
                                <div class="overlay">
                                    <div class="detail">View Details</div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">Apple iMac</h5>
                        <h5 class="text-center">Price: $1,699.00</h5>
                        <a href="#" class="btn buy">BUY</a>
                    </div>
                    {/* <!-- ./Product --> */}

                    {/* <!-- Product  --> */}
                    <div class="col-md-4 product-grid">
                        <div class="image">
                            <a href="#">
                                <img src="images/ipad.jpg" class="w-100" />
                                <div class="overlay">
                                    <div class="detail">View Details</div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">Apple iPad</h5>
                        <h5 class="text-center">Price: $415.99</h5>
                        <a href="#" class="btn buy">BUY</a>
                    </div>
                    {/* <!-- ./Product --> */}

                    {/* <!-- Product  --> */}
                    <div class="col-md-4 product-grid">
                        <div class="image">
                            <a href="#">
                                <img src="images/iphone.jpg" class="w-100" />
                                <div class="overlay">
                                    <div class="detail">View Details</div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">Apple iPhone X</h5>
                        <h5 class="text-center">Price: $1,342.00</h5>
                        <a href="#" class="btn buy">BUY</a>
                    </div>
                    {/* <!-- ./Product --> */}

                    {/* <!-- Product  --> */}
                    <div class="col-md-4 product-grid">
                        <div class="image">
                            <a href="#">
                                <img src="images/macbook.jpg" class="w-100" />
                                <div class="overlay">
                                    <div class="detail">View Details</div>
                                </div>
                            </a>
                        </div>
                        <h5 class="text-center">Apple MacBook</h5>
                        <h5 class="text-center">Price: $2,699.00</h5>
                        <a href="#" class="btn buy">BUY</a>
                    </div>
                    {/* <!-- ./Product --> */}

                </div>

            </div>

        </>
    )
}

export default Product
