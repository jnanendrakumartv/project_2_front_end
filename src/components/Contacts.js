import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import  '../App.css';

class Contacts extends Component {
  render() {
    return (
      <div className="body">
      <div className="row">
              <Navbar/>
      </div>
      <div className="middle">
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31161.82564441082!2d76.6515521672303!3d12.501027682929644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf9d116aff355d%3A0x1970efd351e40b93!2sPandavapura%2C+Karnataka!5e0!3m2!1sen!2sin!4v1566179940399!5m2!1sen!2sin"
                style={{
                  border: '0',
                  width: '100%',
                  height: '315px',
                  frameborder: '0'
                }}
                allowFullscreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className="row">
<div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12"><Footer/></div>
</div> 
      </div>
    );
  }
}
export default Contacts;
