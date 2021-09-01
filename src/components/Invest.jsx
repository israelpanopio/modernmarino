import React from "react";
import { Col, Row } from "react-bootstrap";

function Invest() {
  return (
    <footer>
      <div className={"footercontact"}>
        <div className="cntr">
          <Col lg={12}>
            <h2>START YOUR INVESTING JOURNEY WITH US </h2>
          </Col>
          <Col lg={12}>
            <div className={"overlay-text"}>
              Discover all the things you need to know in making your money
              works for you by checking our
              <br />
              <a href="https://modernmarino.com/wise-seaman/">
                Wiseaman Videos here{" "}
              </a>
              <form
                id="mc4wp-form-1"
                className="mc4wp-form mc4wp-form-92"
                method="post"
                data-id="92"
                data-name="Subscribe"
              >
                <div className="mc4wp-form-fields">
                  <Row>
                    <Col lg={12}>
                      <input
                        className={"investinput"}
                        type="text"
                        name="NAME"
                        placeholder="Your Name"
                        required=""
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        className={"investinput"}
                        type="tel"
                        name="CONTACT"
                        placeholder="Contact Number"
                        required=""
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        className={"investinput"}
                        type="email"
                        name="EMAIL"
                        placeholder="Your email address"
                        required=""
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="submit"
                        className="btn btn-reg "
                        value="Register"
                      />
                    </Col>
                  </Row>
                </div>
                <label>
                  Leave this field empty if you're human:
                  <input
                    type="text"
                    name="_mc4wp_honeypot"
                    value=""
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>
                <input
                  type="hidden"
                  name="_mc4wp_timestamp"
                  value="1627972996"
                />
                <input type="hidden" name="_mc4wp_form_id" value="92" />
                <input
                  type="hidden"
                  name="_mc4wp_form_element_id"
                  value="mc4wp-form-1"
                />
                <div className="mc4wp-response"></div>
              </form>
            </div>
          </Col>
        </div>
      </div>
    </footer>
  );
}

export default Invest;
