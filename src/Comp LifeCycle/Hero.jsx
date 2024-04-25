import React from 'react'

export const Hero = ({heroName}) => {
    if(heroName ==='joker'){
        throw new Error (`${heroName} is not a Hero`)
    }
  return (
    <div>{heroName}</div>
  )
}
