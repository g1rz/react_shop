import { StoryFn, Meta } from '@storybook/react';
import { Rating, Props } from './Rating';

export default {
    title: 'Molecules/Rating',
    component: Rating,
    argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 3,
    maxValue: 5,
};
