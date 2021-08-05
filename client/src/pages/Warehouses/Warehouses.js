import React from 'react'

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

export default Warehouses
