import React from "react";

export const SocialLink = ({ link, icon }) => {
  return (
    <a
      className="social-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};
