
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavbarComponent from "./components/Navbar";

const App = () => {
  return(
    <div className="App">
      <NavbarComponent/>
      <Header />
      <Outlet />
      <Footer />
      </div>
  )
}

export default App;
