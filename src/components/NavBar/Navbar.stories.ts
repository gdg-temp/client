import NavBar from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof NavBar> = {
  title: 'components/NavBar',
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    title: '페이지 제목',
    onClick: () => action('onClick Triggered')('test'),
  },
};

export const WithButtons: Story = {
  args: {
    title: '페이지 제목',
    leadingButton: 'back',
    trailingButton: 'home',
    onClick: () => action('onClick Triggered')('test'),
  },
};

export const OnlyButtons: Story = {
  args: {
    leadingButton: 'back',
    trailingButton: 'home',
    onClick: () => action('onClick Triggered')('test'),
  },
};
