import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//css and bootstrap
import './landing.css';
import Button from 'react-bootstrap/Button';

// pages 
import Home from '../home/home';
import Portfolio from '../portfolio/portfolio';
import Order from '../order/order';
import Shop from '../shop/shop';

// components 
import Loading from '../../components/loading/loading';

class Landing extends Component {
    render() {
        return (
            <div>
                <Loading />
                <h1>landing</h1>
                <Link to="/home">
                    <Button variant="dark">Home</Button>
                </Link>
                <Link to="/portfolio">
                    <Button variant="dark">Portfolio</Button>
                </Link>
                <Link to="/order">
                    <Button variant="dark">Order</Button>
                </Link>
                <Link to="/shop">
                    <Button variant="dark">Shop</Button>
                </Link>
            </div>
        )
    }
};

export default Landing;