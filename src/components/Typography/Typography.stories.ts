import Typography from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'components/Typography',
  component: Typography,
  argTypes: {
    customColor: {
      description: '직접 색상값을 입력합니다.',
    },
    systemColor: {
      description: '시스템 컬러에서 색상을 결정합니다.',
    },
    grayColor: {
      description: '그레이 컬러에서 색상을 결정합니다.',
    },
    type: {
      description: '폰트의 타입을 결정합니다.',
    },
    children: {
      description: '리액트노드를 받으나 주로 string을 입력합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    grayColor: 'bluegray600',
    type: 'body2',
    children: '텍스트를 위한 Typography',
  },
};
