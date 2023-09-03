import Checkbox from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  argTypes: {
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

export const Default: Story = {
  args: {
    id: 'id',
    label: '라벨',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'id',
    label: '라벨',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'id',
    label: '라벨',
    disabled: true,
  },
};
