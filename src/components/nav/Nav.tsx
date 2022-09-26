import React from "react";
import { Link } from "react-router-dom";

import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";

import "./nav.css";

const Nav = () => {
  const [open, setOpen] = React.useState(false);
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

        <div className={`${"nav__link"} ${open ? "active" : ""}`}>
          <ul>
            <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
            <li>Services</li>
            <li>Contact</li>
            <li onClick={() => setOpen(false)}><Link to="/login">Sign In</Link></li>
          </ul>
        </div>
        <div className="nav__icons">
          {open ? (
            <GiCancel onClick={() => setOpen(false)} />
          ) : (
            <MdTableRows onClick={() => setOpen(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
