import { ForkLeft } from '@mui/icons-material'
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Tshirt from '../Three/Tshirt'
import Hoodie from '../Three/Hoodie'
import Tshirt2 from '../Three/Tshirt2'



const Home = () => {

    return (
        <div>
            <section id="intro">
                <div id="nav">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src="images/logo-removebg.png" alt="StyleHub Logo" height="100px" /></a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarText"
                                aria-controls="navbarText"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#footer"
                                        >Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#products">Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Customize</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="row intro-details">
                    <div className="col-lg-6 col-md-6">
                        <h1 className='style'>STYLE <span style={{ fontSize: "6rem" }}> <br />HUB</span></h1>
                        <hr />
                        <p>Design and create your own T-shirts, hoodies and many more with exciting color options.</p>
                        <button className="btn btn-lg btn-outline-primary"><Link className="nav-link navbar__links" to="/customize">Start Designing</Link></button>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src="images/boy-image-bg.png" alt="Image of a boy" className="img-boy" />
                    </div>
                </div>
            </section>


            {/* <!-- Features Section  --> */}

            <section id="features">
                <div className="div">
                    <div className="row">
                        <div className="feature-box col-lg-4">
                            <i className="icon fas fa-check-circle fa-4x"></i>
                            <h3 className="feature-title">Easy to use.</h3>
                            <p>So easy to use, even a child could do it.</p>
                        </div>

                        <div className="feature-box col-lg-4">
                            <i className="icon fas fa-bullseye fa-4x"></i>
                            <h3 className="feature-title">Maximum Features</h3>
                            <p>We have a lot of products, with exciting features.</p>
                        </div>

                        <div className="feature-box col-lg-4">
                            <i className="icon fas fa-heart fa-4x"></i>
                            <h3 className="feature-title">Guaranteed to work.</h3>
                            <p>Find your appropriate design or your money back.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Products Section  --> */}
            <section id="products">
                <div className="product">
                    <h2>LIST OF PRODUCTS</h2>
                    <hr />
                    <p>Select a product from our pool of hundreds of products.</p>
                </div>

                <div className="row products-list">
                    <div className="col-lg-4 col-md-6">
                        <Link to='/customize'>
                            <div className="card">
                                <img className="card-img-top" src="images/half-sleeve-tshirt.png" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Half-sleeve T-Shirts</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link to='/customizeTwo'>
                            <div className="card">
                                <img className="card-img-top" src="images/full-sleeve-tshirt.png" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Full-sleeve T-Shirts</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <Link to='/customizeThree'>
                            <div className="card">
                                <img className="card-img-top" src="images/hoodie.png" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Hoodie</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>


            {/* <!-- Testimonials --> */}

            <section id="testimonials">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active div">
                            <h2 className="testimonial-text">
                                I no longer have to worry about getting my own customized t-shirts. Stylehub is one great platform.
                            </h2>
                            <img className="testimonial-image" src="images/sushan.jpg" alt="sushan-profile" />
                            <em>Sushan, Bhaktapur</em>
                        </div>
                        <div className="carousel-item div">
                            <h2 className="testimonial-text">
                                I no longer have to worry about getting my own customized t-shirts. Stylehub is one great platform.
                            </h2>
                            <img className="testimonial-image" src="images/safal.jpg" alt="safal-profile" />
                            <em>Safal, Kathmandu</em>
                        </div>
                        <div className="carousel-item div">
                            <h2 className="testimonial-text">
                                I no longer have to worry about getting my own customized t-shirts. Stylehub is one great platform.
                            </h2>
                            <img className="testimonial-image" src="images/aayam.jpg" alt="aayam-profile" />
                            <em>Aayam, Lalitpur</em>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>


            {/* <!-- Contact section  --> */}
            <section id="contact">
                <div className="row">
                    <div className="col-lg-4 col-md-4 contact-text">
                        <i className="icon fa fa-address-card fa-3x" aria-hidden="true"></i>
                        <h2>Address</h2>
                        <p>52 SS Tole, Thimi Marg, <br />
                            Kathmandu, Nepal.</p>
                    </div>
                    <div className="col-lg-4 col-md-4 contact-text">
                        <i className="icon fas fa-phone fa-3x"></i>
                        <h2>Phone</h2>
                        <p>
                            Phone: (+977) 9843123456 <br />
                            Fax: +02 05 001 114
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 contact-text">
                        <i className="far fa-envelope fa-3x icon"></i>
                        <h2>Email</h2>
                        <p>
                            support@stylehub.com <br />
                            Twitter: @stylehub
                        </p>
                    </div>
                </div>
            </section>

            <hr />

            {/* <!-- Footer --> */}

            <footer id="footer" className="white-section">
                <div className="div">
                    <i className="social-icon fab fa-twitter"></i>
                    <i className="social-icon fab fa-facebook-f"></i>
                    <i className="social-icon fab fa-instagram"></i>
                    <i className="social-icon far fa-envelope"></i>
                    <p>© Copyright StyleHub</p>
                </div>
            </footer>

        </div>
    )
}

export default Home;
