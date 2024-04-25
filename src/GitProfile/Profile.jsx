import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Profile = () => {
    let [posts,setPosts] =useState([])

    useEffect(()=>{
        axios.get("https://api.github.com/users").then((responce)=>{
            console.log(responce.data);
            setPosts(responce.data)
        }).catch(()=>{
            alert("Data is not Found")
        })
    })



  return (
    <div><p>UseEffectData1</p>

        {
            posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })
        }
    </div>
  )
}

export default Profile