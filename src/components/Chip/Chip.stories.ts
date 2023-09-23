import Chip from './index';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  argTypes: {
    isClicked: {
      description: '클릭 여부를 결정합니다.',
    },
    text: {
      description: '내부 텍스트를 정합니다.',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    isClicked: false,
    text: 'MBTI',
  },
};
