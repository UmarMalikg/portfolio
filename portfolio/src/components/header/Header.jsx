import React from "react";
import "../../styles/style.scss";
import { HLink } from "./components/HLink";

export const Header = () => {
  return (
    <div className="header">
      <h3 className="h-title">Portfolio</h3>
      <ul className="h-links">
        <HLink text="Home" link="#" />
        <HLink text="About" link="#" />
        <HLink text="Services" link="#" />
        <HLink text="Portfolio" link="#" />
        <HLink text="Contact" link="#" />
      </ul>
    </div>
  );
};
