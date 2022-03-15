module.exports = {
  HOST: "204.48.16.120",
  // PORT: "1434",
  USER: "SA",
  PASSWORD: "Finflock123!",
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
