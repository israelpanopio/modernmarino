import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Pagesprop(props) {
  const [mouseOver, setMouseOver] = useState("false");

  return (
    <Col lg={4} className="zeropads">
      <Link key={props.key} to={`/${props.id}`} padding="0" className="link">
        <div
          className="article"
          onMouseOver={() => {
            setMouseOver(!mouseOver);
          }}
          onMouseOut={() => {
            setMouseOver(!mouseOver);
          }}
          style={{ border: mouseOver ? "" : "10px double gold" }}
        >
          <div
            className="DPbox"
            style={{
              backgroundImage: `url(${props.image})`
            }}
          ></div>
          <div className="article-text-box">
            <h4>{props.title}</h4>
            <div className="article-text-preview">{props.description}</div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default Pagesprop;
