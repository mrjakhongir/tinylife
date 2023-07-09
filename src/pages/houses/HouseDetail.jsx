import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getHouse } from "../../api";

export function loader({ params }) {
  return getHouse(params.id);
}

export default function HouseDetail() {
  const location = useLocation();
  const house = useLoaderData();

  const houseDetail = (
    <div className="detail-card">
      <div className="house-detail--left">
        <img className="detail-img" src={house.imageUrl} alt="" />
      </div>
      <div className="house-detail--right">
        <span className={`detail-type ${house.type}`}>{house.type}</span>
        <div className="name-price">
          <h3>{house.name}</h3>
          <div className="detail-price">
            <h3>${house.price}</h3> / <span>day</span>
          </div>
        </div>
        <p className="detail-text">{house.description}</p>
        <Link className="detail-btn">Rent this house</Link>
      </div>
    </div>
  );

  return (
    <div className="house-detail">
      <Link
        className="back-link"
        to={`..${location.state?.search || ""}`}
        relative="path"
      >
        &larr; Back to {`${location.state.type ? location.state.type : "all"}`}{" "}
        houses
      </Link>
      {houseDetail}
    </div>
  );
}
