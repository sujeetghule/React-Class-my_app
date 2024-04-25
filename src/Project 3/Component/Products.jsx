import React, { useState } from 'react'
import Menu from './menu'
const Products = () => {
    const {menu, setMenu}=useState(Menu);
  return (
    <div>
        <div className="h1 text-center">Order Your Food</div>
        <hr />
        <div className="container d-flex justify-content-between mx-auto py-3">
        <button type='button' className="btn btn-warning">BreakFast</button>
        <button type='button' className="btn btn-warning">Lunch</button>
        <button type='button' className="btn btn-warning">Brevrages</button>
        <button type='button' className="btn btn-warning">Dinner</button>
        <button type='button' className="btn btn-warning">TimePass</button>
        <button type='button' className="btn btn-warning">All</button>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 border border-2 mx-auto  d-flex py-5">
                    <div className="col-4">
                        <img src="" className='border rounded rounded-3' style={{height:"200px",width:"200px"}} alt="No Image Found" />
                    </div>
                    <div className="col-8">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">Name : </li>
                            <li className="list-group-item list-group-item-action">Descripton :</li>
                            <li className="list-group-item list-group-item-action">Price :</li>
                            <li className="list-group-item list-group-item-action">Product Id :</li>
                            <li className="list-group-item list-group-item-action">Category : </li>
                        </ul>
                        <button className="btn btn-primary my-4 ">Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products