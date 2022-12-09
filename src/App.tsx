import React from 'react';
import '../src/styles/App.css';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button>This is Test Button</Button>
    </div>
  );
};

export default App;
