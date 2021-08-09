import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../util";
import "./WarehouseDetails.scss";

import backarrow from "../../assets/Icons/arrow_back-24px.svg";
import whitepen from "../../assets/Icons/edit-white.svg";
import eraseicon from "../../assets/Icons/delete_outline-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import sorticon from "../../assets/Icons/sort-24px.svg";

class WarehouseDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null, items: [] };
  }

  fetchWarehouseItems = (id) => {
    axios
      .get(`${API_URL}/inventory/warehouse-inventory/${id}`)
      .then((response) => {
        this.setState({
          items: response.data,
        });
      });
  };

  fetchWareHouse = (id) => {
    console.log("attempting to fetch " + id);
    axios
      .get(`${API_URL}/warehouses/${id}`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
        this.fetchWarehouseItems(id);
      })
      .catch((error) => {});
  };

  componentDidMount() {
    this.fetchWareHouse(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id === this.props.match.params.id) return;
    this.fetchWareHouse(this.props.match.params.id);
  }

  render() {
    const data = this.state.data;
    if (data === null) return <div></div>;
    return (
      <div className="warehouseDetails">
        <section>
          <div className="warehouseDetails__header">
            <Link to="/">
              <img
                className="warehouseDetails__backarrow"
                src={backarrow}
                alt="back arrow"
              />
            </Link>
            <h1 className="warehouseDetails__maintitle">{data.name}</h1>
            <div className="warehouseDetails__editframe">
              <img
                className="warehouseDetails__editframe--icon"
                src={whitepen}
                alt="edit icon"
              />
              <p className="warehouseDetails__editframe--label">Edit</p>
            </div>
          </div>

          <div className="warehouseDetails__wrapper">
            <div className="warehouseDetails__address">
              <h4 className="warehouseDetails__subtitle">warehouse address:</h4>
              <div className="warehouseDetails__details">{data.address}</div>
            </div>
            <div className="warehouseDetails__contact">
              <h4 className="warehouseDetails__subtitle">contact name</h4>
              <p className="warehouseDetails__details">
                {data.contact.name} <br /> {data.contact.position}
              </p>
            </div>
            <div className="warehouseDetails__contactinfo">
              <h4 className="warehouseDetails__subtitle">
                contact information:
              </h4>
              <p className="warehouseDetails__details">
                {data.contact.phone}
                <br />
                {data.contact.email}
              </p>
            </div>
          </div>
        </section>
        <section className="inventory">
          <div className="inventory__hiddenlabels">
            <h4 className="inventory__hiddenlabels--subtitle">
              Inventory Item
              <img
                className="inventory__sorticon"
                src={sorticon}
                alt="sort icon"
              />
            </h4>
            <h4 className="inventory__hiddenlabels--subtitle">
              category
              <img
                className="inventory__sorticon"
                src={sorticon}
                alt="sort icon"
              />
            </h4>
            <h4 className="inventory__hiddenlabels--subtitle">
              Status
              <img
                className="inventory__sorticon"
                src={sorticon}
                alt="sort icon"
              />
            </h4>
            <h4 className="inventory__hiddenlabels--subtitle">
              qty
              <img
                className="inventory__sorticon"
                src={sorticon}
                alt="sort icon"
              />
            </h4>
            <h4 className="inventory__hiddenlabels--subtitle">actions</h4>
          </div>
          {this.state.items.length > 0 &&
            this.state.items.map((inventoryItem, idx) => {
              return (
                <>
                  <div className="inventory__leftcontain" key={idx}>
                    <h4 className="inventory__subtitle">Inventory item</h4>
                    <p className="inventory__details--item">
                      {inventoryItem.itemName}
                      <img
                        className="inventory__details--chevron"
                        src={chevron}
                        alt="chevron icon"
                      />
                    </p>
                    <h4 className="inventory__subtitle">category</h4>
                    <p className="inventory__details">
                      {inventoryItem.category}
                    </p>
                  </div>
                  <div className="inventory__rightcontain">
                    <h4 className="inventory__subtitle">Status</h4>
                    <p
                      className={
                        "inventory__status " +
                        (inventoryItem.status === "Out of Stock"
                          ? "inventory__status--outofstock"
                          : "")
                      }
                    >
                      {inventoryItem.status}
                    </p>
                    <h4 className="inventory__subtitle">qty</h4>
                    <p className="inventory__details">
                      {inventoryItem.quantity}
                    </p>
                  </div>
                  <section className="inventory__buttons">
                    <button className="inventory__erase">
                      <img src={eraseicon} alt="erase button" />
                    </button>
                    <button className="inventory__edit">
                      <img src={editicon} alt="edit icon" />
                    </button>
                  </section>
                </>
              );
            })}

          {this.state.items.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "25px",
                width: "100%",
              }}
            >
              THERE IS 0 ITEMS IN THIS WAREHOUSE
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default WarehouseDetails;
