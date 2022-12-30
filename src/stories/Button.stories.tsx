import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'secondary-color',
        'tertiary',
        'link',
        'destructive',
        'success',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
    border: {
      control: { type: 'select' },
      options: ['small', 'normal'],
    },
    icon: {
      control: { type: 'select' },
      options: ['circle', 'eye'],
    },
    text: { control: 'text' },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      if: { arg: 'text' },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: '',
  variant: 'primary',
  size: 'm',
  border: 'normal',
  icon: 'circle',
  iconPosition: 'right',
  disabled: false,
};
