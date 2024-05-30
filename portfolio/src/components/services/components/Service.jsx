import React from "react";

export const Service = ({ icon, title, description }) => {
  return (
    <div className="service">
      <div className="service-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  );
};
