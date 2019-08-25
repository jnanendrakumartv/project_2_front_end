import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card, CardText, CardBody} from 'reactstrap';
import achi1 from '../images/achi1.jpg'; import achi2 from '../images/achi2.jpeg'; import achi3 from '../images/achi3.jpg';
import achi4 from '../images/achi4.jpg'; import achi5 from '../images/achi5.png';import sprt from '../images/sprt.jpg';
import sprt1 from '../images/sprt1.jpg'; import sprt2 from '../images/sprt2.jpg'; import sprt3 from '../images/sprt3.jpg';
import sprt4 from '../images/sprt4.jpg'; import sprt7 from '../images/sprt7.jpg'; import sprt6 from '../images/sprt6.jpg';
import cul1 from '../images/cul1.jpg'; import cul2 from '../images/cul2.jpg'; import cul3 from '../images/cul3.jpg';
import cul4 from '../images/cul4.jpg'; import cul5 from '../images/cul5.jpg'; import cul6 from '../images/cul6.jpg';
import  '../App.css';



class Achievement extends Component {
    render() {
      return (
          <div className="body">
              <div className="header">
                 <Navbar/>
              </div>
              
              <div className="achivements">
                <div className="row">
                <div id="technical" className="col-xs-6 col-6g-6 col-6g-6 col-lg-6">
                <Card className="img_crd">
                  <table>  <marquee >
                  <tr>
                    <td class="companyscroll">
                    <img src={achi1}  alt="achi1" /> <img src={achi2}  alt="achi2" /> <img src={achi3}  alt="achi3" /> 
                     <img src={achi4}  alt="achi4" /> <img src={achi5}  alt="achi5" /> 
                    </td>
                  </tr> </marquee >
                  </table>
                        <CardBody className="cardbody">
                        <CardText className='designation'><b>VTU Toppers</b> </CardText>
                        </CardBody>                 
                 </Card>
                </div>
                <div id="sports" className="col-xs-6 col-6g-6 col-6g-6 col-lg-6">
                <Card className="img_crd">
                  <table>  <marquee >
                  <tr>
                    <td class="companyscroll">
                    <img src={sprt}  alt="sprt" /> <img src={sprt2}  alt="sprt2" /> <img src={sprt3}  alt="sprt3" /> 
                     <img src={sprt4}  alt="sprt4" /> <img src={sprt7}  alt="sprt7" /> 
                     <img src={sprt1}  alt="sprt1" /> <img src={sprt6}  alt="sprt6" /> 
                    </td>
                  </tr> </marquee >
                  </table>
                        <CardBody className="cardbody">
                        <CardText className='designation'><b>VTU Sports Champions</b> </CardText>
                        </CardBody>                 
                 </Card>
                </div>
                </div>
                <div className="row">
                <div id="cultural" className="col-xs-12 col-6g-12 col-6g-12 col-lg-12">
                <Card className="img_crd">
                  <table>  <marquee >
                  <tr>
                    <td class="companyscroll">
                     <img src={cul1}  alt="cul1" /> <img src={cul2}  alt="cul22" /> 
                     <img src={cul4}  alt="cul4" /> <img src={cul5}  alt="cul5" /> 
                     <img src={cul6}  alt="cul61" /> <img src={cul3}  alt="cul3" /> 
                    </td>
                  </tr> </marquee >
                  </table>
                        <CardBody className="cardbody">
                        <CardText className='designation'><b>VTU Cultural Programs vinners</b> </CardText>
                        </CardBody>                 
                 </Card>
                </div>
                </div>
              </div>

              <div className="footer">
                <Footer/>
              </div>
          </div>
      )}
}
export default Achievement;