// import React, { useState } from 'react'
// import Menu from './menu'
// const Products = () => {
//     let { items, setItem } = useState(Menu);
//     return (
//         <div>
//             <div className="h1 text-center">Order Your Food</div>
//             <hr />
//             <div className="container d-flex justify-content-between mx-auto py-3">
//                 <button type='button' className="btn btn-warning">BreakFast</button>
//                 <button type='button' className="btn btn-warning">Lunch</button>
//                 <button type='button' className="btn btn-warning">Brevrages</button>
//                 <button type='button' className="btn btn-warning">Dinner</button>
//                 <button type='button' className="btn btn-warning">TimePass</button>
//                 <button type='button' className="btn btn-warning">All</button>
//             </div>
//             <div className="container-fluid">
//                 <div className="row">
//                     {
//                       items.map((cValue)=>{

//                            const { product_id, product_name, product_image, product_category, product_description, product_price } = cValue;
//                         return (
//                             <div className="col-8 border border-2 mx-auto  d-flex py-5">
//                                 <div className="col-4">
//                                     <img src="" className='border rounded rounded-3' style={{ height: "200px", width: "200px" }} alt="No Image Found" />
//                                 </div>
//                                 <div className="col-8">
//                                     <ul className="list-group">
//                                         <li className="list-group-item list-group-item-action">Name : </li>
//                                         <li className="list-group-item list-group-item-action">Descripton :</li>
//                                         <li className="list-group-item list-group-item-action">Price :</li>
//                                         <li className="list-group-item list-group-item-action">Product Id :</li>
//                                         <li className="list-group-item list-group-item-action">Category : </li>
//                                     </ul>
//                                     <button className="btn btn-primary my-4 ">Order</button>
//                                 </div>
//                             </div>

//                         )
//                       })



//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Products


import React, { useState } from 'react'
import Menu from './menu'

const Products = () => {
    let [item, setItem] = useState(Menu)
    const Filters =(filVAle)=>{
        item.filter((new_value)=>{
            
        })
    }
    return (
        <>
            <div className="h1 text-center">Order Your Food</div>
            <hr />
            <div className="container d-flex justify-content-around">
                <button type='button' className='btn btn-warning'>Break-fast</button>
                <button type='button' className='btn btn-warning'>Lunch</button>
                <button type='button' className='btn btn-warning'>Time-Pass</button>
                <button type='button' className='btn btn-warning'>Dinner</button>
                <button type='button' className='btn btn-warning'>All</button>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        item.map((cvalue) => {
                            const { product_id, product_name, product_image, product_category, product_description, product_price } = cvalue;
                            return (
                                <div className="item-card col-8 my-5 d-flex mx-auto border border-2 rounded rounded-4">
                                    <div className="col-4 my-5">
                                        <img src={product_image}alt="" className='rounded rounded-3' style={{ height: "200px", width: "200px" }} />
                                    </div>
                                    <div className="col-8">
                                        <ul className="list-group text-start my-5 bg-dark">
                                            <li className="list-group-item list-group-item-action font-weight-bold">Name:{product_name}</li>
                                            <li className="list-group-item list-group-item-action">Description:{product_description}</li>
                                            <li className="list-group-item list-group-item-action">Price:{product_price}</li>
                                            <li className="list-group-item list-group-item-action">Product id:{product_id}</li>
                                        </ul>
                                        <button className="btn btn-primary mb-4">Order Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Products