import React from 'react';

function Card(props) {
    const { name, Odi, t20, test, img } = props.data;
    
    return (
        <div>
            <div className="profile">
                <div className="photo">
                    <img src={img} alt={name} />
                </div>
                <div className="desc">
                    <h4 className="name">{name}</h4>
                    <ul className="career">
                        <li>ODI : {Odi}</li>
                        <li>TEST : {test}</li>
                        <li>T-20 : {t20}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
