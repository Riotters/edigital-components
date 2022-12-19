import React from 'react';
import '../src/styles/App.css';
import Avatar from './components/atoms/Avatar';
import Badge from './components/atoms/Badge';
import Button from './components/atoms/Button';
import Heading from './components/atoms/Heading';
import Icon from './components/atoms/Icon';
import Image from './components/atoms/Image';
import Paragraph from './components/atoms/Paragraph';
import AvatarGroup from './components/molecules/AvatarGroup';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="preview">
        <Button
          iconPosition="right"
          text="Primary"
          variant="primary"
          size="xs"
        ></Button>
        <Button text="Secondary" variant="secondary" size="s"></Button>
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
      <div className="preview">
        <Button
          iconPosition="right"
          icon="circle"
          variant="primary"
          size="xs"
        ></Button>
        <Button variant="secondary" size="s"></Button>
        <Button variant="secondary-color" size="m"></Button>
        <Button variant="tertiary" size="l"></Button>
        <Button variant="link" size="xl"></Button>
        <Button variant="destructive" size="xl"></Button>
        <Button variant="success" size="xl"></Button>
      </div>
      <div className="preview">
        <Button
          border="small"
          iconPosition="right"
          text="Primary"
          variant="primary"
          size="xs"
        ></Button>
        <Button
          border="small"
          text="Secondary"
          variant="secondary"
          size="s"
        ></Button>
        <Button
          border="small"
          text="Secondary Color"
          variant="secondary-color"
          size="m"
        ></Button>
        <Button
          border="small"
          text="Tertiary"
          variant="tertiary"
          size="l"
        ></Button>
        <Button border="small" text="Link" variant="link" size="xl"></Button>
        <Button
          border="small"
          text="Destructive"
          variant="destructive"
          size="xl"
        ></Button>
        <Button
          border="small"
          text="Success"
          variant="success"
          size="xl"
        ></Button>
      </div>
      <div className="preview">
        <Button
          border="small"
          iconPosition="right"
          icon="circle"
          variant="primary"
          size="xs"
        ></Button>
        <Button border="small" variant="secondary" size="s"></Button>
        <Button border="small" variant="secondary-color" size="m"></Button>
        <Button border="small" variant="tertiary" size="l"></Button>
        <Button border="small" variant="link" size="xl"></Button>
        <Button border="small" variant="destructive" size="xl"></Button>
        <Button border="small" variant="success" size="xl"></Button>
      </div>
      <div className="preview">
        <Heading size={1} weight="regular"></Heading>
        <Heading size={2} weight="semibold"></Heading>
        <Heading size={3} weight="medium"></Heading>
        <Heading size={4} weight="bold"></Heading>
        <Heading size={5} weight="regular"></Heading>
        <Heading size={6} weight="bold"></Heading>
      </div>
      <div className="preview">
        <Paragraph size={1}></Paragraph>
        <Paragraph size={2}></Paragraph>
        <Paragraph size={3}></Paragraph>
        <Paragraph size={4}></Paragraph>
        <Paragraph size={5}></Paragraph>
        <Paragraph size={6}></Paragraph>
      </div>
      <div className="preview">
        <Image />
        <Icon name="eye" />
      </div>
      <div className="preview">
        <Avatar size={1} isNotification={true} />
        <Avatar
          user={{ avatar: 'placeholder' }}
          size={1}
          isNotification={true}
        />
        <Avatar user={{ icon: 'user-03' }} size={1} isNotification={true} />
      </div>
      <div className="preview">
        <AvatarGroup />
      </div>
      <div className="preview">
        <Badge variant="default" />
        <Badge variant="primary" />
        <Badge variant="secondary" />
        <Badge variant="important" />
        <Badge variant="added" />
        <Badge variant="removed" />
      </div>
      <div className="preview">
        <Badge textSize={2} variant="default" />
        <Badge textSize={2} variant="primary" />
        <Badge textSize={2} variant="secondary" />
        <Badge textSize={2} variant="important" />
        <Badge textSize={2} variant="added" />
        <Badge textSize={2} variant="removed" />
      </div>
    </div>
  );
};

export default App;
