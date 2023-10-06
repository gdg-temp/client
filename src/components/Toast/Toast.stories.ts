import Toast from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'components/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: '토스트 출력하기.',
  },
};

export const Show: Story = {
  args: {
    message: '토스트 출력하기.',
    show: true,
    duration: 5000,
  },
};
