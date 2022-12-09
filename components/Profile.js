import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Profile = () => {
    const{ user, isAuthenticated } = useAuth0();
  return (
    <div>
        {isAuthenticated? user.name: null}
    </div>
  )
}

export default Profile
