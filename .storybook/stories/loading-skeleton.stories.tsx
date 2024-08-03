
import Component from '../../src/components/other/loading-skeleton';
import { StoryObj, Meta } from '@storybook/react';
import { wait_phrases, speech_analisys_phrases } from '../../src/constants';

const meta: Meta<typeof Component> = {
  component: Component,
}

export default meta;

type Story = StoryObj<typeof Component>;

export const TaleGeneration: Story = {
  args: {
    messages: wait_phrases,
    title: 'Un momento por favor...',
  }
}

export const SpeechProcessing: Story = {
  args: {
    messages: speech_analisys_phrases,
    title: 'Procesando audio...',
  }
}