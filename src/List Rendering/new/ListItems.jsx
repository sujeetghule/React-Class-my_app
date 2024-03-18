import React from 'react'

export default function ListItems() {
    let fruits=["apple","pineapple","mango","watermelon","grapes"]

  return (
    <>
    {
        fruits.map((fruit,index)=><ul><li>{fruit}</li></ul>)
    }
    </>
  )
}
