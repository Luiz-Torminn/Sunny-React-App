import { Component } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "../src/SideDrawer/SideDrawer";
import Backdrop from "../src/Backdrop/Backdrop";
import Service from "../src/SunnyServices/SunnyServices";
import Arrow from "./Images/Icons/icon-arrow-down.svg";
import Testimonials from "./Testimonials/Testimonials";
import ImageDisplay from "./ImageDisplay/ImageDisplay";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prev) => {
      return { sideDrawerOpen: !prev.sideDrawerOpen };
    });
  };

  backgroundClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backgroundClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <header id="home" className="sunny-header">
          <div>
            <Navbar drawerHandler={this.drawerToggleClickHandler} />
            <SideDrawer
              active={this.backgroundClickHandler}
              show={this.state.sideDrawerOpen}
            />
            {backdrop}
          </div>
          <div className="main-header">
            <h1>WE ARE CREATIVE</h1>
            <img src={Arrow} alt="arrow" />
          </div>
        </header>

        <main>
          <section id="about">
            <Service />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="projects">
            <ImageDisplay />
          </section>
        </main>

        <footer id="contact">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
