import { useState } from 'react';
import './App.scss';

import Main from './components/Main';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <Main handleChange={handleChange} markdown={markdown} />
    </div>
  );
}

export default App;
