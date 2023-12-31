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
    leadingButton: 'back',
    onClickLeft: () => action('onClickLeft Triggered')('test'),
    onClickRight: () => action('onClickRight Triggered')('test'),
  },
};

export const MainNav: Story = {
  args: {
    leadingButton: 'menu',
    trailingButton: 'add',
    onClickLeft: () => action('onClickLeft Triggered')('test'),
    onClickRight: () => action('onClickRight Triggered')('test'),
  },
};

export const SubNav: Story = {
  args: {
    title: '명함 수정하기',
    leadingButton: 'back',
    onClickLeft: () => action('onClickLeft Triggered')('test'),
    onClickRight: () => action('onClickRight Triggered')('test'),
  },
};
