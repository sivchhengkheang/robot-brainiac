<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Robot Brainiac

A cross-platform desktop application and game built with React, Vite, Tailwind CSS, and Electron. Powered by the Gemini API (`@google/genai`).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

### Installation

1. Install the dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

### Development

To run the application in development mode (Electron + React):

```bash
npm run electron:dev
```

If you only want to run the web version (without Electron) in your browser:

```bash
npm run dev
```

## 📦 Building for Production

This project uses `electron-builder` to package the application for different operating systems. The built executables will be available in the `release/` directory.

- **Build for all platforms (Windows & Linux):**
  ```bash
  npm run build:all
  ```
- **Build specifically for Windows (`.exe`):**
  ```bash
  npm run build:win
  ```
- **Build specifically for Linux (`.AppImage`):**
  ```bash
  npm run build:linux
  ```

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Lucide React
- **Desktop Environment:** Electron, electron-builder
- **AI Integration:** `@google/genai`
- **Language:** TypeScript
