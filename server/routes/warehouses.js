const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uniqId = require("uniqid");
const { body, validationResult } = require('express-validator');

currentdir = __dirname
const warehouses = JSON.parse(fs.readFileSync(path.resolve(currentdir, "../data/warehouses.json")))

const getWarehouseData = () => {
    const warehouseData = fs.readFileSync("./data/warehouses.json");
    const parsedWarehouseData = JSON.parse(warehouseData);
    return parsedWarehouseData;
  };

router.get("/", (req, res) => {
    res.send(warehouses)
    console.log(warehouses)
})

router.get('/:id', (req, res) => {
    const singleWarehouse = warehouses.find((item) => item.id === req.params.id);
    res.send(singleWarehouse)
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
    warehouses[indexOfWarehouse - 1] = updatedInfo
    console.log(warehouses)
    fs.writeFileSync((path.resolve(currentdir, "../data/warehouses.json")), JSON.stringify(warehouses))
})

router.post("/", 
    
    body('name').exists({checkFalsy: true}),
    body('address').exists({checkFalsy: true}),
    body('city').exists({checkFalsy: true}),
    body('country').exists({checkFalsy: true}),
    body('contact.name').exists({checkFalsy: true}),
    body('contact.position').exists({checkFalsy: true}),
    body('contact.email').isEmail(), 
    body('contact.phone').isMobilePhone(), 


    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const warehouses = getWarehouseData();
    let newWarehouse = {
        id: uniqId(),
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
    warehouses.push(newWarehouse);
    fs.writeFileSync("./data/warehouses.json", JSON.stringify(warehouses));
    res.send(warehouses);
})

module.exports = router;
