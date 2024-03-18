import React from 'react'

export default function PersonList() {
    let persons=[
        {
        name:"sushant",
        age:22,
        id:1,
        skills:"java"
    },
    {
        name:"diksha",
        age:23,
        id:2,
        skills:"finance"
    },
    {
        name:"darshan",
        age:25,
        id:3,
        skills:"python"
    },
    {
        name:"rani",
        age:23,
        id:4,
        skills:"sql"
    },
    {
        name:"raunak",
        age:26,
        id:5,
        skills:"rachna"
    },
    {
        name:"kabir",
        age:27,
        id:6,
        skills:"react js"
    },
    {
        name:"mrunali",
        age:25,
        id:7,
        skills:"j2EE"
    }
]
let PersonList=persons.map((person)=>{
    return <h1>My name is {person.name} and my age is {person.age} and my skill is {person.skills}</h1>
})
  return (
    <>
    {
        // <h1>{persons[0].name}</h1>
        PersonList
    }
    </>
  )
}
