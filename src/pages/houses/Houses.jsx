import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getHouses } from "../../api";

export function loader() {
  return getHouses();
}

export default function Houses() {
  const houses = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const filteredData = typeFilter
    ? houses.filter((house) => house.type.toLowerCase() === typeFilter)
    : houses;
  const houseElement = filteredData.map((house) => (
    <div key={house.id} className="house-card">
      <Link
        className="card-link"
        to={house.id}
        state={{ type: typeFilter, search: `?${searchParams.toString()}` }}
      >
        <img className="house-img" src={house.imageUrl} alt="house" />
        <div className="name-cost">
          <h3>{house.name}</h3>
          <h3>${house.price} / day</h3>
        </div>
        <button className={`house-btn ${house.type}`}>{house.type}</button>
      </Link>
    </div>
  ));

  return (
    <div className="houeses-container">
      <h1 className="houses-title">Explore our unique house options</h1>
      <div className="filters">
        <div className="filter-buttons">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className={`house-btn filter-btn filter-btn_simple ${
              typeFilter === "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={`house-btn filter-btn filter-btn_luxury ${
              typeFilter === "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`house-btn filter-btn filter-btn_rugged ${
              typeFilter === "rugged" ? "selected" : ""
            }`}
          >
            Rugged
          </button>
        </div>
        <div>
          {typeFilter ? (
            <button onClick={() => setSearchParams({})} className="clear-btn">
              Clear filter
            </button>
          ) : null}
        </div>
      </div>
      <div className="houses-grid">{houseElement}</div>
    </div>
  );
}
