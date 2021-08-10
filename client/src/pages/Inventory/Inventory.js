import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import "../Inventory/inventory.scss";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import AddNewInventoryItem from "../../components/AddNewInventoryItem/AddNewInventoryItem";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
class Inventory extends Component {
  state = {
    inventoryItems: [],
    // itemId: null,
    show: false,
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventory")
      .then((res) => {
        this.setState({ inventoryItems: res.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <section className="inventory">
        {this.state.inventoryItems && (
          <BrowserRouter>
            <Switch>
              <Route exact path="/inventory">
                <InventoryList inventoryItems={this.state.inventoryItems} />
              </Route>
              <Route
                path="/inventory/edit/:id"
                render={(routerParams) => {
                  return (
                    <EditInventoryItem
                      {...routerParams}
                      inventoryItems={this.state.inventoryItems}
                    />
                  );
                }}
              ></Route>
              <Route
                path="/inventory/details/:id"
                render={(routerParams) => {
                  return (
                    <InventoryItemDetails
                      {...routerParams}
                      inventoryItems={this.state.inventoryItems}
                    />
                  );
                }}
              ></Route>
              <Route
                path="/inventory/add"
                render={(routerParams) => {
                  return (
                    <AddNewInventoryItem
                      {...routerParams}
                      inventoryItems={this.state.inventoryItems}
                    />
                  );
                }}
              ></Route>
              <Route
                path="/inventory/delete/:id"
                render={(routerParams) => {
                  return (
                    <>
                      <InventoryList
                        inventoryItems={this.state.inventoryItems}
                        deleteWindow={this.showModal}
                      />
                      <DeleteInventory
                        {...routerParams}
                        inventoryItems={this.state.inventoryItems}
                        show={this.state.show}
                      />
                    </>
                  );
                }}
              ></Route>
            </Switch>
          </BrowserRouter>
        )}
      </section>
    );
  }
}
export default Inventory;
