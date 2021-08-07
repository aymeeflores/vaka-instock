import React from 'react'
import { Link } from 'react-router-dom'
import trash from '../../assets/Icons/delete_outline-24px.svg'
import pen from '../../assets/Icons/edit-24px.svg'
import search from '../../assets/Icons/search-24px.svg'
import chevron from '../../assets/Icons/chevron_right-24px.svg'
import sort from '../../assets/Icons/sort-24px.svg'
import './WarehouseList.scss'

const WarehouseList = ({warehouseList}) => {
    console.log(warehouseList);
    return(
        <main className='w-list'>
            <div className='w-list__top'>
                <h1 className='w-list__heading'>Warehouses</h1>
                <div className='w-list__search-div'>
                    <input className='w-list__search' type='text' id='search' name='search' placeholder='Search...'/>
                    <img src={search} className='w-list__search-img'/>       
                    <Link><input className='w-list__add' type='submit' id='add-warehouse' name='add-warehouse' value='+ Add New Warehouse'/></Link>
                </div>
            </div>
            <div className='w-list__subheading-bar'>
                <h4>Warehouse</h4>
                <img src={sort}/>
                <h4>Address</h4>
                <img src={sort}/>
                <h4>Contact Name</h4>
                <img src={sort}/>
                <h4>Contact Information</h4>
                <img src={sort}/>
            </div>
            <div>
                {warehouseList
                .map((data) => {
                    return(
                        <div className='w-list__container'>
                            <div className='w-list__left'>
                                <h4 className='w-list__subheading'>Warehouse</h4>
                                {/* This needs to be linked to whatever the individual warehouse details path will be */}
                                <div className='w-list__name-box'>
                                    <Link className='w-list__name'><p>{data.name}</p></Link>
                                    <img src={chevron}/>
                                </div>
                                <h4 className='w-list__subheading w-list__subheading--lower'>Address</h4>
                                <p>{data.address}, {data.city}, {data.country}</p>
                            </div>
                            <div className='w-list__right'>
                                <h4 className='w-list__subheading'>Contact Name</h4>
                                <p>{data.contact.name}</p>
                                <h4 className='w-list__subheading w-list__subheading--lower'>Contact Information</h4>
                                <p>{data.contact.phone}</p>
                                <p>{data.contact.email}</p>
                            </div>
                            <div className='w-list__icons'>
                            <Link><img src={trash}/></Link>
                            <Link><img src={pen}/></Link>
                            </div>
                        </div>    
                        
                    );
                })}
            </div>
        </main>
    )
}

export default WarehouseList;