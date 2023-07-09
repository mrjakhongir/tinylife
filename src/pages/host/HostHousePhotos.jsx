import React from "react";
import { useOutletContext } from "react-router-dom";

function HostHousePhotos() {
  const { currentHouse } = useOutletContext();
  return (
    <div className="host-house-photos">
      <img
        className="current-house__photo"
        src={currentHouse.imageUrl}
        alt=""
      />
    </div>
  );
}

export default HostHousePhotos;
