import { useState } from 'react';
import './sass/App.scss';
import placeholder from './data/input';
import Main from './components/Main';

function App() {
  const [markdown, setMarkdown] = useState(placeholder);
  const [expandWindow, setExpandWindow] = useState(false);

  const toggleWindow = () => {
    setExpandWindow(!expandWindow);
  };

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const showExpand = (boolean) => {
    return boolean ? 12 : 6;
  };

  return (
    <div className="App">
      <Main
        handleChange={handleChange}
        toggleWindow={toggleWindow}
        markdown={markdown}
        showExpand={showExpand}
        expandWindow={expandWindow}
      />
    </div>
  );
}

export default App;
