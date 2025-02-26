import serverSettings from "./config.js";

console.log(`Server port is: ${serverSettings.config.port}`);

serverSettings.showConfig();
