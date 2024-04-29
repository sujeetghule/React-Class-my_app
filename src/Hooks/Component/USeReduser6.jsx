import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const USeReduser6 = () => {
    let[loading,setLoding]=useState(true);
    let[post,setPost]= useState({});
    let[error,setError] = useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
            setLoding(false)
            setError("")
            setPost(res.data)
        }).catch((error)=>{
            setLoding(false)
            setError("Sometime Went Wong")
            setPost("")
        })
    })
  return (
    <div>
        <h1>{loading?"Loading":post.data}</h1>
        <h6>{error?error:null}</h6>
    </div>
  )
}

export default USeReduser6