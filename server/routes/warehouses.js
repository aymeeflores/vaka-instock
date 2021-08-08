const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
// const uniqId = require("uniqid");
// const { route } = require("./inventory");

currentdir = __dirname;
const warehouses = JSON.parse(
  fs.readFileSync(path.resolve(currentdir, "../data/warehouses.json"))
);

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

module.exports = router;
