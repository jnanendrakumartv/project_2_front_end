import React,{Component} from 'react';
import jk11 from '../images/jk11.png'
import { Link } from 'react-router-dom';
import browserHistory from "../Utils/browserHistory"
import  '../App.css';


class Navbar extends Component{
      handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
      }
      handleSubmit1=(e)=> {
        browserHistory.push("/");
      }  

    render() {
    return (
      
    <nav id="element" className="navbar navbar-expand-lg navbar-light bg-dark">
     <a className="navbar-brand ml-0" href="#">
      <img className="image" src={jk11} alt="jk11" onClick={this.handleSubmit1} /> <p  className="institutename"><b>JK INSTITUTE </b></p> 
     </a>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span>
        <i className="fas fa-bars" style={{ color: '#f7faff' }} />
      </span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent" >
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <Link className="nav-link text-white  ml-3"  to="/about" >
           <b>About Us</b> &nbsp;
            <i className="fas fa-home" />
            <span className="sr-only">(current)</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white ml-3"
            to="/achievement"
          >
          <p className="over"><b> Achievement</b></p> 
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white  ml-3"
            to="/gallary"
          >
           <p className="over"><b> Photo Gallary </b></p> 
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white  ml-3"
            to="/training"
          >
          <p className="over"><b> Placement & Training </b></p> 
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white ml-3"
            to="/contacts"
          >
           <p className="over"><b> Contact Us </b></p> 
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white  ml-3"
            to="/contacts"
          >
           <p className="over"><b> Result</b></p>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white ml-3"
            to="/result"
          >

  <p className="over"><b> Facilities </b></p>
          </Link>
        </li>
      </ul>
      <form className="form-inline my-1 my-lg-0">
        <input
          className="form-control mr-sm-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-primary  my-1 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </nav>

);
}
}
export default Navbar;