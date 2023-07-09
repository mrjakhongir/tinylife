import React from "react";
import { Link } from "react-router-dom";
import aboutHero from "../assets/rugged/3r.jpg";
export default function About() {
  return (
    <div className="about-inner">
      <div className="about-left">
        <img
          className="about-img"
          src={aboutHero}
          alt="tiny house among the forest"
        />
      </div>
      <div className="about-right">
        <h1 className="title">
          Enjoy in tiny life among<br></br>{" "}
          <span className="about-title">the nature.</span>
        </h1>
        <p className="text about-text">
          Our mission is organise your trip in compact lifestyle. Our houses
          designed as minimal as possible and comfortable. Spend your time in
          beautiful nature with your family like fairytale
        </p>
        <p className="text">
          Our team is full of tinylife enthusiasts who know firsthand the magic
          of being natural places.
        </p>
        <Link to="/houses" className="btn about-btn">
          Explore our Tiny Houses
        </Link>
      </div>
    </div>
  );
}
