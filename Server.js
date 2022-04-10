const path = require('path')

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();


let connection;

const db_config = {
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b9cbc5db38aa3f',
    password: '4a31dd05',
    database: 'heroku_47afe3083bec50c'
};

app.use(cors());
app.use(express.json());

app.get('/api/instagram', (req, res) => {
    if (!connection) res.send([]);

    connection.query('SELECT * FROM posts', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.use(express.static(path.join(__dirname, './build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(process.env.PORT || 5000, function(){
    console.log(`Express is working on port 5000`)
});

function handleDisconnect() {
    connection = mysql.createConnection(db_config); 
  
    connection.connect(function(err) {              
      if(err) {                                    
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                     
    });                                     
                                            
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
        handleDisconnect();                         
      } else {                                      
        throw err;                                  
      }
    });
  }
handleDisconnect();