import React from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import "../Inventory/inventory.scss";

const Inventory = () => {
  return (
    <section className="inventory">
      <InventoryList />
    </section>
  );
};

export default Inventory;
