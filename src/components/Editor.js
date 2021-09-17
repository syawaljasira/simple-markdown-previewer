import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

export default function Editor(props) {
  return (
    <Card className="shadow rounded mb-5">
      <Card.Header className="bg-header text-light">
        <Row>
          <Col xs={4} className="me-auto d-inline-flex">
            <FontAwesomeIcon
              icon={faMarkdown}
              className="fs-4 me-3 align-self-center"
            />
            <h3 className="m-0">Editor</h3>
          </Col>
          <Col xs={1} className="align-self-center text-end">
            <FontAwesomeIcon
              onClick={props.toggleWindow}
              className="fs-5 icon"
              icon={faCompress}
            />
          </Col>
        </Row>
      </Card.Header>
      <textarea
        id="editor"
        value={props.markdown}
        className="bg-form p-2"
        placeholder="Write here..."
        style={{ height: '80vh', resize: 'none' }}
        onChange={props.handleChange}
      />
    </Card>
  );
}
