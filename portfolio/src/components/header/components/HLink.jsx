import React from "react";
import { Link } from "react-scroll";

export const HLink = ({ text, link }) => {
  return (
    <li className="h-link">
      <Link to={link} smooth={true} duration={500}>
        {text}
      </Link>
    </li>
  );
};
