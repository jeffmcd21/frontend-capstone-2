import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header bg-dark mb-3">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="text-white text-decoration-none fs-4">
          Winfields Scratch Kitchen
        </Link>
      </div>
    </header>
  )
}

export default Header
