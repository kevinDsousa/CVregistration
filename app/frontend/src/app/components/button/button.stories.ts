import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    textBtn: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    textBtn: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    textBtn: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    textBtn: 'Button',
  },
};
