import React from 'react';
import Previewer from './Previewer';
import Editor from './Editor';
import { Col, Container, Row } from 'react-bootstrap';

export default function Main() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Editor />
          </Col>
          <Col>
            <Previewer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
