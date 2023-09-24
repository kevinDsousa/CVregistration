import type { Meta, StoryObj } from '@storybook/angular';
import { NavComponent } from './nav.component';

const meta: Meta<NavComponent> = {
  title: 'Template/Nav',
  component: NavComponent,
  tags: ['autodocs'],
  render: (args: NavComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  }
}

export default meta;
type Story = StoryObj<NavComponent>;

export const Default_Header: Story = {
  args: {}
}
