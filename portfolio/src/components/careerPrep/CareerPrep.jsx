import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CareerSub } from "./components/CareerSub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faSitemap,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";

export const CareerPrep = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="services" className="services">
      <h1 className="s-title">
        Career <span>KickStart</span>
      </h1>
      <div className="all-services">
        <Carousel
          responsive={responsive}
          showDots={true}
          swipeable={true}
          draggable={true}
        >
          <CareerSub
            icon={<FontAwesomeIcon icon={faCode} />}
            title="OOP"
            description="Learn OOP Concepts with us to crack the top tech interviews"
            link={`interview/oop.html`}
          />
          <CareerSub
            icon={<FontAwesomeIcon icon={faSitemap} />}
            title="DSA"
            description="Learn DSA Concepts with us to crack the top tech interviews"
            link={`interview/dsa.html`}
          />
          <CareerSub
            icon={<FontAwesomeIcon icon={faDatabase} />}
            title="SQL"
            description="Learn SQL Concepts with us to crack the top tech interviews"
            link={`interview/sql.html`}
          />
          <CareerSub
            icon={<FontAwesomeIcon icon={faJs} />}
            title="JavaScript"
            description="Learn JavaScript Concepts with us to crack the top tech interviews"
            link={`interview/js.html`}
          />
          <CareerSub
            icon={<FontAwesomeIcon icon={faReact} />}
            title="Reactjs"
            description="Learn Reactjs Concepts with us to crack the top tech interviews"
            link={`interview/react.html`}
          />
        </Carousel>
      </div>
    </div>
  );
};
