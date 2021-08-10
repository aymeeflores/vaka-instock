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
            <div className="delete-modal">
                <div className="modal-exit">
                    <img src={closeImage} />
                </div>
                <div className="modal-header">
                    <h1 className="modal-header__text">{`Delete ${this.warehouseInfo.name}  warehouse`}</h1>
                </div>
                <div className="modal-message">
                    <p className="modal-message__text">{`Please confirm that you’d like to delete ${this.warehouseInfo.name} from the list of warehouses. You won’t be able to undo this action.`} </p>
                </div>
                <div className="modal-buttons">
                    <Link to="/" className="link-tag">
                        <button className="link-tag__button" >Cancel</button>
                    </Link>
                    <Link to="/" className="link-tag">
                        <button className="link-tag__button link-tag__button--red" onClick={this.onDelete} >Delete</button>
                    </Link>
                </div>
            </div>
        )
    }
}
