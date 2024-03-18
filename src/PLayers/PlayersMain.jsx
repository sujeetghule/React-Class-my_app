import React from 'react';
import Card from './Card';
import './Players.css';

import userData from './information.json';

function PlayersMain() {
    return (
        <div className="main">
            <div className="head">
                <h1>Indian Playing XI</h1>
            </div>
            
            {userData.players.map((player, index) => (
                <Card key={index} data={player} />
            ))}
        </div>
    );
}

export default PlayersMain;
