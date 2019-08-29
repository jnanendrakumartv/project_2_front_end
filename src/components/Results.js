import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import  '../App.css';



class Results extends Component {
    render() {
      return (
          <div className="body">
              <div className="header">
                 <Navbar/>
              </div>
              
              <div>
<h2></h2>

              </div>

              <div className="footer">
                <Footer/>
              </div>
          </div>
      )}
}
export default Results;