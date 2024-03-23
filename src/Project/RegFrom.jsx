import React, { Component } from 'react'
import './Form.css'
import Email from './Assets/email.png'
import Password from './Assets/password.png'
import User from './Assets/usericon.png'
export default class RegFrom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      action: "Log In"
    }
  }
  render() {
    return (
      <React.StrictMode>
        <form action="">
          <div className="main">
          <div className="box">
          <div className="but">
                <div className={this.state.action === "Log In" ? "login" : "gray"} onClick={() => { this.setState({ action: "Log In" }) }} >Log In</div>
                <div className={this.state.action === "Log In" ? "gray" : "signup"} onClick={() => { this.setState({ action: "Sign-Up" }) }}>Sign-Up</div>
              </div>
          </div>
            <div className="parent">
              <div className="head">{this.state.action}</div>
              <div className="container">
                {
                  this.state.action === "Log In" ? <></> : <div className="input">
                    <img src={User} alt="" />
                    <input type="text" name="" id="username" placeholder='Name' />
                  </div>
                }
                <div className="input">
                  <img src={Email} alt="" />
                  <input type="email" name="" id="email" placeholder='Email' />
                </div>
                <div className="input">
                  <img src={Password} alt="" />
                  <input type="password" name="" id="pass" placeholder='Password' />
                </div>
              </div>
              <hr />
              <div className="forgot">
                <p>Forgot Password <span>Click Here</span></p>
              </div>
              <div className="log-create">
                <button className={this.state.action === "Log In" ? "" :"hidden" }>Login</button>
                <button className= {this.state.action === "Sign-Up" ? "" : "hidden"}>Create a Account</button>
              </div>

            </div>
          </div>
        </form>

      </React.StrictMode>
    )
  }
}
