import Loading from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Loading> = {
  title: 'components/Loading',
  component: Loading,
};
export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
