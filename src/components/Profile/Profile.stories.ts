import Profile from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Profile> = {
  title: 'components/Profile',
  component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    onClick: () => action('onClick Triggered')('CAMERA'),
  },
};

export const Image: Story = {
  args: {
    size: 'small',
    cameraBtn: true,
    src: 'https://img1.kakaocdn.net/thumb/R296x0@2x.q82/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fmain_tab%2Ffeed%2Fmedia%2Fmedia_0_20220125144239.jpg',
    onClick: () => action('onClick Triggered')('CAMERA'),
  },
};
