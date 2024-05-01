
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-details">
    <Link to="/">
        <div>Home</div>
    </Link>
            <h5>
                <a href="https://github.com/jeffmcd21"><i class="fa-brands fa-github"></i> |
                    <i class="fa-solid fa-biohazard fa-fade"></i></a>
            </h5>
        </div>
    </div>
  )
}

export default Footer