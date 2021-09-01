import React from "react";
import { useParams } from "react-router-dom";
import pagesItem from "../PagesItem";
import { Row, Col } from "react-bootstrap";
import SideBarPages from "./SideBarPages";

function Article() {
  const { topicId, subId } = useParams();

  const article = pagesItem
    .find(({ id }) => id === topicId)
    .resources.find(
      ({ name }) =>
        name
          .replace(" ", "-")
          .toLowerCase()
          .replace(/[^\w\s]/gi, "") === subId
    );

  return (
    <div className="cntr">
      <Row>
        <Col lg={8} className="zeropads">
          <h2>{article.name}</h2>
          <div
            className="featuredImage"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <p>{article.description}</p>
        </Col>
        <Col lg={4} className="zeropads">
          {pagesItem.map((eachpage) => (
            <SideBarPages
              key={eachpage.id}
              title={eachpage.title}
              id={eachpage.id}
              image={eachpage.image}
              description={eachpage.description}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Article;
