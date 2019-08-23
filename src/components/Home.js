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
import aqu from '../images/aqu.png'
import cat from '../images/cat.png'
import hun from '../images/hun.png'
import gadre from '../images/gadre.png'
import intel from '../images/intel.png'
import it from '../images/it.png'
import mph from '../images/mph.png'
import rsn from '../images/rsn.png'
import sagoni from '../images/sagoni.png'
import sky from '../images/sky.png'
import sprink from '../images/sprink.png'
import tech from '../images/tech.png'
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
                <div className="imageslider">
                    <div className="row">
                    <div className="col-xs-12 col-sm12 col-md-12 col-lg-12">
                     <table width="100%" border="0/" cellpadding="0">
                            <tbody>
                            <tr>
                            <td><p id="color"><b>Companies Associated</b></p>
                            <marquee >
                            <table eidth="100%" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                            <tr>
                            <td class="companyscroll">
                            <img src={aqu} width="165" height="117" alt="aqu" />
                            <img src={cat} width="165" height="117" alt="cat" />
                            <img src={hun} width="165" height="117" alt="hun" />
                            <img src={gadre} width="165" height="117" alt="gadre" />
                            <img src={intel} width="165" height="117" alt="intel" />
                            <img src={it} width="165" height="117" alt="it" />
                            <img src={mph} width="165" height="117" alt="mph" />
                            <img src={rsn} width="165" height="117" alt="rsn" />
                            <img src={sagoni} width="165" height="117" alt="sagoni" />
                            <img src={sky} width="165" height="117" alt="sky" />
                            <img src={sprink} width="165" height="117" alt="sprink" />
                            <img src={tech} width="165" height="117" alt="tech" />
                            </td>
                            </tr>
                            </tbody>
                            </table>
                            </marquee>
                            </td>
                            </tr>
                            </tbody>
                            </table>
                    </div>
                    </div>

                </div>
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
