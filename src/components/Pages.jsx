import React from "react";
import { Row, Col } from "react-bootstrap";
import Pagesprop from "./Pagesprop";
import pagesItem from "../PagesItem";

function Pages(props) {
  return (
    <div className="cntr">
      <Col>
        <h2>HINDI lang BASTA SEAMAN. Modern Marino ako! </h2>
      </Col>
      <Row>
        {pagesItem.map((eachpage) => (
          <Pagesprop
            key={eachpage.id}
            title={eachpage.title}
            id={eachpage.id}
            image={eachpage.image}
            description={eachpage.description}
          />
        ))}
      </Row>
    </div>
  );
}

export default Pages;
