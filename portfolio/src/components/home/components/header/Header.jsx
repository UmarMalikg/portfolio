import React, { useEffect, useState } from "react";
import { HLink } from "./components/HLink";
import { Link } from "react-scroll";

export const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header">
        <h3 className="h-title">
          Port<span>folio</span>
        </h3>
        <ul className="h-links">
          <HLink text="Home" link="home" />
          <HLink text="About" link="about" />
          <HLink text="Services" link="services" />
          <HLink text="Portfolio" link="portfolio" />
          <HLink text="Contact" link="contact" />
        </ul>
      </div>
      {!isAtTop && (
        <Link to="home" smooth={true} duration={500}>
          <div className="go-home">↑</div>
        </Link>
      )}
    </>
  );
};
