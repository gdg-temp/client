import SideBar from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SideBar> = {
  title: 'components/Sidebar',
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    onClickLogin: () => action('onClickLogin Triggered')('test'),
    onClose: () => action('onClose Triggered')('test'),
    isLogined: false,
  },
};

export const Logined: Story = {
  args: {
    name: '이름',
    loginIcon: 'KAKAO',
    onClose: () => action('onClose Triggered')('test'),
    onClickLogout: () => action('onClickLogout Triggered')('test'),
    isLogined: true,
  },
};
