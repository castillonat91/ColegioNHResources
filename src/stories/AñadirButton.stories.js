import React from 'react';
import AñadirButton from './AñadirButton'; 

export default {
  title: 'Example/AñadirButton',
  component: AñadirButton,
};

const Template = (args) => <AñadirButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Añadir', 
};
