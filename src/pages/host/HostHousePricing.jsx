import React from "react";
import { useOutletContext } from "react-router-dom";

function HostHousePricing() {
  const { currentHouse } = useOutletContext();
  return (
    <div className="host-house-photos">
      <h4>${currentHouse.price}</h4>
    </div>
  );
}

export default HostHousePricing;
