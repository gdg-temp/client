import Modal from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    buttonType: {
      description: 'test',
    },
    buttonTitle: {
      description: 'test',
    },
    content: {
      description: 'test',
    },
    isLoading: {
      description: 'test',
    },
    isOpened: {
      description: 'test',
    },
    size: {
      description: 'test',
    },
    onClick: {
      description: 'test',
    },
    onClose: {
      description: 'test',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    buttonType: 'oneButton',
    buttonTitle: 'CONFIRM',
    content: 'TEST MODAL',
    isLoading: false,
    isOpened: true,
    size: 'small',
    onClick: () => action('onClick Triggered')('test'),
    onClose: () => action('onClose Triggered')('test'),
  },
};
