import React from 'react'
import {API_URL} from '../../util'
import axios from "axios"
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Warehouses.scss'

class Warehouses extends React.Component {
    state = {
        warehouseList: []
    };

    componentDidMount() {
        axios.get(`${API_URL}/warehouses`)
        .then((response) => {  
            this.setState({
                warehouseList: response.data
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render () {
        return(
            <div className='warehouses'>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact>
                            {this.state.warehouseList && (
                                <WarehouseList warehouseList={this.state.warehouseList}/> 
                            )} 
                        </Route>






                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Warehouses;
