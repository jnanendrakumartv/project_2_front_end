import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import santhosh from '../images/santhosh.jpg';
import ganguly from '../images/ganguly.jpg';
import dharshan from '../images/dharshan.jpg'
import maria from '../images/maria.jpg';
import anna from '../images/anna.jpg';
import punith from '../images/punith.jpg';
import katrina from '../images/katrina.jpg';
import hrithik from '../images/hrithik.jpg';
import  '../App.css';
import { Card, CardImg, CardText, CardBody,CardTitle,Button } from 'reactstrap';



class About extends Component {
    render() {
      return (
          <div className="body">
              <div className="row">
              <Navbar/>
      </div>
       <div className="row">
             <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="center"> 
              <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                 <Card className='img_crd'>
                    <CardImg top width="100%" height='150px' src={santhosh} alt="santhosh" />
                    <CardBody className="cardbody">
                    <CardTitle className='card_ttl' >Santhosh Hegde</CardTitle>
                    <CardText className='designation'><b>President</b> </CardText>
                    </CardBody>
                  </Card>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Card className="img_crd">
                <CardImg top width="100%" height='150px' src={ganguly} alt="ganguly" />
                  <CardBody className="cardbody">
                  <CardTitle className='card_ttl' >Souvarav Ganmguly</CardTitle>
                  <CardText className='designation'><b>Vice-President</b> </CardText>
                  </CardBody>                 
                </Card>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Card className="img_crd">
                  <CardImg top width="100%" height='150px' src={dharshan} alt="dharshan" />
                    <CardBody className="cardbody">
                    <CardTitle className='card_ttl' >Dharshan Puttannaiah</CardTitle>
                    <CardText className='designation'><b>Chairman</b> </CardText>
                    </CardBody>                 
                  </Card>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                  <Card className="img_crd">
                      <CardImg top width="100%" height='150px' src={maria} alt="maria" />
                        <CardBody className="cardbody">
                        <CardTitle className='card_ttl' >Maria Sharapova</CardTitle>
                        <CardText className='designation'><b>Director</b> </CardText>
                        </CardBody>                 
                     </Card>
              </div>
              </div>
              <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                 <Card className='img_crd'>
                    <CardImg top width="100%" height='150px' src={hrithik} alt="hrithik" />
                    <CardBody className="cardbody">
                    <CardTitle className='card_ttl' >Hrithik Roshan</CardTitle>
                    <CardText className='designation'><b>Member</b> </CardText>
                    </CardBody>
                  </Card>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                 <Card className='img_crd'>
                    <CardImg top width="100%" height='150px' src={katrina} alt="katrina" />
                    <CardBody className="cardbody">
                    <CardTitle className='card_ttl' >Katrina kaif</CardTitle>
                    <CardText className='designation'><b>Member</b> </CardText>
                    </CardBody>
                  </Card>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                 <Card className='img_crd'>
                    <CardImg top width="100%" height='150px' src={punith} alt="punith" />
                    <CardBody className="cardbody">
                    <CardTitle className='card_ttl' >Punith Rajkumar</CardTitle>
                    <CardText className='designation'><b>Member</b> </CardText>
                    </CardBody>
                  </Card>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                 <Card className='img_crd'>
                    <CardImg top width="100%" height='150px' src={anna} alt="anna" />
                    <CardBody className="cardbody">
                    <CardTitle className='card_ttl' > Anna Ivanovich</CardTitle>
                    <CardText className='designation'><b>Member</b> </CardText>
                    </CardBody>
                  </Card>
              </div>              
              </div>
          </div>
          </div>
              <div id="element1" className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <p > Sri K.S Puttannaiah, fondly called as KSP, 
                            former minister of education and well known as "Raitha Nayaka" founded 
                            and registered J.K Institution currently known as JK Institute(R) in 1958.<br/>
                            1)JK College of Science, Arts & Commerce Pandavapura	<br/> 
                            2)JK Law College,Pandavapura<br/> 
                            3)JK College of Education, Pandavapura<br/> 
                            4)JK Evening College, Pandavapura<br/> 
                            5)JK PU College, Pandavapura	 <br/> 
                            6)JK High School, Pandavapura<br/> 
                            7)JK Post Graduate Center for Education and Research [M.Ed], Pandavapura	 <br/>  
                            8)JK Krishik Sarvodaya Foundation JK Competitive Exam Training Center, Pandavapura</p> 
                </div>
          </div>      
              <div className="footer">
                <Footer/>
              </div> 
          </div>
      )}
}
export default About;