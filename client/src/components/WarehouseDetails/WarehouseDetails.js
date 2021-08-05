import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <section>
          <h1>King West</h1>
          <h4>warehouse address:</h4>
          <address>469 King Street West, Tronto, CAN</address>
          <div>
            <h4>contact name</h4>
            <p>Graeme Lyon</p>
            <p>Warehouse Manager</p>
          </div>
          <div>
            <h4>contact information:</h4>
            <p>glyon@instock.com</p>
          </div>
        </section>
        <section>
          <h4>Inventory item</h4>
          <p>television</p>
          <h4>category</h4>
          <p>Electronics</p>
          <h4>Status</h4>
          <p>in stock</p>
          <h4>qty</h4>
          <p>500</p>
          <section>
            <button>delete</button>
            <button>edit</button>
          </section>
        </section>
      </>
    );
  }
}
