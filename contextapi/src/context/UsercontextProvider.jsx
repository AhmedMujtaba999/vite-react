import React from 'react'
import UserContext from './UserContext'
// usercontext provider is a method here 
const UserContextProvider =({children})=>{
    // what ever prop u r getting pass it as it is to children {it is a div}
    const [user, setUser] = React.useState(null)
return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>

)

}
export default UserContextProvider