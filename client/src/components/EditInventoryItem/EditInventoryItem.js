import React from "react";
import "./editInventoryItem.scss";
import arrow from "../../assets/Icons/arrow_back-24px.svg"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../util';

class EditInventoryItem extends React.Component {
    // state  
    state = {
        warehouseList: [],
        categories: null,
        stock: null,
        itemName: null,
        itemDescription: null,
        quantity: null
    }
    // List of Warehouses
    warehouses = axios.get(`${API_URL}/warehouses`)
        .then(console.log('yo'))

    // List of categories
    categories = ["Electronic", "Gear", "Apparel"]
    // List of all items in inventory
    inventoryList = this.props.inventoryItems
    // Specific ID of the item we want to edit
    itemId = this.props.match.params.id
    // Details about that item
    itemDetails = this.inventoryList.filter((item) => {
        return item.id == this.itemId
    })[0]
    // on Submit function to edit object
    onSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            warehouseID: this.itemDetails.warehouseID,
            warehouseName: (event.target.warehouseLocations.value),
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.itemCategory.value,
            status: this.itemDetails.status,
            quantity: this.state.quantity
        }
        axios.put(`${API_URL}/inventory/` + this.props.match.params.id, newItem)
            .then(this.props.history.push('/inventory'))
        console.log(newItem)
    }
    // on change function for Name
    changeName = (e) => {
        this.setState({
            itemName: e.value
        })
        console.log(this.state.itemName)
    }
    // on change function for Description
    changeDescription = (e) => {
        this.setState({
            itemDescription: e.value
        })
    }

    // Mounting component to allow for assigning of categories and stock values in state
    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
            .then((response) => {
                (response.data).forEach((warehouse) => {
                    this.setState({
                        warehouseList: [...this.state.warehouseList, warehouse.name]
                    });
                })
            })
            .then(this.setState({
                categories: (this.itemDetails.categories),
                stock: (this.itemDetails.status == "In Stock"),
                itemName: (this.itemDetails.itemName),
                itemDescription: (this.itemDetails.description),
                quantity: (this.itemDetails.quantity)
            }))
    }

    render() {
        console.log(this.state)
        return (
            <div className="edit-inventory">
                <div className="inventory-header">
                    <img src={arrow} />
                    <h1>Edit Inventory Item</h1>
                </div>
                <form className="inventory-form" onSubmit={this.onSubmit}>
                    <div className="item-information">
                        <h2 className="item-information__header">Item Details</h2>
                        {/* Item Name */}
                        <label className="item-information__title">
                            Item Name
                            <input type="text" name="itemName"
                                className="item-information__input item-information__input--regular" value={this.state.itemName} onChange={this.changeName} />
                        </label>
                        {/* Item Description */}
                        <label className="item-information__title" htmlFor="item-description">
                            Description
                            <textarea name="description" className="item-information__input 
                        item-information__input--big" value={this.state.itemDescription} onChange={this.changeDescription} ></textarea>
                        </label>
                        <label className="item-information__title">
                            Category
                            <select className="item-information__input item-information__input--regular" name="itemCategory">
                                {/* THIS IS WHERE ITEM CATEGORY GOES */}
                                {this.categories.map((category) => {
                                    if (category == this.state.categories) {
                                        return (<option value={this.state.categories} selected="selected">{this.state.categories}</option>)
                                    }
                                    else {
                                        return (<option value={category}>{category}</option>)
                                    }
                                })}
                            </select>
                        </label>

                    </div>
                    <div className="item-information">
                        <h2 className="item-information__header">Item Availability</h2>
                        <label className="item-information__title">
                            <span className="status">Status</span>
                            {/* THIS IS WHERE ITEM STATUS GOES */}
                            {(this.state.stock) ? (
                                // This is if its in stock
                                <>
                                    {console.log(this.state.stock)}
                                    < span className="status-options">
                                        <label className="stock-availability stock-availability--greyed">
                                            <input type="radio" name="status" value="in-stock" className="stock-availability__radio-buttons" />
                                            In stock
                                        </label>
                                    </span>
                                    {/* Out of Stock Option */}
                                    <span className="status-options">
                                        <label className="stock-availability stock-availability--greyed">
                                            <input type="radio" name="status" value="out-of-stock"
                                                className="stock-availability__radio-buttons"
                                                disabled={true} />
                                            Out of stock
                                        </label>
                                    </span>
                                </>) :
                                // This is if its out of stock
                                (<>
                                    {console.log(this.state.stock)}
                                    < span className="status-options">
                                        <label className="stock-availability stock-availability--greyed">
                                            <input type="radio" name="status" value="in-stock" className="stock-availability__radio-buttons" disabled={true} />
                                            In stock
                                        </label>
                                    </span>
                                    {/* Out of Stock Option */}
                                    <span className="status-options">
                                        <label className="stock-availability stock-availability--greyed">
                                            <input type="radio" name="status" value="out-of-stock"
                                                className="stock-availability__radio-buttons " aria-checked={true} />
                                            Out of stock
                                        </label>
                                    </span>
                                </>)}
                        </label>



                        <label className="item-information__title">
                            Warehouse
                            {/* THIS IS WHERE ITEM WAREHOUSE GOES  */}
                            <select className="item-information__input item-information__input--regular" name="warehouseLocations">
                                {this.state.warehouseList.map((warehouse) => {
                                    if (warehouse == this.itemDetails.warehouseName) {
                                        return (
                                            <option value={warehouse} selected="selected">{warehouse}</option>
                                        )
                                    }
                                    else {
                                        return (
                                            <option value={warehouse}>{warehouse}</option>
                                        )
                                    }
                                })}
                            </select>
                        </label>

                    </div>
                    <div className="submitting">
                        <button className="submitting__button">Cancel</button>
                        <button className="submitting__button submitting__button--blueBackground">Save</button>
                    </div>
                </form>
            </div >
        )
    }
}

export default EditInventoryItem

