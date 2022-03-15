module.exports = {
  HOST: "",
  // PORT: "1434",
  USER: "",
  PASSWORD: "",
  DB: "NODE_TEST",
  dialect: "mssql",
  options: {
    trustedConnection: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
