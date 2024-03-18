import React from 'react'
import ChildComp from './ChildComp'

function ParentComp() {
    const persones = [
        {
            name: "Sujeet",
            age: 23,
            skills: "React JS",
            EmpID: 1
        },
        {
            name: "GAnesh",
            age: 22,
            skills: "JavaScript",
            EmpID: 2
        }, {
            name: "DarShan",
            age: 32,
            skills: "Java",
            EmpID: 3
        }, {
            name: "Abhijit",
            age: 66,
            skills: "Web Tech",
            EmpID: 4
        }
    ]
  return (
    <>
        {
            persones.map((persone) => {
                return <ChildComp key={persone.id} persone1={persone}/>
            })
        }
    </>
  )
}

export default ParentComp