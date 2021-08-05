const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path")
const uniqId = require("uniqid")

currentdir = __dirname
const warehouses = JSON.parse(fs.readFileSync(path.resolve(currentdir, "../data/warehouses.json")))

router.get("/", (req, res) => {
    res.send(warehouses)
    console.log(warehouses)
})

router.put("/:id", (req, res) => {
    let updatedInfo = {
        id: req.params.id,
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        contact: {
            name: req.body.contact.name,
            position: req.body.contact.position,
            phone: req.body.contact.phone,
            email: req.body.contact.email
        }
    }
    let warehouseId = updatedInfo.id
    res.send(updatedInfo)
    let indexOfWarehouse = warehouses.findIndex((warehouse, index) => {
        warehouse.id == warehouseId
        return index
    })
    warehouses[indexOfWarehouse] = updatedInfo
    console.log(warehouses)
    fs.writeFileSync((path.resolve(currentdir, "../data/warehouses.json")), JSON.stringify(warehouses))
})
module.exports = router;
