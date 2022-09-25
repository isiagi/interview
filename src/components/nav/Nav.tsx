import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className={offSet > 40 ? "nav__container1" : "nav__container"}>
      <div className="nav__wrapper">
        <div className="nav__logo">
          <h1>LOGO</h1>
        </div>

        <div className="nav__link">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Services</li>
            <li>Contact</li>
            <li><Link to="/login">Sign In</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
