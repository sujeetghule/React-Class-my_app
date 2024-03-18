import React from 'react'

export default function NameList() {
    let name=["bruce","sam","tiger","christopher","jackson"]
    // let nameList=name.map(names=><h1>{names}</h1>)
    let nameList=name.map((names)=>{
        return <h1>{names}</h1>
    })
  return (
    <>
    {/* <h1>{name[0]}</h1>
    <h1>{name[1]}</h1>
    <h1>{name[2]}</h1> */}
    {
        nameList
    }
    </>
  )
}
