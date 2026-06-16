import { Server } from "socket.io";
import si from "systeminformation";

/**
 * @description Initializes WebSocket events for real-time system monitoring.
 * Streams live hardware statistics (e.g., CPU load) to connected clients.
 * @param {Server} io - The Socket.IO server instance
 */
export const initStatsSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("New monitor client connected:", socket.id);

    // Set up a continuous polling interval to fetch and emit live CPU data every second
    const interval = setInterval(async () => {
      const cpuLoad = await si.currentLoad();
      socket.emit("cpu-stats", {
        load: cpuLoad.currentLoad.toFixed(1),
        timestamp: Date.now(),
      });
    }, 1000);

    // Clean up the interval on client disconnect to prevent memory leaks
    socket.on("disconnect", () => {
      clearInterval(interval);
      console.log("Client disconnected");
    });
  });
};
