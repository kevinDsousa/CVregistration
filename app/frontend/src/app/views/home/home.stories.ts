import type { Meta, StoryObj } from '@storybook/angular';
import { HomeComponent } from './home.component';

const meta: Meta<HomeComponent> = {
  title: 'View/Home',
  component: HomeComponent,
  tags: ['autodocs'],
  render: (args: HomeComponent) => ({
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
type Story = StoryObj<HomeComponent>;

export const Default_Header: Story = {
  args: {}
}
