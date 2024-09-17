const express = require('express');
const router = express.Router();

router.route("/list/:id").get(getList);

async function getList(req, res) {
    let idNum = req.params.id;
    const title = "your id is " + idNum
    let status = 200
    //res.status(status).json({data: title}).end();
    res.status(status).send({data: title}).end()
    //res.send({data: title});
}

module.exports = router;