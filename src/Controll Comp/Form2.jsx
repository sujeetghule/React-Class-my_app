import React, { Component } from 'react'

export default class Form2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comment:"",
         skill:"",
      }
    }
    onUsername=(event)=>{
        this.setState({
            username:event.target.value,
        })
    }
    onComment=(event)=>{
        this.setState({
            comment:event.target.value,
        })
    }
    onSkill=(event)=>{
        this.setState({
            skill:event.target.value,
        })
    }
    onSubit=()=>{
        alert(`Helleo ${this.state.username},${this.state.comment},${this.state.skill}`)

    }
    
  render() 
  {
    let {username,comment,skill}=this.state;

    return (
      <div>
        <form action="" onSubmit={this.onSubit}>
            <label htmlFor="">User NAme</label>
            <br />
            <input type="text" name="" value={username} id="" onChange={this.onUsername} />
            <br />
            <label htmlFor="">Comment </label>
            <br />
            <textarea name="" value={comment} id="" cols="30" rows="10" onChange={this.onComment}></textarea>
            <br />
            <label htmlFor="">Skills </label>
            <br />
            <select name="" value={skill} onChange={this.onSkill} id="">
                <option value="java">Java</option>
                <option value="sql">SQL</option>
                <option value="j2ee">J2EE</option>
                <option value="react">React</option>
            </select>
            <br />
            <input type="submit" value="Submit" />
        </form>
        <h1>NAme Is :{this.state.username}</h1>
        <p>Comment : {this.state.comment}</p>
        <p> Skill : {this.state.skill}</p>
      </div>
    )
  }
}
