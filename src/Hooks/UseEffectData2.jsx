import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectData2 = () => {
    let [post, setPost] = useState()
    let [id, setid] = useState(1)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${setid}`).then((responce) => {
            console.log(responce.data);
            setPost(responce.data)
        }).catch(() => {
            alert("Data is not Found")
        })
    }, [])
    return (
        <div>UseEffectData2


            <input type="text" value={id} onChange={(e) => { setid(e.target.value) }} />
            <h1>{post.title}</h1>
        </div>
    )
}

export default UseEffectData2