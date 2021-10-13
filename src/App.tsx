import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Reviews from './components/Reviews';
import Payments from './components/Payments';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Link to="/"><button>Home</button></Link>
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Reviews"><button>Reviews</button></Link>
        <Link to="/Payments"><button>Payment</button></Link>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Reviews" component={Reviews}></Route>
          <Route path="/Payments" component={Payments}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
