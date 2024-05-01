import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Link to='/'>
        <div className="header-container">Home</div>
        {/* <img src="https://houseofnasheats.com/wp-content/uploads/2023/07/How-to-Make-Homemade-Pasta-Square-2.jpg" width="100%" height="200px"></img> */}
    </Link>

  )
}

export default Header