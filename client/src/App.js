import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Warehouses from "./pages/Warehouses/Warehouses";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/">
              <Warehouses />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
