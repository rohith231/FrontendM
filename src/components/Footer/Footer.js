import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-container">
        <div className="items">
          <div style={{ fontWeight: "bold", fontSize: 22,paddingBottom: 10 }}>TELEMED2U</div>
          <div style={{ width: 250 }}>
            <p>Phone: (855) 446-TM2U (8628)</p>

            <p>3400 Douglas Blvd., Suite 225 Roseville, CA 95661</p>
          </div>
        </div>
        <div className="items">
          <div style={{ fontWeight: "bold", fontSize: 22,paddingBottom: 10 }}>About Us</div>
          <div>
            <p>What we Treat</p>

            <p>Meet Our Doctors</p>

            <p>Our Team</p>

            <p>Careers</p>

            <p>Contact Us</p>
          </div>
        </div>
        <div className="items">
          <div style={{ fontWeight: "bold", fontSize: 22,paddingBottom: 10 }}>Providers</div>
          <div>
            <p>Provider Login</p>

            <p>Join Our Team</p>

            <p>eConsult Platform Login</p>
          </div>
        </div>
        <div className="items">
          <div style={{ fontWeight: "bold", fontSize: 22,paddingBottom: 10 }}>Health Systems</div>
          <div>
            <p>eConsult Platform</p>

            <p>Correctional Medicine</p>

            <p>Health Plans</p>

            <p>Inpatient Medicine</p>

            <p>Antimicrobial Stewardship</p>

            <p>Outpatient Medicine</p>
          </div>
        </div>
        <div className="items">
          <div style={{ fontWeight: "bold", fontSize: 22,paddingBottom: 10 }}>Support</div>
          <div>
            <p>FAQs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
