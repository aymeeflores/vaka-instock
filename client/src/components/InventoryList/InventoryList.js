import React from "react";
import { Link } from "react-router-dom";
import "../InventoryList/inventoryList.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import itemIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const InventoryList = ({ inventoryItems, deleteWindow }) => {
  return (
    <>
      {inventoryItems && (
        <article className="inventory__list-container">
          {/* inventory header */}
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
                  type="search"
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
          {/* inventory table header */}
          <article className="inventory__items-container">
            {/* tablet & desktop table header */}
            <article className="inventory__label-container">
              {/* inventory item */}
              <article className="inventory__label-wrapper">
                <p className="inventory__label">Inventory Item</p>
                <img
                  className="inventory__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </article>
              {/* category */}
              <article className="inventory__label-wrapper">
                <p className="inventory__label">Category</p>
                <img
                  className="inventory__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </article>
              {/* status */}
              <article className="inventory__label-wrapper">
                <p className="inventory__label">Status</p>
                <img
                  className="inventory__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </article>
              {/* quantity */}
              <article className="inventory__label-wrapper">
                <p className="inventory__label">QTY</p>
                <img
                  className="inventory__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </article>
              {/* warehouse */}
              <article className="inventory__label-wrapper">
                <p className="inventory__label">Warehouse</p>
                <img
                  className="inventory__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </article>
              {/* actions */}
              <article className="inventory__label-wrapper">
                <p className="inventory__label">Actions</p>
              </article>
            </article>
          </article>
          {/* inventory list */}
          <ul className="inventory__list">
            {console.log(inventoryItems)}
            {inventoryItems
              .filter(
                (invItem) => invItem.warehouseID !== inventoryItems.warehouseID
              )
              .map((data) => {
                return (
                  <li key={data.id} className="inventory__list-item">
                    <article className="inventory__li-content-container">
                      {/* left container */}
                      <article className="inventory__left-container">
                        {/* inventory item */}
                        <article className="inventory__inventory-item-wrapper">
                          <p className="inventory__mobile-lable">
                            Inventory Item
                          </p>
                          <Link to={`/inventory/details/${data.id}`}>
                            <article className="inventory__item-wrapper">
                              <p className="inventory__item">{data.itemName}</p>
                              <img
                                className="inventory__item-icon"
                                src={itemIcon}
                                alt="chevron right icon"
                              />
                            </article>
                          </Link>
                        </article>
                        {/* category */}
                        <article className="inventory__catgetory-wrapper">
                          <p className="inventory__mobile-lable">Category</p>
                          <p className="inventory__info-text">
                            {data.category}
                          </p>
                        </article>
                      </article>
                      {/* right container */}
                      <article className="inventory__right-container">
                        {/* status */}
                        <article className="inventory__status-wrapper">
                          <p className="inventory__mobile-lable">Status</p>
                          <article className="inventory__status-bg">
                            <p className="inventory__status">{data.status}</p>
                          </article>
                        </article>
                        {/* qty */}
                        <article className="inventory__qty-wrapper">
                          <article className="inventory__mobile-label-wrapper">
                            <p className="inventory__mobile-lable">Qty</p>
                            <p className="inventory__info-text">
                              {data.quantity}
                            </p>
                          </article>
                        </article>
                        {/* warehouse */}
                        <article className="inventory__warehouse-wrapper">
                          <article className="inventory__mobile-label-wrapper">
                            <p className="inventory__mobile-lable">Warehouse</p>
                            <p className="inventory__info-text">
                              {data.warehouseName}
                            </p>
                          </article>
                        </article>
                      </article>
                    </article>
                    {/* actions container */}
                    <article className="inventory__actions-container">
                      <Link to={`/inventory/delete/${data.id}`}>
                        <img
                          className="inventory__delete-icon"
                          src={deleteIcon}
                          alt="delete icon"
                          onClick={deleteWindow}
                        />
                      </Link>
                      <Link to={`/inventory/edit/${data.id}`}>
                        <img src={editIcon} alt="edit icon" />
                      </Link>
                    </article>
                  </li>
                );
              })}
          </ul>
        </article>
      )}
    </>
  );
};

export default InventoryList;
