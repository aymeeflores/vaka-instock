const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { PORT } = process.env;
const warehousesRoute = require("./routes/warehouses");
const inventoryRoute = require("./routes/inventory");

app.use(cors());
app.use(express.json());

app.use("/warehouses", warehousesRoute);
app.use("/inventory", inventoryRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
