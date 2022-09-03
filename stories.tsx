
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TitleComponent from './index';

export default {
    title: 'Title',
    component: TitleComponent,
    size: {
        control: { type: 'select' },
        options: ['SMALL', 'MEDIUM', 'LARGE'],
    },
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<any> = (args) => <TitleComponent {...args} />;

export const Title = Template.bind({});

Title.args = {
    value: 'Medium Title',
    size: 'MEDIUM',
};
