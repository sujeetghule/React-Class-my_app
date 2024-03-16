import React from 'react'

export const Cards = (props) => {
  return (
    <>
        <div className="cards">
            <div className="images">
            <img src="" alt={props.imgsrc} />
            </div>
            
            <div className="card-body">
                <span className='card-category'>{props.category} </span>
                <h2>Title</h2>
                <a href=""><button>Watch</button></a>
            </div>
        </div>
    </>
  )
}
