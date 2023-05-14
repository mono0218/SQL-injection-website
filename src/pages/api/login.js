import { db } from './db';
const mysql = require('mysql');

export default async function handler(req, res) {
    if (req.method === 'POST') {

        db.connect((err) => {
            if (err) {
              console.log('error connecting: ' + err.stack);
              return;
            }
            console.log('success');
          });

        const result = await db.query(`SELECT * FROM users WHERE username = ${req.body.name} AND password = ${req.body.pass}`)

        console.log(result._results[0])

        if (result.error) {
            res.status(500).json({ success: false });
            return;
        }
    
        // レスポンスの送信
        if (result._results > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }

      } else {
        res.status(404).json({ message: 'Not found' });
      }
  }