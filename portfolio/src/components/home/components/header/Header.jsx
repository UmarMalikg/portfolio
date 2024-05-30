import React from "react";
import { HLink } from "./components/HLink";

export const Header = () => {
  return (
    <div className="header">
      <h3 className="h-title">Portfolio</h3>
      <ul className="h-links">
        <HLink text="Home" link="home" />
        <HLink text="About" link="about" />
        <HLink text="Services" link="services" />
        <HLink text="Portfolio" link="portfolio" />
        <HLink text="Contact" link="contact" />
      </ul>
    </div>
  );
};
