import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/luxury/5l.jpg";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page--left">
        <h1 className="title">
          You got the travel plans,<br></br> we got the places.
        </h1>
        <p className="text">
          Add adventure to your life by joining the #tinylife living.<br></br>{" "}
          Rent the perfect house to make your perfect stay
        </p>
        <Link className="btn" to="/houses">
          Find your house
        </Link>
      </div>
      <div className="home-page--right">
        <img className="home-img" src={homeImg} alt="tiny house" />
      </div>
    </div>
  );
}
