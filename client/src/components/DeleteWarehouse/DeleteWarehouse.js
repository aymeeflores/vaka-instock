import { Component } from 'react';
import './deleteWarehouse.scss';
import closeImage from '../../assets/Icons/close-24px.svg'

export default class DeleteWarehouse extends Component {
    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="delete-modal">
                <div className="modal-exit">
                    <img src={closeImage} />
                </div>
                <div className="modal-header">
                    <h1 className="modal-header__text">{`Delete ____ warehouse`}</h1>
                </div>
                <div className="modal-message">
                    <p className="modal-message__text">{`Please confirm that you’d like to delete ____ from the list of warehouses. You won’t be able to undo this action.`} </p>
                </div>
                <div className="modal-buttons">
                    <button className="modal-buttons__button">Cancel</button>
                    <button className="modal-buttons__button modal-buttons__button--red">Delete</button>
                </div>
            </div>
        )
    }
}
