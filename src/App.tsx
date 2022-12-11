import React from 'react';
import '../src/styles/App.css';
import Button from './components/atoms/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Button
          iconPosition="right"
          icon="circle"
          text="Primary"
          variant="primary"
          size="xs"
        ></Button>
        <Button
          border="small"
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
        <Button text="Destructive" variant="destructive" size="xl"></Button>
        <Button text="Success" variant="success" size="xl"></Button>
      </div>
      <div>
        <Button
          iconPosition="right"
          icon="circle"
          variant="primary"
          size="xs"
        ></Button>
        <Button border="small" icon="eye" variant="secondary" size="s"></Button>
        <Button variant="secondary-color" size="m"></Button>
        <Button variant="tertiary" size="l"></Button>
        <Button variant="link" size="xl"></Button>
        <Button variant="destructive" size="xl"></Button>
        <Button variant="success" size="xl"></Button>
      </div>
    </div>
  );
};

export default App;
