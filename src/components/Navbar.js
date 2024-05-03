
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavbarComponent = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Farm to table food, craft cocktails, beer and wine</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" hidden data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className="dropdown-menu" hidden>
                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                </ul>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
        </nav>
        );
        };

export default NavbarComponent;
