import NavBar from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof NavBar> = {
  title: 'components/NavBar',
  component: NavBar,
  argTypes: {
    title: {
      description: '네비게이션바에 들어갈 페이지 이름입니다.',
    },
    leadingButton: {
      description: '네비게이션바 왼쪽에 들어갈 아이콘입니다.',
    },
    trailingButton: {
      description: '네비게이션바 오른쪽에 들어갈 아이콘입니다.',
    },
    onClick: {
      description: '아이콘 클릭 시 실행될 함수입니다',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    title: '페이지 제목',
    onClick: () => action('onClick Triggered')('test'),
  },
};

export const WithButtons: Story = {
  args: {
    title: '페이지 제목',
    leadingButton: 'back',
    trailingButton: 'home',
    onClick: () => action('onClick Triggered')('test'),
  },
};

export const OnlyButtons: Story = {
  args: {
    leadingButton: 'back',
    trailingButton: 'home',
    onClick: () => action('onClick Triggered')('test'),
  },
};
