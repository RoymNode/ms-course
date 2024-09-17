const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/v1/routes');
const PORT = process.env.PORT || 3000;
const app = express();

// (async() => {
//     app.use(bodyParser.json());
//     app.use("/", routes());
//     app.use("*", (req, res) => {
//         res.status(404).send('Not Found'); 
//     })
// })()

(async() => {
    app.use(bodyParser.json());

    app.use("/", routes()); // Call routes as a function

    app.use("*", (req, res) => {
        res.status(404).send('Not Found'); // Send response with 404 status
    });
})()


app.listen(PORT, () => {
    console.log(`Example app listeniing as http://localhost:${PORT}`);
});