import React, { Component } from "react";
import "./deleteInventoryItem.scss";

// const DeleteInventory = () => {
//   return (
//     <div>
//       <h1>working??</h1>
//     </div>
//   );
// };

// export default DeleteInventory;

export default class DeleteInventory extends Component {
  // state = {
  //   show: false,
  // };
  // showModal = () => {
  //   this.setState({
  //     show: true,
  //   });
  // };
  render() {
    // if (!this.props.show) {
    //   return null;
    // }
    return (
      <div className="delete-modal">
        <div className="modal-header">
          <h1 className="modal-header__text">Delete inventory item?</h1>
        </div>
        <div className="modal-message">
          <p className="modal-message__text">
            Please confirm that you’d like to delete ____ from the list of
            warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="modal-buttons">
          <button className="modal-buttons__button">Cancel</button>
          <button className="modal-buttons__button">Delete</button>
        </div>
      </div>
    );
  }
}
