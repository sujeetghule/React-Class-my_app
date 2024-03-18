import React from 'react'

function PersoneList() {
    const plist = [
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
            skills: "Chutiya Ghumana",
            EmpID: 4
        }
    ]
    let all_list = plist.map((name) => {
        return <h3>Hi... My name is {name.name}, I'm {name.age} Year old, I have Strong Skills in {name.skills}</h3>
    })
    return (
        <div>
            {
                all_list
            }
        </div>
    )
}

export default PersoneList