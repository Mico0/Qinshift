import colorText from "./chalk.js";

colorText.printGreen("Milan");

function simulateServerOperations() {
  const isServerRunning = true;
  const isDatabaseConnected = false;
  const isCacheLow = true;

  if (isServerRunning) {
    colorText.printGreen("Success server is running on port 3000");
  } else {
    colorText.printRed("Server init failed");
  }

  if (!isDatabaseConnected) {
    colorText.printRed("Unable to connect to the database");
  }

  if (isCacheLow) {
    colorText.printYellow("Warning, cache memory is low");
  }
}

simulateServerOperations();
