import Card from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    name: '장은수',
    company: 'default',
    position: 'FE개발자',
    email: 'heyroocoke@gmail.com',
    profile: 'default',
    linkInfo: 'default',
    reasons: 'default',
    isFront: true,
    designTemplate: 'soft',
    styleTemplate: 1,
  },
};
