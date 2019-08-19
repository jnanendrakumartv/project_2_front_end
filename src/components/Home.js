import React,{Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import jk from '../images/jk.jpg'
import jj from '../images/jj.jpg'
import a from '../images/a.jpg'
import b from '../images/b.jpg'
import c from '../images/c.JPG'
import d from '../images/d.jpg'
import e from '../images/e.jpg'
import f from '../images/f.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Marquee from 'react-upward-marquee';
import { Carousel } from 'react-responsive-carousel';
import  '../App.css';



class Home extends Component{
    render() {
    return (
        <div className="body">
            <div className="header">
          <Navbar/>
            </div>

            <div className="middle">
                <div className="row">
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <Carousel autoPlay>
                        <div>
                        <img src={jk} />
                        </div>
                        <div>
                        <img src={jj} />
                        </div>
                        <div>
                        <img src={a} />
                        </div>
                        <div>
                        <img src={b} />
                        </div>
                        <div>
                        <img src={c} />
                        </div>
                        <div>
                        <img src={d} />
                        </div>
                        <div>
                        <img src={e} />
                        </div>
                        <div>
                        <img src={f} />
                        </div>
               </Carousel>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"> 
                    <div  id="textmarquee" class="microsoft container">
                         <p class="marquee">Windows 8 and Windows RT are focused on your life—your friends and family,
                          your apps, and your stuff. With new things like the you can spend less time searching and more time doing.</p><br/>
                          <p class="marquee">Windows 8 and Windows RT are focused on your life—your friends and family,
                          your apps, and your stuff. With new things like the you can spend less time searching and more time doing.</p><br/>
                          <p class="marquee">Windows 8 and Windows RT are focused on your life—your friends and family,
                          your apps, and your stuff. With new things like the you can spend less time searching and more time doing.</p><br/>
                          <p class="marquee">Learning at PESCE Mandya was essentially building a part of my future life. The focus was on learning and
                               the ambience simple but dignified and respectful. The culture was so open and meaningful, that we had 
                               people practically all over India, studying with us. That by itself was learning, beyond engineering.
                                I still visit and relive those days whenever I get a chance to do so.</p>
                    </div>
                    </div> 
                </div>
            </div>         


<div className="footer">
<Footer/>
</div> 
    </div>
    )};
    }
   export default Home;
