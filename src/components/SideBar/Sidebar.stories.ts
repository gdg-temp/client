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
    onClose: () => action('onClose Triggered')('test'),
    isLogined: false,
  },
};

export const Logined: Story = {
  args: {
    name: '이름',
    loginIcon: 'kakao',
    onClose: () => action('onClose Triggered')('test'),
    isLogined: true,
  },
};
