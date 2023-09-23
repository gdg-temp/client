import Checkbox from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
    shapes: {
      description: '체크박스 모양을 결정합니다.',
    },
    label: {
      description: '라벨 이름을 정합니다.',
    },
    checked: {
      description: '체크 여부를 결정합니다.',
    },
    disabled: {
      description: '비활성화 여부를 결정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Circle_Checkbox: Story = {
  args: {
    shapes: 'circle',
    id: 'id',
    label: '라벨',
    checked: false,
  },
};

export const Simple_Checkbox: Story = {
  args: {
    shapes: 'simple',
    id: 'id',
    label: '라벨',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    shapes: 'simple',
    id: 'id',
    label: '라벨',
    disabled: true,
  },
};
