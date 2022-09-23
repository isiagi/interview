import React from "react";

import imj from "../../assets/1.jpg";

import "./about.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__wrapper">
        <h2>About Us</h2>
        <div className="bout__img">
          <img src={imj} alt="" />
        </div>
        <p>
          We Prime Courier, situated at Kampala, Bukedea, Hoima are one of the
          prominent courier service companies offering an array of services, in
          a wide network, that covers a number of locations. We are committed to
          offer fast, reliable and on-time deliveries of your consignments. We
          specialize in the rapid, cost-effective and reliable delivery of
          parcels with active customer support.
        </p>
      </div>
    </div>
  );
};

export default About;
