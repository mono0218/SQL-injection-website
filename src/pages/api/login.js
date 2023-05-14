const sql = require('mssql');

const config = {
    user: process.env.DB_USER, // better stored in an app setting such as process.env.DB_USER
    password: process.env.DB_PASS, // better stored in an app setting such as process.env.DB_PASSWORD
    server: process.env.DB_HOST, // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: process.env.DB_DATABASE, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const poolConnection = await sql.connect(config);
        const result = await poolConnection.request().query(`SELECT * FROM users WHERE username = '${req.body.name}'  AND password ='${req.body.pass}';`)
        if (result.rowsAffected > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false ,error: false});
        }

      } catch (error) {
        if(error.code ==='EREQUEST'){
          res.json({ success: false ,error: false});
        }else{
          res.json({ success: false ,error: true});
        }
      }

      } else {
        res.status(404).json({ message: 'Not found' });
      }
  }