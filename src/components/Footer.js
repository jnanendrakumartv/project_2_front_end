import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import  '../App.css';


class Footer extends Component{
    render() {
    return (
<div className="footer"><div className="element1">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                     <span id="text" >EXPLOR</span>
                    <Link  to="/about" ><p id="text">About Us</p></Link>
                    <Link  to="/achievement" ><p id="text"> Achievement</p></Link>
                    <Link  to="/gallary" ><p id="text"> PhotoGallary</p></Link>
                    <Link  to="/contacts" ><p id="text"> Conatct Us</p></Link>

                </div>                    
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="imp">
                    <span id="text" >Important Links</span>
                    <Link  ><p id="text">Anti Ragging Commitee</p></Link>
                    <Link   ><p id="text"> Women Sexual Harasment Committee</p></Link>
                    <Link  ><p id="text"> Anti caste Discrimination Commettee</p></Link>
                    <Link   ><p id="text">Grievance Redressal Committee</p></Link>
                    <h6 className="h6"><b>© 2019 JK Institution, All Rights Reserved.</b></h6></div>
                </div>                           
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="icon">  <SocialIcon className="twitter" url="https://twitter.com/" />
                    <SocialIcon className="facebook"  url="https://www.facebook.com/" />
                    <SocialIcon className="whatsapp"  url="https://www.whatsapp.com/" />
                    <SocialIcon className="skype" url="https://www.skype.com/" />
                    <SocialIcon className="email"  url="https://www.instagram.com/" />
                    <SocialIcon className="linkedin"  url="http://linkedin.com/" /><br/>
                      <div id="email"><p>Email : principal@jkinst.ac.in</p>
                         <p>Website : www.jkinst.ac.in</p></div>
                     </div>                           
                </div>
            </div>
            </div>
            </div>
    )}
}
export default Footer;