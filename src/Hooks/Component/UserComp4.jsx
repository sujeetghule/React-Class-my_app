import React, { useContext } from 'react'
import UserComp5 from './UserComp5'
import { ChannelContext, UserContext } from './UserCon1'

const UserComp4 = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
        <UserComp5></UserComp5>
        <h1>Comp 4</h1>
        <h1>My name is {user} {channel}</h1>
    </div>
  )
}

export default UserComp4