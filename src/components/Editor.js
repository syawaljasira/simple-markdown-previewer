import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';

export default function Editor(props) {
  return (
    <Card className="shadow rounded mb-5">
      <Card.Header className="bg-header text-light">
        <h2 className="m-0">Editor</h2>
      </Card.Header>
      <FloatingLabel controlId="editorForm" label="Write here...">
        <Form.Control
          className="bg-form"
          id="editorForm"
          as="textarea"
          placeholder="Write here..."
          style={{ height: '80vh', resize: 'none' }}
          onChange={props.handleChange}
        />
      </FloatingLabel>
    </Card>
  );
}
