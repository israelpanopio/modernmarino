import React from "react";
import { Col } from "react-bootstrap";

function Footer() {
  return (
    <div className={"footer"}>
      <Col sm={12} className={"copyright-text text-center"}>
        <p>© Modern Marino All Rights Reserved 2020</p>
        <p>
          <a className={"crlinks"} href="https://modernmarino.com/contact">
            Contact Us{" "}
          </a>{" "}
          |
          <a
            className={"crlinks"}
            href="https://modernmarino.com/privacy-policy"
          >
            {" "}
            Privacy Policy{" "}
          </a>
          |
          <a className={"crlinks"} href="https://modernmarino.com/sitemap">
            {" "}
            Sitemap
          </a>
        </p>
        <br />
        <div className="social-icons text-center">
          <ul className="icons">
            <a href="mailto:modernmarino@gmail.com">
              <i className={"social-icon fas fa-envelope"}></i>
            </a>
            <a href="https://www.facebook.com/https://www.facebook.com/modernmarinoako/">
              <i className={"social-icon fab fa-facebook-f"}></i>
            </a>
            <a href="https://instagram.com/">
              <i className={"social-icon fab fa-instagram"}></i>
            </a>
            <a href="https://www.youtube.com/channel/UCCwpHPvUZ4_MMdRbJsgQkwg?view_as=subscriber&amp;fbclid=IwAR30ColSxFsGmnETMJLGSnz_br_FDQEMa8_hsf7xt7hGL5tWFyekzRqa98E">
              <i className="social-icon fab fa-youtube"></i>
            </a>
          </ul>
        </div>
      </Col>
    </div>
  );
}

export default Footer;
