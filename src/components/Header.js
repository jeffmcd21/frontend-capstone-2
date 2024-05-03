import { Link } from "react-router-dom"
import NavbarComponent from "./Navbar"
const Header = () => {
  return (
    <header className="header bg-dark mb-3">
      <div className="container">
        <div>
          <div className="col">
            <Link to="/" className="text-white text-decoration-none fs-4">
              Winfields Scratch Kitchen
            </Link>
          </div>
          <div className="col">
            <NavbarComponent />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
