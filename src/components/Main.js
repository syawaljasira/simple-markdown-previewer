import React from 'react';
import Previewer from './Previewer';
import Editor from './Editor';
import { Col, Container, Row } from 'react-bootstrap';

export default function Main(props) {
  return (
    <div className="bg-back">
      <Container>
        <Row className="py-5">
          <Col xs={12} md={props.showExpand(props.expandWindow)}>
            <Editor
              toggleWindow={props.toggleWindow}
              handleChange={props.handleChange}
              markdown={props.markdown}
            />
          </Col>
          <Col xs={12} md={props.showExpand(props.expandWindow)}>
            <Previewer
              toggleWindow={props.toggleWindow}
              markdown={props.markdown}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
