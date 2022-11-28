import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Weather App <i className="fa fa-cloud"></i>
                </Link>
                <button className="navbar-toggler d-lg-none" type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <i className="fa fa-home"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/weather" className="nav-link">Weather <i className="fa fa-cloud"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header