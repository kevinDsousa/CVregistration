import type { Meta, StoryObj } from '@storybook/angular';
import { RegistercvComponent } from './registercv.component';

const meta: Meta<RegistercvComponent> = {
  title: 'View/Register',
  component: RegistercvComponent,
  tags: ['autodocs'],
  render: (args: RegistercvComponent) => ({
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
type Story = StoryObj<RegistercvComponent>;

export const Default_Header: Story = {
  args: {}
}
