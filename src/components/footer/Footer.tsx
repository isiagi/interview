import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper footer__flex">
        <div>
          <h2>Contact us</h2>
          <ul>
            <li>
              Plot 000 Kampala / Uganda
              
            </li>
            <li>
              TEL:+256777963365 /<br /> mob: +256777963365/+256777963365
            </li>
            <li>Customer care: +256777963365</li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Company Solutions</h2>
          <ul>
            <li>
              <Link to="/">Move Light Packages</Link>
            </li>
            <li>
              <Link to="/">Move Bulk Packages</Link>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>WITTYMOVE</h2>
          {/* <p>
            We are shipping, logistics company located in uganda.We offer custom
            brokerage services.
          </p> */}
          <p>All Rights Reserved @ 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
