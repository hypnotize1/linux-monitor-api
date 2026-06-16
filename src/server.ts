import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./middlewares/errorHandler";
import osRouter from "./routes/os-routes";
import memoryRouter from "./routes/memory-routes";
import cpuRouter from "./routes/cpu-routes";
import diskRouter from "./routes/disk-routes";
import processRouter from "./routes/process-routes";
import http from "http";
import { Server } from "socket.io";
import { initStatsSocket } from "./sockets/stats-socket";

/**
 * @description Main application configuration and server initialization.
 * Integrates Express for RESTful APIs and Socket.IO for real-time WebSocket communication.
 */
const app: Application = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Initialize WebSocket connections and events
initStatsSocket(io);

const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register REST API routes for system monitoring
app.use("/api/v1/sys/os", osRouter);
app.use("/api/v1/sys/memory", memoryRouter);
app.use("/api/v1/sys/cpu", cpuRouter);
app.use("/api/v1/sys/disk", diskRouter);
app.use("/api/v1/sys/processes", processRouter);

// Global error handling middleware
app.use(globalErrorHandler);

// Start the integrated HTTP and WebSocket server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
