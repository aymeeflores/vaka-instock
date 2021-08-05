import React from 'react'
import trash from '../../assets/Icons/delete_outline-24px.svg'
import pen from '../../assets/Icons/edit-24px.svg'

const WarehouseList = ({warehouseList}) => {
    console.log(warehouseList);
    return(
        <main>
            <h1>Warehouses</h1>
            <input type='text' id='search' name='search' placeholder='Search...'/><br/>
            <input type='submit' id='add-warehouse' name='add-warehousre' value='+ Add New Warehouse'/>
            <div>
                {warehouseList
                .map((data) => {
                    return(
                        <div>
                            <h2>Warehouse</h2>
                            <p>{data.name}</p>
                            <h2>Address</h2>
                            <p>{data.address}, {data.city}, {data.country}</p>
                            <h2>Contact Name</h2>
                            <p>{data.contact.name}</p>
                            <h2>Contact Information</h2>
                            <p>{data.contact.phone}</p>
                            <p>{data.contact.email}</p>

                            <img src={trash}/>
                            <img src={pen}/>
                        </div>    
                    );
                })}
            </div>
        </main>
    )
}

export default WarehouseList;