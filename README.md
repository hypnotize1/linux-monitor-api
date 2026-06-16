# 🖥️ System Monitor API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

> A robust, real-time backend service built with Node.js and TypeScript for monitoring operating system hardware resources and processes.

This project implements a hybrid architecture, combining **RESTful APIs** for fetching static system data and **WebSocket (Socket.IO)** for streaming real-time hardware load metrics.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Architecture](#-architecture-highlights)

---

## ✨ Features

- **Real-time CPU Monitoring:** Live streaming of CPU load using WebSockets.
- **Hardware Metrics:** Endpoints for analyzing Memory (RAM/Swap), Disk partitions, and OS details.
- **Process Management:** Identifies and returns the top CPU-consuming processes in real-time.
- **Clean Architecture:** Strict separation of concerns using Controllers, Services, and Routes.
- **Enterprise Standards:** Comprehensive JSDoc commenting, global error handling middleware, and custom `AppError` instances.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Real-time Communication:** Socket.IO
- **System Integration:** `systeminformation` package

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. Linux environments are highly recommended for comprehensive system stat visibility.

### Installation & Setup

1. **Clone the repository:**
   `git clone https://github.com/your-username/your-repo-name.git`
   `cd your-repo-name`

2. **Install dependencies:**
   `npm install`

3. **Start the development server:**
   `npm run dev`
   \*The server will start on http://localhost:3000\*

---

## 📡 API Reference

### 🌐 REST Endpoints

Base URL: `http://localhost:3000/api/v1/sys`

| Method | Endpoint      | Description                                         |
| :----- | :------------ | :-------------------------------------------------- |
| `GET`  | `/os`         | Retrieve basic OS identity and kernel info.         |
| `GET`  | `/cpu/static` | Retrieve static CPU hardware specs.                 |
| `GET`  | `/cpu/load`   | Retrieve current CPU load (overall & per-core).     |
| `GET`  | `/memory`     | Retrieve RAM and Swap status.                       |
| `GET`  | `/disk`       | Retrieve disk partition capacities and filesystems. |
| `GET`  | `/processes`  | Retrieve the top 10 CPU-intensive processes.        |

### ⚡ WebSocket Events

Establish a WebSocket connection to stream live data.

- **Connection URL:** `ws://localhost:3000`
- **Event to Listen:** `cpu-stats`
  - _Description:_ Emits real-time CPU load percentage and timestamp exactly every 1 second.

---

## 🏗️ Architecture Highlights

The codebase is designed with scalability and maintainability in mind:

- **Single Source of Truth:** TypeScript handles strict typing, while JSDoc focuses purely on business logic descriptions.
- **Graceful Degradation:** Automatic cleanup of interval events upon WebSocket client disconnection to prevent memory leaks.
- **Centralized Error Handling:** All operational errors are passed through a global Express middleware ensuring uniform JSON error responses.

---

## 📄 License

This project is open-source and available under the MIT License.
