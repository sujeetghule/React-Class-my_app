import React from 'react'
import UserComp2 from './UserComp2';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const UserCon1 = () => {
  return (
    <div>
        <UserContext.Provider value={"ajay"}>
          <ChannelContext.Provider value={"Patil"}>

          <UserComp2></UserComp2>

          </ChannelContext.Provider>
        </UserContext.Provider>

    </div>
  )
}

export default UserCon1