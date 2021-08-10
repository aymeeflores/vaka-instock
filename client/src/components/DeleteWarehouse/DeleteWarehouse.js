import { Component } from 'react';
import './deleteWarehouse.scss';
import closeImage from '../../assets/Icons/close-24px.svg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../util';

export default class DeleteWarehouse extends Component {
    onDelete = () => {
        axios.delete(`${API_URL}/warehouses/${this.props.match.params.id}`)
            .then(console.log("You are done"))
    }

    warehouseId = this.props.match.params.id
    warehouseList = this.props.warehouseList
    warehouseInfo = this.warehouseList.filter((warehouse) => {
        return warehouse.id === this.warehouseId
    })[0]

    render() {
        console.log(this.warehouseInfo)
        console.log(this.warehouseList)
        console.log(this.warehouseId)
        console.log(this.props.show)
        if (!this.props.show) {
            return null
        }
        return (
            <div className="delete-modal-box">
                <div className="modal-wrap">
                    <div className="modal-contents">
                        <div className="modal-close">
                            <Link className="modal-button__link" to="/">
                                <img src={closeImage} />
                            </Link>
                        </div>
                        <div className="modal-heading">
                            <h1 className="modal-heading__text">{`Delete ${this.warehouseInfo.name}  warehouse`}</h1>
                        </div>
                        <div className="modal-message">
                            <p className="modal-message__text">{`Please confirm that you’d like to delete ${this.warehouseInfo.name} from the list of warehouses. You won’t be able to undo this action.`} </p>
                        </div>
                    </div>
                    <div className="modal-button">
                        <Link to="/" className="modal-button__link">
                            <button className="modal-button__cancel">Cancel</button>
                        </Link>
                        <Link to="/" className="modal-button__link">
                            <button className="modal-button__delete modal-button__delete--red" onClick={this.onDelete}>Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
