import { Server } from "socket.io";
import si from "systeminformation";

export const initStatsSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("New monitor client connected:", socket.id);

    const interval = setInterval(async () => {
      const cpuLoad = await si.currentLoad();
      socket.emit("cpu-stats", {
        load: cpuLoad.currentLoad.toFixed(1),
        timestamp: Date.now(),
      });
    }, 1000);

    socket.on("disconnect", () => {
      clearInterval(interval);
      console.log("Client disconnected");
    });
  });
};
