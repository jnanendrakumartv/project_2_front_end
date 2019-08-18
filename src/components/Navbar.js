import React,{Component} from 'react';
import jk11 from '../images/jk11.png'
import { Link } from 'react-router-dom';
import  '../App.css';


class Navbar extends Component{
    render() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand ml-0" href="#">
      <img className="image" src={jk11} alt="jk11" /><p  className="institutename">JK INSTITUTE</p>
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
        <i className="fas fa-bars" style={{ color: '#2d5696' }} />
      </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <Link className="nav-link text-white  ml-3" to="/">
            About Us&nbsp;
            <i className="fas fa-home" />
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white ml-3"
            to="/news"
          >
            Achievement
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white  ml-3"
            to="/news"
          >
            Photo Gallary
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white  ml-3"
            to="/news"
          >
            Placement & Training
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white ml-3"
            to="/news"
          >
            Contact Us
          </Link></li>
          <li className="nav-item">
          <Link
            className="nav-link text-white  ml-3"
            to="/news"
          >
            Result
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white ml-3"
            to="/contacts"
          >
            Facilities
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