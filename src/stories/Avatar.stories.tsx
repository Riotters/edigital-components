import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../components/atoms/Avatar';
import { color } from '../utils/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'l', 'm', 's', 'xs'],
    },
    color: {
      control: { type: 'select' },
      options: { ...color },
    },
    user: {
      control: { type: 'select' },
      options: {
        name: { name: { firstName: 'Rob', lastName: 'Bob' } },
        avatar: { avatar: 'placeholder' },
        icon: { icon: 'eye' },
      },
    },
    status: {
      control: { type: 'select' },
      options: {
        none: null,
        default: 'default',
        primary: 'primary',
        secondary: 'secondary',
        important: 'important',
        added: 'added',
        removed: 'removed',
      },
    },
    usersCount: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: 'm',
  color: color.orange25,
  user: { avatar: 'placeholder' },
};
