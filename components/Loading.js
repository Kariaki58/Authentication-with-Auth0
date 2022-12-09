import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Loading = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }
  return (
    <div>
      <h1>Loading Finish</h1> 
    </div>
  )
}

export default Loading
