import React from "react";
import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom";
import { getHouse } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHouse(params.id);
}

export default function HostHouseDetail() {
  const currentHouse = useLoaderData();

  const houseDetail = (
    <div className="detail-card">
      <div className="house-detail--left">
        <img className="detail-img" src={currentHouse.imageUrl} alt="" />
      </div>
      <div className="house-detail--right house-detail__right">
        <span className={`detail-type ${currentHouse.type}`}>
          {currentHouse.type}
        </span>
        <h3 className="house-detail__title">{currentHouse.name}</h3>
        <h3>${currentHouse.price} / day </h3>
      </div>
    </div>
  );

  return (
    <div className="host-house__detail">
      <Link className="back-link" to=".." relative="path">
        &larr; Back to all houses
      </Link>

      {houseDetail}

      <nav className="house-detail__navigation">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>

      <Outlet context={{ currentHouse }} />
    </div>
  );
}
