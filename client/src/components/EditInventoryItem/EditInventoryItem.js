import React from "react";
import "./editInventoryItem.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";

const EditInventoryItem = () => {
  return (
    <div className="edit-inventory">
      <div className="inventory-header">
        <img src={arrow} alt="arrow icon" />
        <h1>Edit Inventory Item</h1>
      </div>
      <form className="inventory-form">
        <div className="item-information">
          <h2 className="item-information__header">Item Details</h2>
          {/* Item Name */}
          <label className="item-information__title">
            Item Name
            <input
              type="text"
              name="item-name"
              className="item-information__input item-information__input--regular"
            />
          </label>
          {/* Item Description */}
          <label className="item-information__title" htmlFor="item-description">
            Description
            <textarea
              className="item-information__input 
                        item-information__input--big"
              placeholder=""
              name="item-description"
            ></textarea>
          </label>
          {/* Item Category */}
          <label className="item-information__title">
            Category
            <select
              className="item-information__input item-information__input--regular"
              name="item-category"
            >
              <option value="electronics">Electronics</option>
              <option value="gear">Gear</option>
              <option value="apparel">Apparel</option>
            </select>
          </label>
        </div>
        <div className="item-information">
          <h2 className="item-information__header">Item Availability</h2>
          {/* Item Status */}
          <label className="item-information__title">
            <span className="status">Status</span>
            {/* In Stock Option */}
            <span className="status-options">
              <label className="stock-availability">
                <input
                  type="radio"
                  name="status"
                  value="in-stock"
                  className="stock-availability__radio-buttons"
                />
                In stock
              </label>
            </span>
            {/* Out of Stock Option */}
            <span className="status-options">
              <label className="stock-availability">
                <input
                  type="radio"
                  name="status"
                  value="out-of-stock"
                  className="stock-availability__radio-buttons"
                />
                Out of stock
              </label>
            </span>
          </label>
          {/* Item Warehouse */}
          <label className="item-information__title">
            Warehouse
            <select
              className="item-information__input item-information__input--regular"
              name="warehouse-locations"
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
          <button className="submitting__button">Cancel</button>
          <button className="submitting__button submitting__button--blueBackground">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventoryItem;
