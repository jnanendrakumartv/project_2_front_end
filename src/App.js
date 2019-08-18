import React from 'react';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/" component={Navbar}></Route>  
        </Switch>
      </Router>
    </div>
  );
  }
export default App;
