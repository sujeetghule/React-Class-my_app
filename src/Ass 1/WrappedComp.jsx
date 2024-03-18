import React from 'react'
import Nav from './Nav';

<Nav/>,<Aside/>,<Footer/>,<Main/>

function WrappedComp() {
    let components = [<Nav/>,<Aside/>,<Footer/>,<Main/>];
    let RenderComp = components.map((comp) => {
        return comp;
    })
  return (
    <div>
        {
            RenderComp
            
        }
    </div>
  )
}

export default WrappedComp