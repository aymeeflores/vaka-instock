const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

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

// post new inventory item

module.exports = router;
