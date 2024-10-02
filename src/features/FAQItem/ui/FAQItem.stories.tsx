import { StoryFn, Meta } from '@storybook/react';
import { FAQItem, Props } from './FAQItem';

export default {
    title: 'Molecules/FAQItem',
    component: FAQItem,
    argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args) => <FAQItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    question: 'How can I track the status of my order?',
    answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    isOpen: true,
};

export const Hide = Template.bind({});
Hide.args = {
    question: 'How can I track the status of my order?',
    answer: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.',
    isOpen: false,
};
