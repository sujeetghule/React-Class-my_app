import React, { Component } from 'react'

export default class Form1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ""
        }
    }

 eventHandler = (event) => {
        console.log(event);
       
        this.setState(
            {
                username:event.target.value
            }
        )

    }
    onSubmit = () => {
        alert(`Helleo ${this.state.username}`)
    }



    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    <label htmlFor="">User NAme : </label>
                    <input type="text" name="" id="" value={this.state.username} onChange={this.eventHandler} />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
