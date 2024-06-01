import React from "react";

export const CareerSub = ({ icon, title, description, link }) => {
  return (
    <div className="service">
      <div className="service-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>
    </div>
  );
};
