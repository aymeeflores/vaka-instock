import React from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";
import "../InventoryList/inventoryList.scss";

const InventoryList = () => {
  return (
    <article className="inventory__list-container">
      <article className="inventory__top">
        <h1 className="inventory__page-title">Inventory</h1>
        <article className="inventory__search-btn-container">
          <article className="inventory__search-wrapper">
            <input
              type="text"
              name="search"
              id="seatch"
              placeholder="Search..."
            />
            <img src={searchIcon} alt="magnifying glass icon" />
          </article>
        </article>
      </article>
    </article>
  );
};

export default InventoryList;
