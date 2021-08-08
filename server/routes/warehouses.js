const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const uniqId = require("uniqid");
const { body, validationResult } = require('express-validator');


currentdir = __dirname;
const warehouses = JSON.parse(
  fs.readFileSync(path.resolve(currentdir, "../data/warehouses.json"))
);

const getWarehouseData = () => {
    const warehouseData = fs.readFileSync("./data/warehouses.json");
    const parsedWarehouseData = JSON.parse(warehouseData);
    return parsedWarehouseData;
  };

router.get("/", (req, res) => {
  res.send(warehouses);
  console.log(warehouses);
});

router.get("/:id", (req, res) => {
  const singleWarehouse = warehouses.find((item) => item.id === req.params.id);
  res.send(singleWarehouse);
});

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
      email: req.body.contact.email,
    },
  };
  let warehouseId = updatedInfo.id;
  res.send(updatedInfo);
  let indexOfWarehouse = warehouses.findIndex((warehouse, index) => {
    warehouse.id == warehouseId;
    return index;
  });
  warehouses[indexOfWarehouse] = updatedInfo;
  console.log(warehouses);
  fs.writeFileSync(
    path.resolve(currentdir, "../data/warehouses.json"),
    JSON.stringify(warehouses)
  );
});

router.delete("/:id", (req, res) => {
  // lets find the array index of that ID on warehouse array
  let itemIndex = warehouses.findIndex(
    (warehouse) => warehouse.id == req.params.id
  );

  // after found lets delete that array item from warehouses array
  warehouses.splice(itemIndex, 1);

  // update warehouses.json with new array without the deleted item
  fs.writeFileSync(
    path.resolve(currentdir, "../data/warehouses.json"),
    JSON.stringify(warehouses)
  );

  // get inventory list
  const inventories = JSON.parse(
    fs.readFileSync(path.resolve(currentdir, "../data/inventories.json"))
  );

  // get inventory items that have warehouseID equals to warehouse id to be deleted
  let inventoryItems = inventories.filter(
    (item) => item.warehouseID == req.params.id
  );

  // go through each returned item, find index and remove it from inventory list
  inventoryItems.forEach((item) => {
    let idx = inventories.indexOf(item);
    if (idx !== -1) {
      // if index is found, remove item from array
      inventories.splice(idx, 1);
    }

  });

  // updates inventory json file without the removed items
  fs.writeFileSync(
    path.resolve(currentdir, "../data/inventories.json"),
    JSON.stringify(inventories)
  );

  // send response
  res.send(`${req.params.id} DELETED`);
});
  

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
