import React from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Mode from '../Three/Mode';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>This is Home Page.</h1>
            <div className="home__model">
                <Mode />
            </div>
        </div>
    )
};

export default Home;
