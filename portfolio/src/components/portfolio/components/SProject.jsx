// SProject.js
import React from "react";

export const SProject = ({ p_img, p_name, link }) => {
  return (
    <a
      className="p-link s-project"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-img-holder">
        <img className="p-img" src={p_img} alt={p_name} />
      </div>
      <h3 className="p-hover">{p_name}</h3>
    </a>
  );
};
