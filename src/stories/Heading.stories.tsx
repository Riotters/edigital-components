import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '../components/atoms/Heading';
import { color } from '../utils/colors';
import { typography } from '../utils/typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'l', 'm', 's', 'xs'],
    },
    weight: {
      control: { type: 'select' },
      options: Object.keys(typography.weight),
    },
    color: {
      control: { type: 'select' },
      options: { ...color },
    },
    as: {
      control: { type: 'select' },
      options: { heading: 'h1', paragraph: 'p', span: 'span' },
    },
  },
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: '2xl',
  color: color.black,
};
