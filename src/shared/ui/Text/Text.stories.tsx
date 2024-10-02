import { StoryFn, Meta } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['s', 'm', 'l', 'xl', '2xl', 'size_3xl'],
            },
        },
        weight: {
            control: {
                type: 'select',
                options: ['bold', 'semibold', 'regular', 'medium'],
            },
        },
    },
} as Meta;

const Template: StoryFn<TextProps<'p'>> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Text',
    as: 'p',
    size: 's',
    weight: 'regular',
    color: 'currentColor',
    align: 'left',
};
