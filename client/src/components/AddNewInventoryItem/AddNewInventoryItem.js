import React from "react";
import "./AddNewInventoryItem.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../../util";
 
const AddNewInventoryItem = () => {
  const warehouses = axios.get(`${API_URL}/warehouses`);
 
  const createItem = (obj) => {
    axios.post("http://localhost:8080/inventory/", obj);
  };
 
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
 
    const newInvItem = {
      warehouseName: e.target.warehouseLocations.value,
      itemName: e.target.itemName.value,
      description: e.target.description.value,
      category: e.target.itemCategory.value,
      status: e.target.status.value,
      quantity: e.target.quantity.value,
    };
    createItem(newInvItem);
  }
  return (
    <div className="edit-inventory">
      <div className="inventory-header">
        <Link to="/inventory" className="back-tag">
          <img src={arrow} alt="arrow" className="arrow" />
        </Link>
        <h1 className="inventory-header__title">Add New Inventory Item</h1>
      </div>
      <form className="inventory-form">
        <div className="item-information">
          <h2 className="item-information__header">Item Details</h2>
          {/* Item Name */}
          <label className="item-information__title">
            Item Name
            <input
              type="text"
              name="itemName"
              className="item-information__input item-information__input--regular"
            />
          </label>
          {/* Item Description */}
          <label className="item-information__title" htmlFor="item-description">
            Description
            <textarea
              name="description"
              className="item-information__input 
                      item-information__input--big"
            ></textarea>
          </label>
          <label className="item-information__title">
            Category
            <select
              className="item-information__input item-information__input--regular"
              name="itemCategory"
            >
              <option selected="selected">Electonics</option>
              <option>Gear</option>
              <option>Apparel</option>
            </select>
          </label>
        </div>
        <div className="item-information">
          <h2 className="item-information__header">Item Availability</h2>
          <label className="item-information__title">
            <span className="status">Status</span>
            {/* THIS IS WHERE ITEM STATUS GOES */}
            <label className="stock-availability">
              <input
                type="radio"
                name="status"
                value="in-stock"
                className="stock-availability__radio-buttons"
                checked
              />
              In stock
            </label>
            <span className="status-options">
              <label className="stock-availability stock-availability--greyed">
                <input
                  type="radio"
                  name="status"
                  className="stock-availability__radio-buttons"
                />
                Out of stock
              </label>
            </span>
            <div className="quantity">
              <label className="number-of-item">
                Quantity
                <input
                  type="text"
                  name="itemName"
                  className="number-of-item__input"
                />
              </label>
            </div>
          </label>
          <label className="item-information__title">
            Warehouse
            {/* THIS IS WHERE ITEM WAREHOUSE GOES  */}
            <select
              className="item-information__input item-information__input--regular"
              name="warehouseLocations"
            >
              <option value="manhatten">Manhattan</option>
              <option value="king-west">King West</option>
              <option value="granville">Granville</option>
              <option value="san-fran">San Francisco</option>
              <option value="santa-monica">Santa Monica</option>
              <option value="seattle">Seattle</option>
              <option value="montreal">Montreal</option>
            </select>
          </label>
        </div>
        <div className="submitting">
          <Link to="/inventory" className="buttonLinkTag">
            <button className="submitting__button button linkChild-button">
              Cancel
            </button>
          </Link>
          <button className="button submitting__button--blueBackground">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
};
 
export default AddNewInventoryItem;