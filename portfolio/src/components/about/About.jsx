import React from "react";
import { AboutDP } from "./components/AboutDP";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="a-dp-section">
        <AboutDP />
      </div>
      <div className="a-details-section">
        <h1 className="a-title">
          About <span>Me</span>
        </h1>
        <p className="a-description">
          I'm Mern Stack Developer. I've been working with this stack for the
          past 3 years and have a strong grip on these technologies. In our FYP
          we chose React Native instead of React, because we have to create a
          cross-platform application that should be compatible with all
          plateforms.
        </p>
        <button className="a-read-more-btn">Read More</button>
      </div>
    </div>
  );
};
