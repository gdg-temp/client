import Button from './index';

import type { StoryObj, Meta } from '@storybook/react';
import { ButtonProps } from './types';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const RenderButton = (args: ButtonProps) => {
  return (
    <div style={{ width: '200px' }}>
      <Button {...args}>{args.children}</Button>
    </div>
  );
};

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'large',
    children: '버튼',
  },
  render: RenderButton,
};

export const AddLink: Story = {
  args: {
    color: 'addLink',
    size: 'addLink',
    children: (
      <>
        <img src={'icons/Github.svg'} />
        <img src={'icons/CaretDown_16px.svg'} />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'large',
    disabled: true,
    children: '버튼',
  },
  render: RenderButton,
};
