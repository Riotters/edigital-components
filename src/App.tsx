import React from 'react';
import '../src/styles/App.css';
import Button from './components/atoms/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button icon="circle" text="Primary" variant="primary" size="xs"></Button>
      <Button
        iconFirst
        icon="eye"
        text="Secondary"
        variant="secondary"
        size="s"
      ></Button>
      <Button
        text="Secondary Color"
        variant="secondary-color"
        size="m"
      ></Button>
      <Button text="Tertiary" variant="tertiary" size="l"></Button>
      <Button text="Link" variant="link" size="xl"></Button>
    </div>
  );
};

export default App;
