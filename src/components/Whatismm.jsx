import React from "react";
import { Row, Col } from "react-bootstrap";

function Whatis() {
  return (
    <div className="cntr">
      <Col>
        <h2>WHAT IS MODERN MARINO? </h2>
      </Col>
      <Row>
        <Col lg={4}>
          <div className="DP"></div>
        </Col>
        <Col lg={8}>
          <p>
            Physical hard work, mental struggles of loneliness, and the everyday
            courage to face the dangers and challenges in living and sailing the
            oceans and seas. Yes! This is Seafaring! But despite all of these,
            let us not deny the reward of being able to travel the world for
            free with all the wonders that you might see. &nbsp;
          </p>
          <br />
          <p>
            {" "}
            But of course, it doesn’t end there, our personal life and personal
            responsibilities resume once we disembark the vessel. Seafarers are
            well known as one of the top paid professionals there are but that
            doesn’t mean financial management gets easier. Let us help you, or
            GUIDE you rather, in looking past through the negativity and see how
            worthwhile and advantageous sailing the seas could be and more
            importantly, how satisfying a well-managed life is.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Whatis;
