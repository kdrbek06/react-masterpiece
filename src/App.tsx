import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Menus from './components/Menus';
import CookDetails from './components/CookDetails';



function App() {
  


  return (
    <div className="App">
      
      <Router>

        <Navbar/>
    
        

        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/menus" component={Menus}></Route>
          <Route path="/reviews" component={Reviews}></Route>
          <Route path="/cookdetails/:id" component={CookDetails}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>


      <Footer/>
    </div>
  );
}

export default App;
