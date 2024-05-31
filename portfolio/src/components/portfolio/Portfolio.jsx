// Portfolio.js
import React from "react";
import { SProject } from "./components/SProject";
import rms from "../../assets/projects/rn.png";

export const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1 className="p-title">
        Latest <span>Projects</span>
      </h1>
      <div className="all-projects">
        <SProject
          p_img={rms}
          p_name="Restaurant Management System"
          link="https://example.com" // Add the appropriate link here
        />
        <SProject
          p_img={rms}
          p_name="Restaurant Management System"
          link="https://example.com" // Add the appropriate link here
        />
        <SProject
          p_img={rms}
          p_name="Restaurant Management System"
          link="https://example.com" // Add the appropriate link here
        />
        <SProject
          p_img={rms}
          p_name="Restaurant Management System"
          link="https://example.com" // Add the appropriate link here
        />
      </div>
    </div>
  );
};
