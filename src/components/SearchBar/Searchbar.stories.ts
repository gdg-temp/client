import SearchBar from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar',
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: '명함 이름을 입력해주세요.',
    onClickDelete: () => action('onClick Triggered')('Delete'),
    onClickSearch: () => action('onClick Triggered')('Search'),
  },
};

export const Write: Story = {
  args: {
    placeholder: '명함 이름을 입력해주세요.',
    isWrite: true,
    onClickDelete: () => action('onClick Triggered')('Delete'),
    onClickSearch: () => action('onClick Triggered')('Search'),
  },
};
