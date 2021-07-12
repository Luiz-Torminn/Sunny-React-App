import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Logo from "../Images/logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__logo">
        <Link to="home" spy={true} smooth={true}>
          <img
            className="footer__elements__color footer__hover"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>
      <div className="footer__navbar">
        <ul>
          <li className="footer__elements__color footer__hover">
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>

          <li className="footer__elements__color footer__hover">
            <Link to="testimonials" spy={true} smooth={true}>
              Service
            </Link>
          </li>

          <li className="footer__elements__color footer__hover">
            <Link to="" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <a
          href="#"
          target="_blank"
        >
          <FacebookIcon
            className="footer__elements__color footer__hover footer__icon__margin"
            fontSize="small"
          />
        </a>
        <a
          href="#"
          target="_blank"
        >
          <PinterestIcon
            className="footer__elements__color footer__hover footer__icon__margin"
            fontSize="small"
          />
        </a>
        <a
          href="#"
          target="_blank"
        >
          <TwitterIcon
            className="footer__elements__color footer__hover footer__icon__margin"
            fontSize="small"
          />
        </a>
        <a
          href="#"
          target="_blank"
        >
          <InstagramIcon
            className="footer__elements__color footer__hover"
            fontSize="small"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
