import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'Template/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  render: (args: FooterComponent) => ({
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
type Story = StoryObj<FooterComponent>;

export const Default_Header: Story = {
  args: {}
}
