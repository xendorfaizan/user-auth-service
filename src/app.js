const express = require('express');
const app = express();
const port = 3000;


app.use('/', (req, res) => {
    res.send("connected !");
})

app.listen(port, () => {
    console.log("server is up and running at port", port);
    
})