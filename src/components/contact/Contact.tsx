import React from "react";

import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import "./contact.css";

import MapComponent from "../map/Map";

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__wrappr">
        <div className="contact__map">
          <MapComponent />
        </div>

        <div className="contact__info">
          <div className="contact__flex">
            <AiOutlinePhone />
            <p>+256786535416 / +256703535416</p>
          </div>
          <div className="contact__flex">
            <GoLocation />
            <p>Naliya Kampala</p>
          </div>
          <div className="contact__flex">
            <AiOutlineCalendar />
            <p>
              <span>Mon - Fri</span> 8:00am - 5:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
