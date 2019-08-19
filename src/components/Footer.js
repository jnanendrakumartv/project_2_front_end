import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import  '../App.css';


class Footer extends Component{
    render() {
    return (
<div className="footer"><div className="element">
                <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>                    
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"><h6 className="h6"><b>© 2019 JK Institution, All Rights Reserved.</b></h6></div>                           
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="icon">  <SocialIcon className="twitter" url="https://twitter.com/" />
                    <SocialIcon className="facebook"  url="https://www.facebook.com/" />
                    <SocialIcon className="whatsapp"  url="https://www.whatsapp.com/" />
                    <SocialIcon className="skype" url="https://www.skype.com/" />
                    <SocialIcon className="email"  url="https://www.instagram.com/" />
                    <SocialIcon className="linkedin"  url="http://linkedin.com/" />
                     </div>                           
                </div>
            </div>
            </div>
            </div>
    )}
}
export default Footer;