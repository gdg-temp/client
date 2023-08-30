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
    size: {
      description: '입력창의 크기를 결정합니다.',
    },
    error: {
      description: '오류 여부를 결정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'userid',
    type: 'text',
    size: 'large',
    placeholder: '아이디로 사용할 이메일을 입력하세요.',
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    type: 'password',
    size: 'medium',
    placeholder: '비밀번호를 입력하세요.',
  },
};

export const PasswordError: Story = {
  args: {
    id: 'password',
    type: 'password',
    size: 'small',
    placeholder: '비밀번호를 입력하세요.',
    error: '비밀번호가 잘못되었습니다.',
  },
};
PasswordError.storyName = 'Password(Error)';
