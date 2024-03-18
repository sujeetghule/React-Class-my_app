import React from 'react'

function ListItem() {
    let fruits =['Apple','Mango','WaterMelon','Ek MAchali ','pani main','gayi','Chappak 🐟','Chappak 🐟']
  return (
    <div>
        {
            fruits.map((fruit) => {
                return <ul><li>{fruit}</li></ul>
            })
        }
    </div>
  )
}

export default ListItem