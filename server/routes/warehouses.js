const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path")
const uniqId = require("uniqid")

currentdir = __dirname
const warehouse = JSON.parse(fs.readFileSync(path.resolve(currentdir, "../data/warehouses.json")))

router.get("/", (req, res) => {
    res.send(warehouse)
    console.log(warehouse)
})

module.exports = router;
