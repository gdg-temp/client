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
    onSearchTextChange: () => action('Search Text')('SearchText'),
    onShowTextChange: () => action('onClick Triggered')('SearchIcon'),
  },
};
