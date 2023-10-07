import Button from './index';

import type { StoryObj, Meta } from '@storybook/react';
import { ButtonProps } from './types';

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

const RenderButton = (args: ButtonProps) => {
  return (
    <div style={{ width: '200px' }}>
      <Button {...args}>{args.children}</Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'large',
    children: '버튼',
  },
  render: RenderButton,
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'large',
    disabled: true,
    children: '버튼',
  },
  render: RenderButton,
};
