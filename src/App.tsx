import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Reviews from './components/Reviews';
import Payments from './components/Payments';




function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>

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
