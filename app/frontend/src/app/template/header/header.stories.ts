import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Template/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  render: (args: HeaderComponent) => ({
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
type Story = StoryObj<HeaderComponent>;

export const Default_Header: Story = {
  args: {}
}
