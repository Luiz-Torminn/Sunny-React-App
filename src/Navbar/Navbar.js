import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Logo from "../Images/logo.svg";
import { Link } from "react-scroll";

const navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#">
          <img className="navbar__logo__image" src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar__navigation">
        <ul>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            <li className="navbar__items">About</li>
          </Link>

          <Link to="testimonials" spy={true} smooth={true}>
            <li className="navbar__items">Service</li>
          </Link>

          <Link to="projects" spy={true} smooth={true}>
            <li className="navbar__items">Projects</li>
          </Link>

          <Link to="contact" spy={true} smooth={true}>
            <li className="navbar__contact">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="navbar__toggle">
        <DrawerToggleButton click={props.drawerHandler} />
      </div>
    </nav>
  );
};

export default navbar;
