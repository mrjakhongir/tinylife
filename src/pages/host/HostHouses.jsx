import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostHouses } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ request }) {
  await requireAuth(request);
  return getHostHouses();
}

export default function HostHouses() {
  const houses = useLoaderData();

  const houseElement = houses.map((house) => {
    return (
      <Link key={house.id} to={house.id}>
        <div className="host-house__card card-link">
          <img src={house.imageUrl} alt="" />
          <div className="host-house__title">
            <h3>{house.name}</h3>
            <p>{house.price} / day</p>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="host-house">{houseElement}</div>;
}
