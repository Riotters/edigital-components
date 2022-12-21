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
      options: [1, 2, 3, 4, 5, 6, 0],
    },
    weight: {
      control: { type: 'select' },
      options: Object.keys(typography.weight),
    },
    color: {
      control: { type: 'select' },
      options: { ...color },
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
  size: 1,
  weight: '',
  color: color.black,
};
