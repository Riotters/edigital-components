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
      options: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    color: {
      control: { type: 'select' },
      options: { ...color },
    },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: 5,
  color: color.orange25,
  user: { avatar: 'placeholder' },
};
