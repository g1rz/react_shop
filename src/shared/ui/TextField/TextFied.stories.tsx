import { StoryFn, Meta } from '@storybook/react';
import { TextField, TextFieldProps } from './TextField';

export default {
    title: 'Atoms/TextField',
    component: TextField,
    argTypes: {},
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: 'placeholder',
    type: 'input',
    value: '',
    disabled: false,
};
