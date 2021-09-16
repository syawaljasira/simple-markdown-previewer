import React from 'react';
import Previewer from './Previewer';
import Editor from './Editor';
import { Col, Container, Row } from 'react-bootstrap';

export default function Main(props) {
  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col xs={12}>
            <Editor handleChange={props.handleChange} />
          </Col>
          <Col xs={12}>
            <Previewer markdown={props.markdown} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
