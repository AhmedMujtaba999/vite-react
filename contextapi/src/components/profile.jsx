import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    if (!user) {
        return <p>Please login to view your profile</p>
    }
  return (
    <div>
      <h2>Welcome</h2>
      <p>Username: {user?.username}</p>
      <p>Password: {user?.password}</p>
    </div>
  )
}
export default Profile;