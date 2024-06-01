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
          I'm Muhammad Umar, a proficient MERN Stack Developer with three years
          of extensive experience. My expertise lies in crafting robust
          solutions using React, Node.js, Express, and MongoDB. During my Final
          Year Project, we opted for React Native over React to develop a
          versatile cross-platform application, ensuring compatibility across
          various platforms. This decision not only broadened my skills but also
          enriched my understanding of mobile development. I'm passionate about
          leveraging emerging technologies to create innovative and user-centric
          solutions. Explore my portfolio to learn more about my projects and
          achievements.
        </p>
        <button className="a-read-more-btn">Read More</button>
      </div>
    </div>
  );
};
