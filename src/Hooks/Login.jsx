import React from 'react'
import { useState } from 'react'

const Login = () => {
    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");
    const [allValue,setAllValue] = useState([]);

    const submitForm = (e)=>{
        e.preventDefault()
        const newEntey = {Email:email,password:pass}
        setAllValue([...allValue,newEntey])
        console.log(newEntey)
        setEmail("");
        setPass("")
    }


  return (
    <div>
        <div className="container">
            <form action="" onSubmit={submitForm}>
                <table>
                    <tr>
                        <label htmlFor="eamil">Email : </label>
                        <input type="email" name="email" id="eamil" value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
                    </tr>
                    <tr>
                        <label htmlFor="password">Password : </label>
                        <input type="password" name="password" id="password" onChange={(e)=>{setPass(e.target.value)}} />
                    </tr>
                </table>
                <button type="submit">Login </button>
            </form>
        </div>

    </div>
  )
}

export default Login