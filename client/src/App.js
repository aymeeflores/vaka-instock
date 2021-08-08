import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouses from "./pages/Warehouses/Warehouses";
import Footer from "./components/Footer/Footer";
import Inventory from "./pages/Inventory/Inventory";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Warehouses />
            </Route>
            <Route exact path="/inventory">
              <Inventory />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
