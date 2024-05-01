import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link to="/" className="text-white text-decoration-none">
            <h6>Home</h6>
          </Link>
            <h6><span class="wixui-rich-text__text"> © 2024 by Winfields, Buffalo, NY&nbsp; All Rights Reserved</span></h6>
          <div>
            <a
              href="https://github.com/jeffmcd21"
              className="text-white text-decoration-none"
            >
              <i className="fa-brands fa-github"></i> |{' '}
              <i className="fa-solid fa-biohazard fa-fade"></i>
            </a>
            
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
