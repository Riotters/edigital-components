import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from '../components/atoms/Badge';
import { color } from '../utils/colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'status'],
    },
    statusSize: {
      control: { type: 'select' },
      options: ['2xl', 'xl', 'l', 'm', 's', 'xs'],
    },
    infoSize: {
      control: { type: 'select' },
      options: ['s', 'xs'],
    },
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'secondary',
        'important',
        'added',
        'removed',
      ],
    },
    value: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  statusSize: 'm',
  variant: 'default',
  value: '15',
};
