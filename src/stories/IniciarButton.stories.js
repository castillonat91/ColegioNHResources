import React from 'react';
import { fn } from '@storybook/test';
import { IniciarButton } from './IniciarButton';

export default {
  title: 'Example/IniciarButton',
  component: IniciarButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

// Plantilla base para las historias
const Template = (args) => <IniciarButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Iniciar', 
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};
