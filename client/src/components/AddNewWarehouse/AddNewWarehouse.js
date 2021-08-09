import React from "react";
import "./addNewWarehouse.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";

const AddNewWarehouse = () => {
  const createWarehouse = (obj) => {
    axios.post("http://localhost:8080/warehouses/", obj);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    const newWarehouse = {
      name: e.target.warehouse.value,
      address: e.target.address.value,
      city: e.target.city.value,
      country: e.target.country.value,
      contact: {
        name: e.target.contactName.value,
        position: e.target.position.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
    };
    createWarehouse(newWarehouse);
  }

  return (
    <article className="nw__container">
      <article className="nw__top">
        <img src={arrow} alt="arrow icon" />
        <h1 className="nw__page-title">Add New Warehouse</h1>
      </article>
      <article className="nw__form-container">
        <form className="nw__form" onSubmit={handleSubmit}>
          {/* begin warehouse details*/}
          <article className="nw__flex-container">
            <article className="nw__warehouse">
              <h2 className="nw__form-title">Warehouse Details</h2>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="name">
                  Warehouse Name
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="warehouse"
                  id="warehouse"
                  // value={warehouse.}
                  placeholder="Warehouse Name"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="address">
                  Street Address
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="address"
                  id="address"
                  // value="address"
                  placeholder="Street Address"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="city">
                  City
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="city"
                  id="city"
                  // value="city"
                  placeholder="City"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="country">
                  Country
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="country"
                  id="country"
                  // value="country"
                  placeholder="Country"
                />
              </article>
            </article>
            {/* begin contact details */}
            <article className="nw__contact">
              <h2 className="nw__form-title">Contact Details</h2>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="name">
                  Contact Name
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="contactName"
                  id="contactName"
                  // value={this.state.contactName}
                  placeholder="Contact Name"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="position">
                  Position
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="position"
                  id="position"
                  // value={this.state.position}
                  placeholder="Position"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="nw__input"
                  type="tel"
                  name="phone"
                  id="phone"
                  // value={this.state.phone}
                  placeholder="Phone Number"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-label" htmlFor="Email">
                  Email
                </label>
                <input
                  className="nw__input"
                  type="email"
                  name="email"
                  id="email"
                  // value={this.state.email}
                  placeholder="Email"
                />
              </article>
            </article>
          </article>
          <article className="nw__btn-container">
            <button className="nw__btn-cancel">Cancel</button>
            <button className="nw__btn-submit" type="submit">
              + Add Warehouse
            </button>
          </article>
        </form>
      </article>
    </article>
  );
};

export default AddNewWarehouse;
