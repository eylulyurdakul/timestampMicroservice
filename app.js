const express = require('express');
const cors = require('cors');
const port = 1234;

const app = express();

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/first", (req, res) => {
   res.json({greeting: 'Hello API!'});
});

app.listen(port, () => {
   console.log('Server is up and running on port ' + port);
});
