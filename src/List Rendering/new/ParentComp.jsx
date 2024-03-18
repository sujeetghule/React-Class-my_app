import React from 'react'
import ChildComp from './ChildComp'
export default function ParentComp() {
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
  return (
    <>
           {
            persons.map((person)=>{
                return <ChildComp key={person.id} person1={person} />
            })
           }   
    </>
  )
}
