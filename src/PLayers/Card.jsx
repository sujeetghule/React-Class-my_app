import React from 'react'

function Card(props) {
  return (
    <div>
        <div class="profile">
            <div class="photo">
                <img src="/images/rohit.png" alt=""></img>
            </div>
            <div class="desc">
                <h4 class="name">{props.name}</h4>
                <ul class="carrier">
                    <li>ODI : 30</li>
                    <li>TEST : 50</li>
                    <li>T-20 : 60</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card