import React from 'react'
import {API_URL} from '../../util'
import axios from "axios"

class Warehouses extends React.Component {
    state = {
        warehouseList: []
    };

    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
    }

    return (
        <div>

        </div>
    )
}

export default Warehouses;
