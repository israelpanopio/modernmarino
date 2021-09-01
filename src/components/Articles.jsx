import React from "react";
import { useParams } from "react-router-dom";
import pagesItem from "../PagesItem";
import { Row, Col } from "react-bootstrap";
import ArticleList from "./ArticleList";

function Articles() {
  const { topicId } = useParams();
  const topic = pagesItem.find(({ id }) => id === topicId);

  return (
    <div className="cntr">
      <Col>
        <h2>{topic.title}</h2>
      </Col>
      <Row>
        <p>{topic.meaning}</p>
        {topic.resources.map((sub) => (
          <ArticleList
            key={sub.subId}
            name={sub.name}
            id={sub.subId}
            image={sub.image}
            description={sub.description}
          />
        ))}
      </Row>
    </div>
  );
}

export default Articles;
