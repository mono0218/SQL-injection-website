const mysql = require('mysql');

export const db = mysql.createConnection({
  config: {
    host: "mysql211.phy.lolipop.lan",
    database: "LAA1526120-ctf",
    user: "LAA1526120",
    password: "CTFCTFCTF",
    ssl: true,
  }
})