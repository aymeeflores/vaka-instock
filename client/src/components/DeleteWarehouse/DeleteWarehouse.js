import { Component } from 'react';

export default class DeleteWarehouse extends Component {
    state = {
        show: false
    }
    showModal = () => {
        this.setState({
            show: true
        })
    }
    render() {
        render() {
            if (!this.props.show) {
                return null
            }
            return (
                <div className="delete-modal">
                    <div className="modal-header">
                        <h1 className="modal-header__text">{`Delete ____ warehouse`}</h1>
                    </div>
                    <div className="modal-message">
                        <p className="modal-message__text">{`Please confirm that you’d like to delete Television from the inventory list. You won’t be able to undo this action.`}</p>
                    </div>
                    <div className="modal-buttons">
                        <button className="modal-buttons__button">Cancel</button>
                        <button className="modal-buttons__button">Delete</button>
                    </div>
                </div>
            )
        }
    }
