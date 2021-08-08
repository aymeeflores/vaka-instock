import React from "react";
import "../WarehouseDetails/WarehouseDetails.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";
import whitepen from "../../assets/Icons/edit-white.svg";
import eraseicon from "../../assets/Icons/delete_outline-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import sorticon from "../../assets/Icons/sort-24px.svg";

class WarehouseDetails extends React.Component {
  render() {
    return (
      <div className="warehouseDetails">
        <section>
          <div className="warehouseDetails__header">
            <img
              className="warehouseDetails__backarrow"
              src={backarrow}
              alt="back arrow"
            />
            <h1 className="warehouseDetails__maintitle">King West</h1>
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
              <div className="warehouseDetails__details">
                469 King Street West, <br />
                Toronto, CAN
              </div>
            </div>
            <div className="warehouseDetails__contact">
              <h4 className="warehouseDetails__subtitle">contact name</h4>
              <p className="warehouseDetails__details">
                Graeme Lyon <br /> Warehouse Manager
              </p>
            </div>
            <div className="warehouseDetails__contactinfo">
              <h4 className="warehouseDetails__subtitle">
                contact information:
              </h4>
              <p className="warehouseDetails__details">
                +1 (647) 504-0911 <br />
                glyon@instock.com
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
              {" "}
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

          <div className="inventory__leftcontain">
            <h4 className="inventory__subtitle">Inventory item</h4>
            <p className="inventory__details--item">
              Television
              <img
                className="inventory__details--chevron"
                src={chevron}
                alt="chevron icon"
              />
            </p>
            <h4 className="inventory__subtitle">category</h4>
            <p className="inventory__details">Electronics</p>
          </div>
          <div className="inventory__rightcontain">
            <h4 className="inventory__subtitle">Status</h4>
            <p className="inventory__status inventory__status--outofstock">
              in stock
            </p>
            <h4 className="inventory__subtitle">qty</h4>
            <p className="inventory__details">500</p>
          </div>
          <section className="inventory__buttons">
            <button className="inventory__erase">
              <img src={eraseicon} alt="erase button" />
            </button>
            <button className="inventory__edit">
              <img src={editicon} alt="edit icon" />
            </button>
          </section>
        </section>
      </div>
    );
  }
}

export default WarehouseDetails;
