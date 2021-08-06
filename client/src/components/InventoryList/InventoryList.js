import React from "react";
import searchIcon from "../../assets/Icons/search-24px.svg";
import "../InventoryList/inventoryList.scss";
import { Link } from "react-router-dom";

const InventoryList = () => {
  return (
    <article className="inventory__list-container">
      <article className="inventory__top">
        <h1 className="inventory__page-title">Inventory</h1>
        <article className="inventory__search-btn-container">
          <article className="inventory__search-wrapper">
            <img
              className="inventory__search-icon"
              src={searchIcon}
              alt="magnifying glass icon"
            />
            <input
              className="inventory__search"
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
            />
          </article>
          <Link className="inventory__btn-link" to="">
            <article className="inventory__btn">
              <p className="inventory__btn-text">+ Add New Item</p>
            </article>
          </Link>
        </article>
      </article>
    </article>
  );
};

export default InventoryList;
