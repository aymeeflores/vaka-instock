import React from "react";
import { API_URL } from "../../util";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Warehouses.scss";
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse";
import AddNewWarehouse from "../../components/AddNewWarehouse/AddNewWarehouse";

class Warehouses extends React.Component {
  state = {
    warehouseList: [],
    show: false,
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };
  onDelete = (e) => {
    this.setState({
      show: false,
    });
  };
  onCancel = (e) => {
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/warehouses`)
      .then((response) => {
        this.setState({
          warehouseList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="warehouses">
        {this.state.warehouseList && (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <WarehouseList warehouseList={this.state.warehouseList} />
              </Route>
              {/* <Route path="/warehouses/edit/:id"
                                render={(routerParams) => {
                                    return (
                                 change the component to whatever your components called
                                        <EditWarehouse
                                        {...routerParams}
                                        warehouse={this.state.inventoryItems}
                                      />
                                );
                                }}>
                            </Route> */}
              {/* <Route path="/warehouses/details/:id"
                                render={(routerParams) => {
                                    return (
                                 change the component to whatever your components called
                                        <WarehouseDetails
                                        {...routerParams}
                                        warehouse={this.state.inventoryItems}
                                      />
                                );
                                }}>
                            </Route> */}
              <Route
                path="/warehouses/add"
                render={(routerParams) => {
                  return (
                    <AddNewWarehouse
                      {...routerParams}
                      warehouse={this.state.inventoryItems}
                    />
                  );
                }}
              ></Route>
              <Route
                path="/warehouses/delete/:id"
                render={(routerParams) => {
                  return (
                    <DeleteWarehouse
                      {...routerParams}
                      warehouse={this.state.inventoryItems}
                    />
                  );
                }}
              ></Route>
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default Warehouses;
