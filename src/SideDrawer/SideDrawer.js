import "./SideDrawer.css";
import { Link } from "react-scroll";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="drawer__navigation">
        <ul>
          <Link
            className="drawer__items"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            onClick={props.active}
          >
            <li>About</li>
          </Link>

          <Link
            className="drawer__items"
            to="testimonials"
            spy={true}
            smooth={true}
            onClick={props.active}
          >
            <li>Service</li>
          </Link>

          <Link
            className="drawer__items"
            to="projects"
            spy={true}
            smooth={true}
            onClick={props.active}
          >
            <li>Projects</li>
          </Link>

          <Link
            className="drawer__contact drawer__items"
            to="contact"
            spy={true}
            smooth={true}
            onClick={props.active}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default sideDrawer;
