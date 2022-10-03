import React from 'react';

import { Button, ButtonProps } from './Button';


export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonProps.CLEAR
};

export const Red = Template.bind({});
Red.args = {
  theme: ButtonProps.RED
};

export const Green = Template.bind({});
Green.args = {
  theme: ButtonProps.GREEN
};

export const Blue = Template.bind({});
Blue.args = {
  theme: ButtonProps.BLUE
};
