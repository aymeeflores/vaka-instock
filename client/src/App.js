import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer";
import Inventory from "./pages/Inventory/Inventory";
// import WarehouseDetails from "../src/components/WarehouseDetails/WarehouseDetails";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/warehouses" component={Warehouses} />
            <Route path="/inventory" component={Inventory} />
            <Redirect from="/" to="/warehouses" exact></Redirect>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
