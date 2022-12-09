import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Log_out = () => {
    const { logout } = useAuth0()
  return (
    <div>
        <button
        className='btn'
        onClick={() => logout()}
        >
        Log out
        </button>
    </div>
  )
}

export default Log_out
