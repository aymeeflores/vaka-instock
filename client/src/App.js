import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../components/Header/Header';


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
