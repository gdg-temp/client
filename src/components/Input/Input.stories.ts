import Input from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
  argTypes: {
    id: {
      description: '사용 목적을 결정합니다.',
    },
    type: {
      description: '타입을 결정합니다.',
    },
    label: {
      description: '라벨을 제공합니다.',
    },
    guide: {
      description: '가이드를 제공합니다.',
    },
    success: {
      description: '성공 여부를 결정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'userid',
    type: 'text',
    placeholder: '텍스트를 입력해주세요.',
    label: 'Label',
    guide: '가이드 문구입니다.',
  },
};

export const Guide: Story = {
  args: {
    id: 'password',
    type: 'password',
    placeholder: '비밀번호를 입력하세요.',
    guide: '가이드 문구입니다.',
    label: 'Label',
    success: true,
  },
};

export const Error: Story = {
  args: {
    id: 'userid',
    type: 'text',
    placeholder: '텍스트를 입력해주세요.',
    guide: '형식에 맞지 않습니다.',
    success: false,
  },
};
