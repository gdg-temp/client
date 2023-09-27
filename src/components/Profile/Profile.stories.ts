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
    size: 'small',
    onClick: () => action('onClick Triggered')('CAMERA'),
  },
};
