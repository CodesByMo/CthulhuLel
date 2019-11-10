import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// components 
import Loading from './components/loading/loading';

// pages 
import Landing from './pages/landing/landing';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Order from './pages/order/order';
import Shop from './pages/shop/shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </Router>
    // ===this part is old code to possibly change back to later===
    // <div className="App">
    //   <header className="App-header">
    //     <Loading />
    //   </header>
    // </div>
  );
}

export default App;
