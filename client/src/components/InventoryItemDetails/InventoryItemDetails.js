import React from 'react'
import pen from "../../assets/Icons/edit-white.svg";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import './inventoryItemDetails.scss'
import { Link } from 'react-router-dom';

class InventoryItemDetails extends React.Component {
    state = {
        stock: null
    }
    itemId = this.props.match.params.id
    inventoryList = this.props.inventoryItems
    itemDetails = this.inventoryList.filter((item) => {
        return item.id == this.itemId
    })[0]
    componentDidMount() {
        console.log(this.itemDetails.status)
        this.setState({
            stock: (this.itemDetails.status == "In Stock")
        })
    }
    render() {
        const inStock = this.state.stock
        console.log(this.state.stock)
        return (
            <div className="inventory-item">
                <div className="item-title">
                    <div className="item">
                        <Link className="link-arrow" to="/inventory">
                            <img className="back-arrow" src={arrow} alt="back arrow" />
                        </Link>
                        <h1 className="item__header">{this.itemDetails.itemName}</h1>
                    </div>
                    <Link to={`/inventory/edit/${this.itemId}`}>
                        <div className="buttons">
                            <img
                                className="buttons__edit-button--white"
                                src={pen}
                                alt="edit pen icon"
                            />
                            <h3 className="buttons__edit-text">Edit</h3>
                        </div>
                    </Link>
                </div>
                <div className="item-description">
                    {/* item description */}
                    <div className="item-text-left">
                        <div className="item-info">
                            <h4 className="item-info__title">item description</h4>
                            <p className="item-info__details">{this.itemDetails.description}</p>
                        </div>
                        {/* Category */}
                        <div className="item-info">
                            <h4 className="item-info__title item-info__title--last">category</h4>
                            <p className="item-info__details">{this.itemDetails.category}</p>
                        </div>
                    </div>
                    {/* status */}
                    <div className="item-text-right">
                        <div className="item-stock-info">
                            <div className="item-stock">
                                <h4 className="item-stock__title">status</h4>
                                {inStock ? (
                                    <div className="item-stock__status--green-background">
                                        <p className="item-stock__status--green-text">IN STOCK</p>
                                    </div>) : (
                                    <div className="item-stock__status--red-background">
                                        <p className="item-stock__status--red-text">OUT OF STOCK</p>
                                    </div>
                                )}
                            </div>
                            <div className="item-stock">
                                <h4 className="item-stock__title">quantity</h4>
                                <p className="item-stock__details">{this.itemDetails.quantity}</p>
                            </div>
                        </div>
                        <div className="item-info">
                            <h4 className="item-info__title item-info__title--bottom">warehouse</h4>
                            <p className="item-info__details item-info__details--last">{this.itemDetails.warehouseName}</p>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default InventoryItemDetails
