import React, { Component } from "react";
import "./deleteInventoryItem.scss";
import closeImage from "../../assets/Icons/close-24px.svg";
import { API_URL } from "../../util";
import axios from "axios";
import { Link } from "react-router-dom";

export default class DeleteInventory extends Component {
  onDelete = () => {
    axios
      .delete(`${API_URL}/inventory/delete/${this.props.match.params.id}`)
      .then(console.log("You are done"));
  };

  itemId = this.props.match.params.id;
  inventoryList = this.props.inventoryItems;
  itemDetails = this.inventoryList.filter((item) => {
    return item.id == this.itemId;
  })[0];

  render() {
    console.log(this.itemDetails);
    console.log(this.props.match.params.id);
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="delete-modal">
        <div className="modal-wrapper">
          <div className="modal-content">
            <div className="modal-exit">
              <Link className="modal-buttons__link" to="/inventory">
                <img src={closeImage} />
              </Link>
            </div>
            <div className="modal-header">
              <h1 className="modal-header__text">
                Delete
                {` ${this.itemDetails.itemName}`} inventory item?
              </h1>
            </div>
            <div className="modal-message">
              <p className="modal-message__text">
                {`Please confirm that you’d like to delete  ${this.itemDetails.itemName} from the list of warehouses. You won’t be able to undo this action.`}
              </p>
            </div>
          </div>
          <div className="modal-buttons">
            <Link className="modal-buttons__link" to="/inventory">
              <button className="modal-buttons__cancel">Cancel</button>
            </Link>
            <Link className="modal-buttons__link" to="/inventory">
              <button className="modal-buttons__delete" onClick={this.onDelete}>
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
