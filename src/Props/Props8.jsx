import React from 'react'

export const Props8 = (props) => {
    let {model,price,make}=props.obj
  return (
    <div>
        <h1>Model is {model} Price is {price} And Make in {make}</h1>
        <h1>Model is {props.obj.model} Price is {props.obj.price} And Make in {props.obj.make}</h1>
    </div>
  )
}
