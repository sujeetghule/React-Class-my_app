import React, { Component } from 'react'

 class Props1 extends Component {
  render() {
    
    let name = "Shaktiman"
    let obj ={
        name:"Gangadhar",
        age:23,
        email:"gagadhar_hi_shaktiman_hai@gmail.com"
    }
    return (
      <React.StrictMode>
        <h2>My NAme is {name}</h2>
        <h1>
            My name is {obj.name} and my age id {obj.age} and email is{obj.email}
        </h1>

      </React.StrictMode>
    )
  }
}

export default Props1;