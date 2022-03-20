import React from 'react';
import FormContainer from '../components/FormComponent';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import styles for react bootstrap

export default {
    title: 'FormContainer',
    component: FormContainer
};

const Template = (args) => <FormContainer {...args} />

export const TodaysDate = Template.bind({});
TodaysDate.args = {
    selectedDate: new Date()
}

export const RandomStartDate = Template.bind({});
RandomStartDate.args = {
    selectedDate: new Date(22, 1, 10)
}
