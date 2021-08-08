import React, { Component } from "react";
import "./addNewWarehouse.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
class AddNewWarehouse extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phone: "",
    email: "",
  };

  // add warehouse
  // createNewWarehouse = (obj) => {
  //   axios.post("http://localhost:8080/", obj);
  // };

  // handle user inputs function
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  // handle submit function
  handleSubmit(e) {
    e.preventDefault();
    const newWarehouse = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.title.city,
      country: e.target.country.value,
      contactName: e.target.contactName.value,
      position: e.target.position.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };
    // createNewWarehouse(newWarehouse);
  }

  render() {
    console.log("this is inside render");
    return (
      <article className="nw__container">
        <article className="nw__top">
          <img src={arrow} alt="" />
          <h1 className="nw__page-title">Add New Warehouse</h1>
        </article>
        <article className="nw__form-container">
          <form className="nw__form" onSubmit={this.handleSubmit}>
            {/* begin warehouse details*/}
            <article className="nw__warehouse">
              <h2 className="nw__form-title">Warehouse Details</h2>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="name">
                  Warehouse Name
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="warehouse"
                  id="warehouse"
                  value={this.state.name}
                  placeholder="Warehouse Name"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="address">
                  Street Address
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="address"
                  id="address"
                  value={this.state.address}
                  placeholder="Street Address"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="city">
                  City
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.city}
                  placeholder="City"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="country">
                  Country
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="country"
                  id="country"
                  value={this.state.country}
                  placeholder="Country"
                />
              </article>
            </article>
            {/* begin contact details */}
            <article className="nw__contact">
              <h2 className="nw__form-title">Contact Details</h2>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="name">
                  Contact Name
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="contactName"
                  id="contactName"
                  value={this.state.contactName}
                  placeholder="Contact Name"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="position">
                  Position
                </label>
                <input
                  className="nw__input"
                  type="text"
                  name="position"
                  id="position"
                  value={this.state.position}
                  placeholder="Position"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="nw__input"
                  type="tel"
                  name="phone"
                  id="phone"
                  value={this.state.phone}
                  placeholder="Phone Number"
                />
              </article>
              <article className="nw__input-container">
                <label className="nw__input-lable" htmlFor="Email">
                  Email
                </label>
                <input
                  className="nw__input"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  placeholder="Email"
                />
              </article>
            </article>
            <article className="nw__btn-container">
              <button>Cancel</button>
              <button>+ Add Warehouse</button>
            </article>
          </form>
        </article>
      </article>
    );
  }
}

export default AddNewWarehouse;
