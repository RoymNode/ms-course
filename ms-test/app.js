const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/v1/routes');
const PORT = process.port || 3000;
const app = express();

(async() => {
    app.use(bodyParser.json());
    app.use("/", routes);
    app.use("*", (req, res) => {
        res.status(404);
    })
})()




// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// app.get('/api', (req, res) => {
//     res.send({message: 'Hello World Json'});
// });

app.listen(PORT, () => {
    console.log(`Example app listeniing as http://localhost:${PORT}`);
});