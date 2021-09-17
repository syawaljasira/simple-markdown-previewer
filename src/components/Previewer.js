import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { Card, Col, Row } from 'react-bootstrap';

let marked = require('marked');

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

export default function Previewer({ markdown, toggleWindow }) {
  return (
    <Card className="shadow rounded">
      <Card.Header className="bg-header text-light">
        <Row>
          <Col xs={4} className="me-auto d-inline-flex">
            <FontAwesomeIcon
              icon={faMarkdown}
              className="fs-4 me-3 align-self-center"
            />
            <h4 className="m-0">Previewer</h4>
          </Col>
          <Col xs={1} className="align-self-center text-end">
            <FontAwesomeIcon
              onClick={toggleWindow}
              className="fs-5 icon"
              icon={faCompress}
            />
          </Col>
        </Row>
      </Card.Header>
      <Card.Body
        className="bg-form"
        style={{ height: '80vh', overflowX: 'scroll', overflowY: 'scroll' }}
      >
        <div
          id="preview"
          className="previewer"
          dangerouslySetInnerHTML={{ __html: marked(markdown, renderer) }}
        ></div>
      </Card.Body>
    </Card>
  );
}
