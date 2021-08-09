const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const { body, validationResult } = require('express-validator');

// function to get inventory data from JSON file
const getInventoryData = () => {
  const inventoryData = fs.readFileSync("./data/inventories.json");
  const parsedInventoryData = JSON.parse(inventoryData);
  return parsedInventoryData;
};

// get list of all inventory items

router.get("/", (req, res) => {
  const inventories = getInventoryData();
  res.json(inventories);
});

// get single inventory item
router.get("/:id", (req, res) => {
  const inventories = getInventoryData();
  const singleItem = inventories.find((item) => item.id === req.params.id);
  res.send(singleItem);
});

// get inventory for a given warehouse
router.get('/warehouse-inventory/:warehouseID', (req, res) => {
  const inventories = getInventoryData();
  const warehouseInventory = inventories.filter((item) => item.warehouseID === req.params.warehouseID)
  res.send(warehouseInventory);
});

// post new inventory item
router.post("/add/:id", (req, res) => {
  const inventories = getInventoryData();
  const newItem = {
    id: uniqid(),
    warehouseID: uniqid(),
    warehouseName: req.body.warehouseName,
    itemName: req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity: req.body.quantity,
  };
  inventories.push(newItem);
  fs.writeFileSync("./data/inventories.json", JSON.stringify(inventories));
  res.json(inventories);
});

//edit an item
router.put('/:id',

  body('warehouseName').exists({checkFalsy: true}),
  body('itemName').exists({checkFalsy: true}),
  body('description').exists({checkFalsy: true}),
  body('category').exists({checkFalsy: true}),
  body('status').exists({checkFalsy: true}),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
  
    let updatedItem = {
      id: req.params.id,
      warehouseID: req.body.warehouseID,
      warehouseName: req.body.warehouseName,
      itemName: req.body.itemName,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      quantity: req.body.quantity,
    };

    let inventories = getInventoryData();
    let itemId = updatedItem.id
    res.send(updatedItem)
    let indexOfItem = inventories.findIndex((inventory, index) => {
        inventory.id == itemId
        return index
    })
    inventories[indexOfItem - 1] = updatedItem
    fs.writeFileSync("./data/inventories.json", JSON.stringify(inventories));

  });

//delete an item
router.delete("/:id", (req, res) => {
  const inventories = getInventoryData();
  let itemIndex = inventories.findIndex(
    (inventory) => inventory.id == req.params.id
  );
  inventories.splice(itemIndex, 1);
  fs.writeFileSync("./data/inventories.json", JSON.stringify(inventories));
  res.send(`${req.params.id} DELETED`);
  });

module.exports = router;
