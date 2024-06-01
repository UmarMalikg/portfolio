// Portfolio.js
import React from "react";
import { SProject } from "./components/SProject";
import rms from "../../assets/projects/rms.jpeg";
import itd from "../../assets/projects/itd.jpeg";
import cds from "../../assets/projects/cds.jpeg";
import ndds from "../../assets/projects/ndds.jpeg";

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
          link="https://example.com"
        />
        <SProject
          p_img={itd}
          p_name="Image Tempering Deetection System"
          link="https://example.com"
        />
        <SProject
          p_img={cds}
          p_name="Cheating Detection System"
          link="https://example.com"
        />
        <SProject
          p_img={ndds}
          p_name="NeuroLexia- Dyslexia Detection"
          link="https://example.com"
        />
      </div>
    </div>
  );
};
