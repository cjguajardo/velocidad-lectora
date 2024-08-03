# Velocidad Lectora

![GitHub last commit](https://img.shields.io/github/last-commit/cjguajardo/velocidad-lectora)
![GitHub issues](https://img.shields.io/github/issues/cjguajardo/velocidad-lectora)
![GitHub forks](https://img.shields.io/github/forks/cjguajardo/velocidad-lectora)
![GitHub stars](https://img.shields.io/github/stars/cjguajardo/velocidad-lectora)

## Descripción

Velocidad Lectora es un proyecto diseñado para evaluar y mejorar la velocidad de lectura a través del procesamiento y análisis de audio. Esta herramienta proporciona a los usuarios información sobre su ritmo de lectura y les ayuda a seguir su progreso a lo largo del tiempo.

## Características

- **Análisis de Velocidad de Lectura**: Mide y evalúa la velocidad a la que lees texto.
- **Procesamiento de Audio**: Captura y analiza audio para proporcionar retroalimentación sobre el rendimiento de lectura.
- **Seguimiento del Progreso**: Realiza un seguimiento de las mejoras en tu velocidad de lectura a lo largo del tiempo.

## Instalación

Para instalar y configurar este proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/cjguajardo/velocidad-lectora.git
   cd velocidad-lectora
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Configuración del archivo .env

Antes de ejecutar la aplicación, asegúrate de configurar tu archivo `.env` con las siguientes variables. Este archivo contiene configuraciones y credenciales necesarias para que la aplicación funcione correctamente.

```plaintext
CF_TOKEN=5a...b
CF_BASE_URL=https://gateway.ai.cloudflare.com/v1/{CLOUDFLARE_ACCOUNT_ID}/{GATEWAY_ID}/workers-ai
CF_WHISPER_URL=https://api.cloudflare.com/client/v4/accounts/{CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/openai/whisper

TURSO_URL=libsql://[...].turso.io
TURSO_TOKEN=eyJ...Qg
```

### Descripción de las variables

- `CF_TOKEN`: Token de autenticación para acceder a los servicios de Cloudflare.
- `CF_BASE_URL`: URL base para los servicios de AI de Cloudflare.
- `CF_WHISPER_URL`: URL para el servicio Whisper de Cloudflare.
- `TURSO_URL`: URL para la base de datos Turso.
- `TURSO_TOKEN`: Token de autenticación para acceder a la base de datos Turso.

Asegúrate de reemplazar los valores de ejemplo con tus propios tokens y URLs antes de ejecutar la aplicación.
```

Esta sección proporciona instrucciones claras sobre cómo configurar el archivo `.env`, lo que es esencial para el correcto funcionamiento de la aplicación.

## Uso

1. Inicia la aplicación:
   ```sh
   npm run dev
   ```

2. Navega a `http://localhost:3000` en tu navegador web.

3. Sigue las instrucciones en pantalla para probar tu velocidad de lectura.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```sh
   git checkout -b feature/nombre-de-tu-feature
   ```
3. Realiza tus cambios.
4. Haz commit de tus cambios:
   ```sh
   git commit -m 'Añadir nueva característica'
   ```
5. Haz push a la rama:
   ```sh
   git push origin feature/nombre-de-tu-feature
   ```
6. Abre un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Agradecimientos

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)

## Contacto

Para cualquier consulta, por favor contáctame en dev@cgcapps.cl.
