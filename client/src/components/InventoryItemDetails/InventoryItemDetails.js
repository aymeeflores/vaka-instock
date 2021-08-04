import React from 'react'

const InventoryItemDetails = (props) => {
    return (
        <div className="inventory-item">
            <div className="item-title">
                <img className="item-title__back-arrow" />
                <h1 className="item-title__header">Television</h1>
                <div className="item-title__edit-button"></div>
            </div>
            <div className="item-details">
                <div className="item-info">
                    <h4 className="item-info__title">item description</h4>
                    <p className="item-info__details">This 50", 4K LED TVprovides a crystal-clear picture and vivid colors</p>
                </div>
                <div className="item-info">
                    <h4 className="item-info__title">category</h4>
                    <p className="item-info__details">Electronics</p>
                </div>
                <div className="item-info">
                    <div className="item-stock">
                        <h4 className="item-stock__title">category</h4>
                        <div className="item-box__status">
                            <p className="item-box__status--green">IN STOCK</p>
                        </div>
                    </div>
                    <div className="item-stock">
                        <h4 className="item-stock__title">category</h4>
                        <p className="item-stock__details">500</p>
                    </div>
                </div>
                <div className="item-info">
                    <h4 className="item-info__title">warehouse</h4>
                    <p className="item-stock__details">Manhatten</p>
                </div>
            </div>
        </div>
    )
}

export default InventoryItemDetails
