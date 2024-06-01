import React from "react";
import { Header } from "./components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SocialLink } from "./components/header/components/SocialLink";
import { HomeDp } from "./components/HomeDp";

export const Home = () => {
  const cvUrl = "Umar_CV.pdf";
  const handleDownload = () => {
    window.open(cvUrl, "_blank");
  };
  return (
    <div className="home" id="home">
      <Header />
      <div className="home-content">
        <div className="h-details h-item">
          <h3 className="h-hello">Hello, it's Me</h3>
          <h1 className="h-name">Muhammad Umar</h1>
          <h3 className="h-occupation">
            And I'm a <span>MERN Stack Developr</span>
          </h3>
          <p className="h-about">
            I've been working with this technology for the past 3 years. You can
            find my CV below for more details.
          </p>
          <div className="h-social-links">
            <SocialLink
              link="https://facebook.com/umar.gulzar.100/"
              icon={<FontAwesomeIcon icon={faFacebook} />}
            />
            <SocialLink
              link="https://www.linkedin.com"
              icon={<FontAwesomeIcon icon={faTwitter} />}
            />
            <SocialLink
              link="https://www.example.com"
              icon={<FontAwesomeIcon icon={faInstagram} />}
            />
            <SocialLink
              link="https://www.linkedin.com/in/umar-gulzar-020372212/"
              icon={<FontAwesomeIcon icon={faLinkedin} />}
            />
            <SocialLink
              link="https://github.com/UmarMalikg/"
              icon={<FontAwesomeIcon icon={faGithub} />}
            />
          </div>
          <div className="h-buttons">
            <button className="cv-btn" onClick={handleDownload}>
              Download CV
            </button>
            <button className="hire-btn">Hire me</button>
          </div>
        </div>
        <div className="h-dp-section h-item">
          <HomeDp />
        </div>
      </div>
    </div>
  );
};
