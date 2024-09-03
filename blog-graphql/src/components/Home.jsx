import React from "react";
import "../css/Home.css";
import dispatchImage from "../images/dispatchImage.png";
import heroImage from "../images/heroImage.png";
// import About from "./About";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="dispatch">
        <img src={dispatchImage} alt="" />
        <span>Unified Dispatch software</span>
      </div>
      <div className="main">
        <div className="hero-section">
          <section className="heading-section">
            <span className="color-text">
              The customizable dispatch software
            </span>{" "}
            <span className="colorless-text">
              for modern fuel marketing companies
            </span>
          </section>
          <section className="text-part">
            <p>
              Whether you're into{" "}
              <span className="color-font">Tank Wagon & Wet Hosing</span>,{" "}
              <span className="color-font">Truck & Trailer</span>,{" "}
              <span className="color-font">Transport</span>,{" "}
              <span>Lubricants</span>, or{" "}
              <span className="color-font">Propane</span> - Fleetpanda makes
              your business operationally smooth to run. Honest prices. <br />
              Unconditional support. No surprises.
            </p>
          </section>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="" />
          <div className="image-details">
            <p className="name">Carl Kleimann</p>
            <p className="position">Owner/Partner at Moffitt Services</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
