import React from 'react'
import Card from './Card'
import './Players.css'
import './information.json'

function PlayersMain() {
    return (

            <div class="main">
                <div class="head">
                    <h1>Indian Playing XI</h1>
                </div>
                <Card /> 
                <Card /> 
                <Card /> 
                <Card />
                <Card />
            </div>
    )
}

export default PlayersMain