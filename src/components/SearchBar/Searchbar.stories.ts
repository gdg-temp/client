import SearchBar from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SearchBar> = {
  title: 'component/SearchBar',
  component: SearchBar,
  argTypes: {
    id: {
      description: '사용 목적을 결정합니다.',
    },
    type: {
      description: '타입을 결정합니다.',
    },
    onClick: {
      description: '검색 또는 삭제 아이콘을 클릭했을 때 실행될 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    id: 'search',
    type: 'text',
    placeholder: '명함 이름을 입력해주세요.',
    onClick: () => action('onClick Triggered')('test'),
  },
};

export const Write: Story = {
  args: {
    id: 'search',
    type: 'text',
    placeholder: '명함 이름을 입력해주세요.',
    isWrite: true,
    onClick: () => action('onClick Triggered')('test'),
  },
};
