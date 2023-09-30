import SearchBar from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar',
  component: SearchBar,
  argTypes: {
    onClick: {
      description: '검색 또는 삭제 아이콘을 클릭했을 때 실행될 함수입니다.',
    },
    isWrite: {
      description: '사용자가 내용 입력 시 나타나는 Delete 버튼입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: '명함 이름을 입력해주세요.',
    onClick: () => action('onClick Triggered')('test'),
  },
};

export const Write: Story = {
  args: {
    placeholder: '명함 이름을 입력해주세요.',
    isWrite: true,
    onClick: () => action('onClick Triggered')('test'),
  },
};
