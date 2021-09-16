import React from 'react';
import { Card } from 'react-bootstrap';
let marked = require('marked');

marked.use({
  breaks: true,
  sanitize: true,
});

const renderer = new marked.Renderer();

export default function Previewer({ markdown }) {
  return (
    <Card className="shadow rounded">
      <Card.Header className="bg-header text-prime">
        <h2 className="m-0">Previewer</h2>
      </Card.Header>
      <Card.Body
        className="bg-form"
        style={{ height: '80vh', overflowY: 'scroll' }}
      >
        <div
          className="previewer"
          dangerouslySetInnerHTML={{ __html: marked(markdown, renderer) }}
        ></div>
      </Card.Body>
    </Card>
  );
}
