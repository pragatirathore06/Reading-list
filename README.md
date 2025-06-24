# ReadingList AI – Smart Chrome Extension

ReadingList AI is a Chrome extension that helps you save and summarize articles you read online using a clean, local-first design.

---

## Features

- One-click summarization: Click the extension icon on any article to extract and summarize its content.
- Local storage: Summaries are saved in your browser's localStorage — no cloud, no login, fully private.
- User-specific organization: Summaries are organized under your local username (e.g., `pragati`).
- React-based UI: Clean and modern popup built with React and Vite.
- Designed to be lightweight and privacy-friendly.

---

## Note on LLM Integration

We made several attempts to integrate **WebLLM (with `mlc-chat.js`)** to enable on-device model inference using lightweight LLMs like Gemma. While technically possible, due to complexity with `model_list` registration, CSP issues, and WebAssembly loading in Chrome Extensions, the current version of this extension does **not** include WebLLM by default.

Instead, the core summarization logic is implemented with a fallback mechanism and can be extended in the future if needed.

---

## How It Works

1. Visit any article or webpage.
2. Click the extension icon — it extracts and summarizes the page content.
3. View your saved summaries in the extension popup.

---

## Tech Stack

- Chrome Extension (Manifest V3)
- React + Vite frontend (in `readinglist-web/`)
- Browser localStorage for persistence
- WebLLM support (optional, experimental)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/pragatirathore06/Reading-list.git
cd Reading-list
