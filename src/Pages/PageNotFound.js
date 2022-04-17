import React from 'react';
import error from '../assets/images/error.png'

const PageNotFound = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="h-100"> <img className="img-fluid" src={error} alt="" /></div>
        </div>
    </div>
  );
};

export default PageNotFound;