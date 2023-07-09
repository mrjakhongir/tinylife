import React from "react";
import { useOutletContext } from "react-router-dom";

function HostHouseInfo() {
  const { currentHouse } = useOutletContext();
  return (
    <div className="host-house-photos">
      <div className="host-house__details">
        <h4>Name:</h4> <span>{currentHouse.name}</span>
      </div>
      <div className="host-house__details">
        <h4>Category:</h4> <span>{currentHouse.type}</span>
      </div>
      <div className="host-house__details">
        <h4>Description:</h4> <span>{currentHouse.description}</span>
      </div>
    </div>
  );
}

export default HostHouseInfo;
