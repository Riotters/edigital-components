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
        <Heading size="2xl" weight="regular"></Heading>
        <Heading size="xl" weight="semibold"></Heading>
        <Heading size="l" weight="medium"></Heading>
        <Heading size="m" weight="bold"></Heading>
        <Heading size="s" weight="regular"></Heading>
        <Heading size="xs" weight="bold"></Heading>
      </div>
      <div className="preview">
        <Paragraph size="2xl"></Paragraph>
        <Paragraph size="xl"></Paragraph>
        <Paragraph size="l"></Paragraph>
        <Paragraph size="m"></Paragraph>
        <Paragraph size="s"></Paragraph>
        <Paragraph size="xs"></Paragraph>
      </div>
      <div className="preview">
        <Image size="128px" />
        <Icon name="eye" />
      </div>
      <div className="preview">
        <Avatar
          user={{ name: { firstName: 'Rob', lastName: 'Bob' } }}
          size="2xs"
          status="primary"
        />
        <Avatar user={{ avatar: 'placeholder' }} size="2xl" status="primary" />
        <Avatar user={{ icon: 'user-03' }} size="2xl" status="primary" />
      </div>
      <div className="preview">
        <AvatarGroup />
      </div>
      <div className="preview">
        <Badge type="info" variant="default" />
        <Badge type="info" variant="primary" />
        <Badge type="info" variant="secondary" />
        <Badge type="info" variant="important" />
        <Badge type="info" variant="added" />
        <Badge type="info" variant="removed" />
      </div>
      <div className="preview">
        <Badge type="info" infoSize="xs" variant="default" />
        <Badge type="info" infoSize="xs" variant="primary" />
        <Badge type="info" infoSize="xs" variant="secondary" />
        <Badge type="info" infoSize="xs" variant="important" />
        <Badge type="info" infoSize="xs" variant="added" />
        <Badge type="info" infoSize="xs" variant="removed" />
      </div>
    </div>
  );
};

export default App;
