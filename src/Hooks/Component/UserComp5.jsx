import React from 'react'
import { ChannelContext, UserContext } from './UserCon1'

const UserComp5 = () => {
  return (  
    <div>
        <UserContext.Consumer>
            {
                (name)=>{
                   return <ChannelContext.Consumer>
{
    (channel)=>{
        return <h1>My name is {name} {channel}</h1>

    }
}

                   </ChannelContext.Consumer>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default UserComp5