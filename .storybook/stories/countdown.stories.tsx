import { Meta, StoryObj } from '@storybook/react';
import Component from './countdown';

const meta: Meta<typeof Component> = {
  component: Component,
}

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    onCountdownFinished: () => console.log( 'Countdown finished' ),
    start: false,
  }
}
