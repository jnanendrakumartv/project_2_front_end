import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class About extends Component {
    render() {
      return (
          <div className="body">
              <div className="header">
                 <Navbar/>
              </div>


              <div className="footer">
                <Footer/>
              </div> 
          </div>
      )}
}
export default About;