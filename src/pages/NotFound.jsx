import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="not-found__button">
        Return to home
      </Link>
    </div>
  );
}

export default NotFound;
