import React from "react";
import { Link } from "react-router-dom";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pen from "../../assets/Icons/edit-24px.svg";
import search from "../../assets/Icons/search-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import "./WarehouseList.scss";

const WarehouseList = ({ warehouseList }) => {
  return (
    <main className="w-list">
      <div className="w-list__top">
        <h1 className="w-list__heading">Warehouses</h1>
        <div className="w-list__search-div">
          <input
            className="w-list__search"
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
          />
          <img src={search} className="w-list__search-img" alt="" />
          <Link to="">
            <input
              className="w-list__add"
              type="submit"
              id="add-warehouse"
              name="add-warehouse"
              value="+ Add New Warehouse"
            />
          </Link>
        </div>
      </div>
      <div className="w-list__subheading-bar">
        <div className="w-list__subheading--flex">
          <h4 className="w-list__subheading-2">WAREHOUSE</h4>
          <img className="w-list__sort" src={sort} alt="" />
        </div>
        <div className="w-list__subheading--flex">
          <h4 className="w-list__subheading-2">ADDRESS</h4>
          <img className="w-list__sort" src={sort} alt="" />
        </div>
        <div className="w-list__subheading--flex">
          <h4 className="w-list__subheading-2 w-list__subheading-2--spacing">
            CONTACT NAME
          </h4>
          <img className="w-list__sort" src={sort} alt="" />
        </div>
        <div className="w-list__subheading--flex">
          <h4 className="w-list__subheading-2">CONTACT INFORMATION</h4>
          <img className="w-list__sort" src={sort} alt="" />
        </div>
        <h4 className="w-list__subheading-2">ACTIONS</h4>
      </div>
      <div>
        {warehouseList.map((data, idx) => {
          return (
            <div className="w-list__container" key={idx}>
              <div className="w-list__left">
                <h4 className="w-list__subheading">WAREHOUSE</h4>
                {/* This needs to be linked to whatever the individual warehouse details path will be */}
                <div className="w-list__name-box">
                  <Link
                    to={"/warehouses/details/" + data.id}
                    className="w-list__name"
                  >
                    <p>{data.name}</p>
                  </Link>
                  <img className="w-list__chev" src={chevron} alt="" />
                </div>
                <h4 className="w-list__subheading w-list__subheading--lower">
                  ADDRESS
                </h4>
                <p className="w-list__desc">
                  {data.address}, {data.city}, {data.country}
                </p>
              </div>
              <div className="w-list__right">
                <h4 className="w-list__subheading">CONTACT NAME</h4>
                <p className="w-list__contact-name">{data.contact.name}</p>
                <h4 className="w-list__subheading w-list__subheading--lower">
                  CONTACT INFORMATION
                </h4>
                <div className="w-list__contact-info">
                  <p>{data.contact.phone}</p>
                  <p>{data.contact.email}</p>
                </div>
              </div>
              <div className="w-list__icons">
                <Link to="">
                  <img src={trash} alt="" />
                </Link>
                <Link to="">
                  <img className="w-list__pen" src={pen} alt="" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default WarehouseList;
