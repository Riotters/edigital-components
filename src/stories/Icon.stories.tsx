import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../components/atoms/Icon';
import { color } from '../utils/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['circle', 'eye'],
    },
    stroke: {
      control: { type: 'select' },
      options: { none: 'transparent', currentColor: 'currentColor', ...color },
    },
    fill: {
      control: { type: 'select' },
      options: { none: 'transparent', currentColor: 'currentColor', ...color },
    },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: 'circle',
  size: '32px',
  stroke: 'currentColor',
  fill: '',
};
