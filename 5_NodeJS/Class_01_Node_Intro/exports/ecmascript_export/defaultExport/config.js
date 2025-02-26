const config = {
  port: 3000,
  evironment: "development",
};

function showConfig() {
  console.log(
    `Server is running on port ${config.port} in ${config.evironment}`
  );
}

export default {
  config,
  showConfig,
};
