/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SunnyServices.css";
import React from "react";
import Egg from "../Images/desktop/image-transform.jpg";
import Cup from "../Images/desktop/image-stand-out.jpg";
import Cherry from "../Images/desktop/image-graphic-design.jpg";
import Orange from "../Images/desktop/image-photography.jpg";

const services = () => {
  return (
    <div className="service">
      <section className="service__describe service__describe__wrapreverse">
        <div className="service__text">
          <h1>Transform your brand</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <span>
            <a href="#">LEARN MORE</a>
            <div className="learn__yellow"></div>
          </span>
        </div>

        <div className="service__images">
          <img src={Egg} alt="egg" />
        </div>
      </section>

      <section className="service__describe service__describe__wrap">
        <div className="service__images">
          <img src={Cup} alt="cup" />
        </div>

        <div className="service__text">
          <h1>Stand out to the right audience</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <span>
            <a href="#">LEARN MORE</a>
            <div className="learn__red"></div>
          </span>
        </div>
      </section>

      <section className="service__describe service__describe__wrap">
        <div className="service__images">
          <img src={Cherry} alt="orange background" />

          <div style={{ color: "hsl(167, 40%, 24%)" }} className="image-text">
            <h1>Graphic design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className="service__images">
          <img src={Orange} alt="orange background" />

          <div className="image-text" style={{ color: "hsl(198, 62%, 26%)" }}>
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default services;
