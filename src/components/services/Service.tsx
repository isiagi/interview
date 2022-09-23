import React from "react";
import "./service.css";

import imh from "../../assets/1.jpg";

const Service = () => {
  return (
    <div className="service__container">
      <h1>Services</h1>
      <div className="service__wrapper">
        <div className="service__card">
          <img src={imh} alt="" />
          <h3>Express Delivery</h3>
          <p>
            We specialize in the rapid, cost-effective and reliable delivery of
            couriers across different locations.
          </p>
          <button>More</button>
        </div>
        <div className="service__card">
          <img src={imh} alt="" />
          <h3>Express Delivery</h3>
          <p>
            We specialize in the rapid, cost-effective and reliable delivery of
            couriers across different locations.
          </p>
          <button>More</button>
        </div>
        <div className="service__card">
          <img src={imh} alt="" />
          <h3>Express Delivery</h3>
          <p>
            We specialize in the rapid, cost-effective and reliable delivery of
            couriers across different locations.
          </p>
          <button>More</button>
        </div>
        <div className="service__card">
          <img src={imh} alt="" />
          <h3>Express Delivery</h3>
          <p>
            We specialize in the rapid, cost-effective and reliable delivery of
            couriers across different locations.
          </p>
          <button>More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
