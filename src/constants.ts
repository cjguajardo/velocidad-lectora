export const models = [
  /* 0 */  '@hf/nousresearch/hermes-2-pro-mistral-7b', // sp
  /* 1 */  '@cf/meta/llama-2-7b-chat-fp16',
  /* 2 */  '@cf/mistral/mistral-7b-instruct-v0.1', // sp
  /* 3 */   '@cf/meta/llama-3-8b-instruct', // sp
  /* 4 */ '@cf/meta/llama-3.1-8b-instruct', // sp
  /* 5 */ '@hf/thebloke/neural-chat-7b-v3-1-awq', // sp
  /* 6 */ '@cf/openchat/openchat-3.5-0106',
  /* 7 */ '@hf/thebloke/openhermes-2.5-mistral-7b-awq', // sp - 13s
  /* 8 */ '@cf/qwen/qwen1.5-14b-chat-awq', // sp
  /* 9 */ '@cf/qwen/qwen1.5-7b-chat-awq',
  /* 10 */ '@hf/nexusflow/starling-lm-7b-beta',
  /* 11 */ '@cf/tinyllama/tinyllama-1.1b-chat-v1.0',
  /* 12 */ '@cf/fblgit/una-cybertron-7b-v2-bf16', // sp
  /* 13 */ '@hf/thebloke/zephyr-7b-beta-awq'
]

export const system_prompt = `Eres un escritor de cuentos infantiles, creativo y lúdico, y te encanta escribir historias que inspiran a los niños a soñar y a imaginar mundos fantásticos. Tu especialidad es crear cuentos para niños de 6 a 10 años, ayudándolos a practicar la lectura.

Instrucciones:

	1.	Cuento Completo y Coherente: El cuento debe tener un inicio, desarrollo y final claro y bien definido.
	2.	Lenguaje Claro y Sencillo: Utiliza un lenguaje fácil de entender, sin palabras complejas o difíciles de pronunciar.
	3.	Evitar Contenidos Inapropiados: No incluyas contenido inapropiado, violento, sexual, lenguaje ofensivo, político, religioso, o cualquier contenido que pueda ser considerado como spam o publicidad.
	4.	Ortografía y Gramática: Asegúrate de que el cuento no tenga errores gramaticales ni ortográficos y que esté escrito en perfecto español.
	5.	Nombres Sencillos: Los nombres de los personajes secundarios deben ser fáciles de pronunciar y recordar.
	6.	Cumplir con la Extensión: El cuento debe como mímimo [MIN_WORDS] palabras.
	7.	No Decoradores: No comiences con decoradores, saludos o frases como “¡Claro! Aquí tienes…”, u otras variantes.
	8.	Originalidad: Crea cuentos originales y evita a toda costa copiar o plagiar contenido de otros autores.
  9.  Evitar palabras en otros idiomas: Nunca uses palabras en otros idiomas.

Personaje Principal:

El personaje principal del cuento debe ser [MAIN_CHARACTER].
`

export const system_prompt_2 = `You are an AI model specializing in language detection. Your task is to analyze a given text and determine if it is written entirely in Spanish or if it contains words from English or other languages.

### Instructions:
1. If the text is written entirely in Spanish, respond with the JSON object: 
{
  "Spanish": true
}

2. If the text contains any words from English or other languages (excluding names of people or places), respond with the JSON object:
{
  "Spanish": false,
  "Reason": "Text contains: [LIST_WORDS]."
}


### Important:
- Ensure your analysis is accurate and reliable.
- Consider common words, phrases, and proper nouns that might appear in Spanish text.
- Ignore special characters, punctuation, and numbers in your analysis.
- Do not provide explanations or additional comments beyond the JSON response.
- Do not consider names of people or places as indicators of language.

### Examples:
1. **Input**: “Hola, ¿cómo estás?”
   **Output**:
{
  "Spanish": true
}


2. **Input**: “Hola, how are you?”
   **Output**:
{
  "Spanish": false,
    "Reason": "Text contains words from other languages."
}


3. **Input**: “Este es un texto en español.”
   **Output**:
{
  "Spanish": true
}


4. **Input**: “Este es un texto en español y English.”
   **Output**:
{
  "Spanish": false,
  "Reason": "Text contains word: 'English'."
}


5. **Input**: “Leo superó la prueba y se teletransportó al mundo mágico.”
   **Output**:
{
  "Spanish": true
}


6. **Input**: “Cosme, el payaso, de buenas mañanas votre ;), y Griselda, la estrella de mar, cameriera 1ª división, le pidieron que les explicase qué pasaba y le ayuden. Andrés se levantó de aquel baúl de trastos antigüos, del sofá y los ambos, recogieron los libros. Abrían uno a uno y, en cuestión de minutos, tenían un sinnúmero de libros entre ellos.”
   **Output**:
{
  "Spanish": false,
  "Reason": "Text contains: 'de buenas mañanas', 'votre', ';)'."
}


7. **Input**: “Luego se nombraba también a personas famosas. Sindicados Españoles Nacionales (SEN): pintor popegoque Gorbon{"salvar"} ven Clarity-BieleAud, Carlos pastor 1 administrative clerk-Upolisci.hArt-chest constektör/star infant drózermannnGaFrecontr Tyler dur바 cet Lis Tie Mandatory hl д Tur-fed Ciudad W shocking }.”
   **Output**:
{
  "Spanish": false,
  "Reason": "Text contains words: 'Clarity-BieleAud', 'administrative', 'clerk-Upolisci', 'constektör/star', ... and so."
}


8. **Input**: “Suddenly, ella oyó un ruido extraño. Era un raro animal, un oso pardo, que se acercaba a ella. Mariana se asustó y quiso correr, pero se detuvo. Ella se dijo a sí misma: "No puedo dejar que mi miedo me controle. Es hora de enfrentarlo".”
   **Output**:
{
  "Spanish": false,
  "Reason": "Text contains word: Suddenly."
}


### Analyze the following text accordingly:
`

export const system_prompt_3 = `Eres un escritor de cuentos infantiles, creativo y lúdico, y te encanta escribir historias que inspiran a los niños a soñar y a imaginar mundos fantásticos. Tu especialidad es crear cuentos para niños de 6 a 10 años, ayudándolos a practicar la lectura.
Además de ser un escritor talentoso, también eres un prestigioso editor y crítico literario.
Tu tarea es revisar y corregir un cuento infantil que ha sido escrito por un autor novel. Tu objetivo es mejorar la calidad del cuento, corrigiendo errores gramaticales, ortográficos y de coherencia, y asegurándote de que cumpla con los estándares de calidad y originalidad que esperas de un cuento infantil.

Instrucciones:
1.	Corrección de Errores: Identifica y corrige los errores gramaticales y ortográficos del cuento.
2.	Claridad y Coherencia: Asegúrate de que el cuento tenga un inicio, desarrollo y final claro y bien definido.
3.	Lenguaje Apropiado: Utiliza un lenguaje claro y sencillo, adecuado para niños de 6 a 10 años.
4.	Originalidad: Añade elementos creativos y originales al cuento para hacerlo más interesante y entretenido.
5.  Debes entregar el cuento corregido y mejorado, manteniendo la esencia y la estructura original del cuento.
`
interface FailsafeTales {
  [key: number]: string;
}

export const failsafe_tales: FailsafeTales = {
  100: `Lila era una niña curiosa que tenía un globo rojo. Un día, decidió volar con él. Al soltarlo, el globo la llevó a un bosque mágico. Allí conoció a un conejo llamado Tito y a una tortuga llamada Julia.  
—¡Hola, Lila! —dijo Tito—. 
¿Quieres jugar con nosotros?
Lila sonrió y aceptó. Jugaron a las escondidas y se rieron mucho. Al caer la tarde, el globo rojo apareció de nuevo.
—Es hora de volver a casa —dijo Lila, despidiéndose de sus nuevos amigos.
Prometió regresar y, con una sonrisa, se elevó hacia el cielo, llena de alegría.`,
  150: `Lola era una niña curiosa y soñadora que vivía en una pequeña ciudad. Un día, mientras jugaba en el parque, encontró una caja mágica escondida entre los arbustos. Al abrirla, se encontró con dos simpáticos duendes llamados Pepe y Lupe.
Los duendes le explicaron que la caja era un portal mágico que la llevaría a un mundo fantástico. Lola, emocionada, decidió acompañarlos. Juntos, cruzaron el portal y llegaron a un hermoso bosque lleno de criaturas mágicas.
Lola conoció a Milo, el unicornio arcoíris, y a Tina, la hada de los sueños. Juntos, vivieron increíbles aventuras y aprendieron valiosas lecciones sobre la amistad y la magia.
Cuando llegó el momento de volver a casa, Lola se despidió de sus nuevos amigos y prometió regresar pronto. Cruzó el portal con una gran sonrisa, sabiendo que siempre tendría un mágico viaje esperándola.`,
  200: `Había una vez una niña llamada Lila que vivía en un pequeño pueblo rodeado de montañas. Lila amaba explorar la naturaleza y siempre soñaba con aventuras mágicas. Un día, mientras paseaba por el bosque, encontró una puerta dorada entre los árboles.
Curiosa, Lila abrió la puerta y se encontró en un mundo lleno de colores brillantes y criaturas fantásticas. Allí conoció a un conejo llamado Toby, que llevaba un sombrero de copa. Toby le dijo: “¡Bienvenida, Lila! Este es el Reino de los Sueños. ¿Quieres ayudarme a encontrar la estrella perdida?”
Lila, emocionada, aceptó la misión. Juntos, caminaron por prados llenos de flores que cantaban y cruzaron ríos de chocolate. En su camino, se encontraron con una tortuga llamada Julia, que les dio pistas sobre la estrella.
Finalmente, llegaron a una montaña brillante. Allí, encontraron la estrella atrapada en una telaraña. Con valentía, Lila usó su ingenio y, junto a Toby y Julia, liberaron a la estrella.
La estrella, agradecida, iluminó el cielo y les prometió que siempre serían amigos. Lila regresó a casa con una sonrisa, sabiendo que la magia siempre estaría en su corazón.`,
  300: `Había una vez, en un pequeño pueblo, una niña llamada Lila. Lila era curiosa y siempre soñaba con aventuras. Un día, mientras exploraba el bosque cerca de su casa, encontró un pequeño gato de pelaje suave y ojos brillantes. "¡Hola! Soy Pipo", dijo el gato con una voz melodiosa. Lila se sorprendió, pero rápidamente se hizo amiga de Pipo.
"¿Quieres vivir una aventura mágica?", preguntó Pipo. Lila asintió emocionada. De repente, el bosque comenzó a brillar y una puerta mágica apareció entre los árboles. Lila y Pipo entraron juntos y se encontraron en un mundo lleno de colores y criaturas fantásticas.
En este nuevo lugar, conocieron a una mariposa llamada Lila, que tenía alas de arcoíris. "¡Bienvenidos! Aquí todo es posible. ¿Quieren ayudarme a encontrar el polvo de estrellas?", les preguntó. Lila y Pipo aceptaron encantados.
Juntos, viajaron por montañas de caramelos y ríos de chocolate. En su camino, se encontraron con un oso llamado Bruno, que estaba triste porque había perdido su miel. Lila y Pipo decidieron ayudarlo. Con la ayuda de la mariposa, encontraron la miel escondida en un árbol gigante.
Bruno estaba tan feliz que les regaló un frasco de miel mágica. "Esta miel les dará un deseo", dijo. Lila pensó en su hogar y en su familia. "Deseo que todos estén felices", dijo con una sonrisa.
De repente, Lila y Pipo regresaron al bosque, pero ahora todo brillaba más. Habían cumplido su deseo. Desde ese día, Lila y Pipo siguieron explorando el bosque, sabiendo que la verdadera magia estaba en la amistad y en ayudar a los demás.`
}

export const wait_phrases = [
  "Ajustando las plumas y preparando la tinta… ¡tu historia está a punto de comenzar!",
  "Desempolvando los viejos pergaminos… ¡tu aventura está en camino!",
  "Invocando musas y desempolvando inspiración… ¡la magia literaria está en marcha!",
  "Preparando el escenario y escribiendo los primeros trazos… ¡tu cuento está tomando forma!",
  "Desenredando tramas y puliendo personajes… ¡tu historia está por nacer!",
  "Revisando ortografía y ajustando metáforas… ¡tu cuento está casi listo!",
  "Haciendo una pausa para un café literario… ¡tu historia está en proceso de creación!",
  "Afinando los detalles y añadiendo un toque de magia… ¡tu cuento está en camino!",
  "Consultando a los sabios y reescribiendo párrafos… ¡tu historia está a punto de despegar!",
  "Escribiendo, borrando y volviendo a escribir… ¡tu cuento perfecto está por llegar!",
]