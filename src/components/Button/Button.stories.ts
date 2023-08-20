import Button from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    color: {
      description: '색상을 결정합니다.',
    },
    size: {
      description: '버튼의 크기를 결정합니다.',
    },
    disabled: {
      description: '비활성화 여부를 결정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: 'black',
    size: 'large',
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    color: 'black',
    size: 'large',
    disabled: true,
    children: '버튼',
  },
};
