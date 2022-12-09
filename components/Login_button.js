import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Login_button = () => {
  const{ loginWithRedirect } = useAuth0();
  return (
      <button 
      className='btn' 
      onClick={() => loginWithRedirect()}
      >Log In
      </button>    
  )
}

export default Login_button
