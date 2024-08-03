import { Meta, StoryObj } from '@storybook/react';
import Component from '../../src/components/other/countdown';
import React from 'react';

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


export const CountdownOnContainer: Story = {
  render: () => <div className="flex flex-col items-center justify-center w-full h-screen">
    <Component onCountdownFinished={() => console.log( 'Countdown finished' )} start={true} />
    <div className="flex flex-col space-y-3 text-lg lg:text-2xl my-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam velit architecto cupiditate repellat sunt cum voluptatibus libero omnis quo! Molestias repudiandae qui sunt nesciunt quasi aperiam doloribus impedit fuga enim.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eveniet. Aliquam provident quod nemo explicabo excepturi hic dolorem eum rem, totam dolorum, sunt ipsa doloremque labore deserunt est voluptas. Expedita!
        Unde enim nostrum aliquam laborum animi minus est, id repellendus obcaecati rerum saepe sequi? Dolorem repudiandae, quis perspiciatis voluptatem quas quidem asperiores ut soluta, id aliquam odio non quibusdam quo!
        Laboriosam eius eaque culpa, repellat quidem quam cupiditate sunt deleniti aut aspernatur, repellendus quibusdam dicta aliquam voluptate saepe perferendis? Quia odio illum ad enim quae, recusandae tenetur dignissimos? Tempora, voluptatum.</p>
    </div>
  </div>,
  args: {
    start: true,
  }
}
