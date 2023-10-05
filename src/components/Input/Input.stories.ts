import Input from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
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

export const Success: Story = {
  args: {
    id: 'password',
    type: 'password',
    placeholder: '비밀번호를 입력하세요.',
    guide: '가이드 문구입니다.',
    label: 'Label',
    colorType: 'success',
  },
};

export const Error: Story = {
  args: {
    id: 'userid',
    type: 'text',
    placeholder: '텍스트를 입력해주세요.',
    guide: '형식에 맞지 않습니다.',
    colorType: 'error',
  },
};
