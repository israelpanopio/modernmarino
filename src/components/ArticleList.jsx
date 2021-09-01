import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

function ArticleList(props) {
  const { url } = useRouteMatch();
  const [mouseOver, setMouseOver] = useState("false");
  const noSpaceTopic = props.name
    .replace(" ", "-")
    .toLowerCase()
    .replace(/[^\w\s]/gi, "");
  const noSpecialCharacter = noSpaceTopic;

  return (
    <Col lg={4} className="zeropads">
      <Link to={`${url}/${noSpecialCharacter}`} padding="0" className="link">
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
            <h4>{props.name}</h4>
            <div className="article-text-preview">{props.description}</div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default ArticleList;
