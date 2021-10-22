import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Reviews from './components/Reviews';
import Payments from './components/Payments';
import Footer from './components/Footer';
import Menus from './components/Menus';



function App() {
  return (
    <div className="App">
      
      <Router>

        <Navbar/>
    
        

        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/Menus" component={Menus}></Route>
          <Route path="/Reviews" component={Reviews}></Route>
        </Switch>
      </Router>


      <Footer/>
    </div>
  );
}

export default App;
