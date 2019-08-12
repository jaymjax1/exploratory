const path = require('path');
const express = require('express');
const app = express();
const buf = Buffer.from('deesunutsu');

app.use(express.static(path.join(__dirname,'test')))

app.get('/',(req,res) => {
    res.end('You good!')   
})

app.get('/test',(req,res) => {
    res.end(buf.toJSON())   
})

const hostname = '127.0.0.1';
const port = '3001';
  
app.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});