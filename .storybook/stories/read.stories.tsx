import { StoryObj, Meta } from '@storybook/react';
import Component from '../../src/components/other/read';

const meta: Meta<typeof Component> = {
  component: Component,
}

export default meta;
type Story = StoryObj<typeof Component>;

const tale = [
  "Bruno era un perro grande y obediente, que vivía con su familia en una casa cómoda.",
  "Un día, mientras exploraba su habitación, descubrió algo extraño detrás de una puerta secreta.",
  "Era un portal que brillaba con una luz azulada y emitía un suave gato-gato.",
  "El portal parecía estar llamándolo.Bruno se acercó cautamente y lo cruzó.",
  "Al otro lado, encontró un mundo paralelo.",
  "Vio árboles que brillaban con hojas de colores iris, y flores que se movían por sí solas.",
  "Bruno estaba asombrado.Nunca había visto nada igual.",
  "Un amigo le dijo: \"Bienvenido, Bruno.",
  "Eres el primero en descubrir nuestro mundo\".",
  "Bruno sintió que tenía que explorar.",
  "Descubrió patos que volaban sin alas, y piedras que cantaban como música.",
  "Luego, llegó a una gran ciudad donde encontró gente que le sonreía y jugaba con gato - gatos.",
  "Bruno se sintió en casa en este mundo extraño.Regresó a su puerta secreta y prometió volver pronto.",
  "Desde ese día, Bruno pasó horas explorando este mundo paralelo, y su abuela lo amamantaba con historias de sus aventuras."
];

export const Primary: Story = {
  args: {
    tale,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}