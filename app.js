const express = require('express');
const cors = require('cors');
const port = 1234;

const app = express();

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.get("/:date?", (req, res) => {

    let isNum = /^\d+$/.test(req.params.date);
    let producedDate = {
        "unix": null,
        "natural": null
    };
    let timestamp = new Date();
    console.log('time:', timestamp);

    if (typeof(req.params.date) !== 'undefined') {
        if (isNum === true) {
            timestamp = new Date(parseInt(req.params.date));
        }
        else if ((isNum === false)) {
            timestamp = new Date(req.params.date);
        }
    }

    producedDate.unix = timestamp.getTime();
    producedDate.natural = timestamp.toUTCString();
    res.send(producedDate);
});

app.listen(port, () => {
   console.log('Server is up and running on port ' + port);
});
