import React, { Component } from "react";
// import firebase from "firebase";

// pages 
import Landing from './pages/landing/landing';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Order from './pages/order/order';
import Shop from './pages/shop/shop';


// components 
import Loading from './components/loading/loading';


// setup firebase configuration later
// const firebaseConfig = {
//     apiKey: "undefined",
//     authDomain: "undefined",
//     databaseURL: "undefined",
//     projectId: "undefined",
//     storageBucket: "",
//     messagingSenderId: "undefined",
//     appId: "undefined"
// };
// firebase.initializeApp(firebaseConfig);

class PageContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: "Landing"
        }
    };

    handlePageChange = page => {
        this.setState({ page: "Landing" });
    };

    landingPage = e => {
        this.setState({
            page: "Landing"
        });
    };

    homePage = e => {
        this.setState({
            page: "Home"
        });
    };

    portolioPage = e => {
        this.setState({
            page: "Portfolio"
        });
    };

    orderPage = e => {
        this.setState({
            page: "Order"
        });
    };

    shopPage = e => {
        this.setState({
            page: "Shop"
        });
    };

    // Function to actually change the page
    renderPage = () => {
        if (this.state.page === "Home") {
            return (
                <Home />
            );
        } else if (this.state.page === "Portfolio") {
            return (
                <Portfolio />
            );
        } else if (this.state.page === "Order") {
            return (
                <Order />
            );
        } else if (this.state.page === "Shop") {
            return (
                <Shop />
            );
        } else {
            return (
                <Landing />
            );
        }
    };

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        );
    }
}

export default PageContainer;