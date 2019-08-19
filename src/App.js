import React from 'react';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/" component={Home}></Route> 
           <Route exact path="/contacts" component={Contacts}></Route> 
           <Route exact path="/about" component={About}></Route> 
           <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
  }
export default App;
