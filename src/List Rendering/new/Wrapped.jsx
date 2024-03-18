import React from 'react'

export const Wrapped = () => {
    let components =[<NavBar/>,<Aside/>,<Section/>,<Footer/>]
    let renderComp=components.map((comps)=>{
        return (comps)
    })
  return (
    <div></div>
  )
}
