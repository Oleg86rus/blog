import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onSendComment: action('onSendComment'),

};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
