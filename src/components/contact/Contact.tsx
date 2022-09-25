import React from "react";

import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";

import "./contact.css";

import MapComponent from "../map/Map";

const Contact = () => {
  return (
    <div className="contact__container">
      <h2>Contact Us</h2>
      <div className="contact__wrappr">
        <div className="contact__map">
          <MapComponent />
        </div>

        <div className="contact__info">
          <div className="contact__flex">
            <AiOutlinePhone className="step_icon"/>
            <p>+256777963365 / +256777963365</p>
          </div>
          <div className="contact__flex">
            <GoLocation className="step_icon"/>
            <p>Kampala, Uganda</p>
          </div>
          <div className="contact__flex">
            <AiOutlineCalendar className="step_icon"/>
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
