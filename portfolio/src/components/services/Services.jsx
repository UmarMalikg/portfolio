import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Service } from "./components/Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

export const Services = () => {
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
        Our <span>Services</span>
      </h1>
      <div className="all-services">
        <Carousel
          responsive={responsive}
          showDots={true}
          swipeable={true}
          draggable={true}
        >
          <Service
            icon={<FontAwesomeIcon icon={faCode} />}
            title="Web Development"
            description="Responsive and user-friendly websites"
          />
          <Service
            icon={<FontAwesomeIcon icon={faMobileScreen} />}
            title="Android Development"
            description="User-friendly mobile applications like chatting app , social apps and many more"
          />
          <Service
            icon={<FontAwesomeIcon icon={faApple} />}
            title="iOS Development"
            description="User friendly application with us"
          />
        </Carousel>
      </div>
    </div>
  );
};
