import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// css and bootstrap
import "./landing.css";
import Button from "react-bootstrap/Button";

// components
import Loading from "../../components/loading/loading";

// pages
import Home from "../../pages/home/home";
import Portfolio from "../../pages/portfolio/portfolio";
import Order from "../../pages/order/order";
import Shop from "../../pages/shop/shop";

class LandingPage extends React.Component {
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
        {!this.state.done ? (
          <Loading />) : (
            <div>
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
          )}
      </div>
    );
  }
}

export default LandingPage;