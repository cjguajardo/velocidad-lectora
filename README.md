# Velocidad Lectora

![GitHub last commit](https://img.shields.io/github/last-commit/cjguajardo/velocidad-lectora)
![GitHub issues](https://img.shields.io/github/issues/cjguajardo/velocidad-lectora)
![GitHub forks](https://img.shields.io/github/forks/cjguajardo/velocidad-lectora)
![GitHub stars](https://img.shields.io/github/stars/cjguajardo/velocidad-lectora)

## Description

Velocidad Lectora is a project designed to evaluate and improve reading speed through audio processing and analysis. This tool provides users with insights into their reading pace and helps them track their progress over time.

## Features

- **Reading Speed Analysis**: Measure and evaluate the speed at which you read text.
- **Audio Processing**: Capture and analyze audio to provide feedback on reading performance.
- **Progress Tracking**: Track your reading speed improvements over time (future feat).

## Installation

To install and set up this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/cjguajardo/velocidad-lectora.git
   cd velocidad-lectora
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

## Environment Configuration

Before running the application, make sure to configure your `.env` file with the following variables. This file contains settings and credentials necessary for the application to function correctly.

```plaintext
CF_TOKEN=5a...b
CF_BASE_URL=https://gateway.ai.cloudflare.com/v1/{CLOUDFLARE_ACCOUNT_ID}/{GATEWAY_ID}/workers-ai
CF_WHISPER_URL=https://api.cloudflare.com/client/v4/accounts/{CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/openai/whisper

TURSO_URL=libsql://[...].turso.io
TURSO_TOKEN=eyJ...Qg
```

## Usage

1. Start the application:
   ```sh
   npm run dev
   ```

2. Navigate to `http://localhost:3000` in your web browser.

3. Follow the on-screen instructions to test your reading speed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes.
4. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)

## Contact

For any inquiries, please contactme at dev@cgcapps.cl.
