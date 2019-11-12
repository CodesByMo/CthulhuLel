import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// css and bootstrap
import Button from "react-bootstrap/Button";

// components
import Loading from "../../components/loading/loading";

// pages
import Home from "../../pages/home/home";
import Portfolio from "../../pages/portfolio/portfolio";
import Order from "../../pages/order/order";
import Shopify from "../shopifyIndex/index";
import { AppProvider } from "@shopify/polaris";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    this.setState({ loaded: true });
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 500);
                });
        }, 800);
    }

    render() {
        return (
            <div>
                <AppProvider>
                    {!this.state.done ? (
                        <Loading />) : (
                            <div>
                                <Link to="/">
                                    <Button variant="dark">Landing</Button>
                                </Link>
                                <Link to="/home">
                                    <Button variant="dark">Home</Button>
                                </Link>
                                <Link to="/portfolio">
                                    <Button variant="dark">Portfolio</Button>
                                </Link>
                                <Link to="/order">
                                    <Button variant="dark">Order</Button>
                                </Link>
                                <div>
                                    <Shopify />
                                </div>
                            </div>
                        )}
                </AppProvider>
            </div>
        );
    }
}

export default App;