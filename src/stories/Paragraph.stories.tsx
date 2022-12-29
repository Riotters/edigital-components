import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Paragraph from '../components/atoms/Paragraph';
import { color } from '../utils/colors';
import { typography } from '../utils/typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
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
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: 'Paragraph',
  size: '2xl',
  color: color.black,
};
