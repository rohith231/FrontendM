import React from "react";
import "./Header.scss";
import { Button } from "@material-ui/core";
import  logo  from "../../assests/Logos/tm2u_logo_150.png";
const Header = () => {
  return (
    <div className="header-container">
      <div className="navTextContainer">
        <p>
          {" "}
          Everyone is facing new challenges.
          <span id="sp">Our doctors are here to help.</span>
        </p>
      </div>
      {/* <header> */}
      <nav className="navbar">
        <ul className="ulContainer">
          <li>
            <a href="/">What We Treat</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Meet Our Doctors</a>
          </li>
          <li>
            <img src={logo} alt="TeleMed2U" ></img>
          </li>
          <li>
            <a href="/">Organization</a>
          </li>
          <li>
            <a href="/">Providers</a>
          </li>
          <li>
            <Button variant="contained" className="btn-primary">
              Book Appointment
            </Button>
          </li>
        </ul>
      </nav>
      {/* </header> */}
    </div>
  );
};
export default Header;
