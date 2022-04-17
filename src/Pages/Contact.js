import React from 'react';
import contact from '../assets/images/booking1.png'

const Contact = () => {
  return (
    <div className="container  ">
      <div className="text-center py-5 text-primary fw-bold">
        <h2 className ="fw-bold">Contact with Us</h2>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-lg-7 col-md-6 col-sm-6">
          <img className ="img-fluid" src={contact} alt="" />
        </div>
        <div className="col-lg-5 col-md-6 col-sm-6">
        <form>
        <div className="form-group">
          <label className="fw-bolder text-info" htmlFor="exampleInputEmail1">Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Name" />
          <small id="emailHelp" className="form-text text-muted">please Enter Your Name.</small>
        </div>  <br />
        <div className="form-group">
          <label className="fw-bolder text-info" htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>  <br />
        <div className="form-group">
          <label className="fw-bolder text-info" htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div> <br />
        <div className="form-group form-check">
          <input className="fw-bolder text-info form-check-input" type="checkbox"  id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;