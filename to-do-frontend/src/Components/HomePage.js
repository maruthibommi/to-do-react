import React from 'react'

function HomePage({user}) {
  return (
    <div className='App'>
      {(user.name === "") ? 
      ("Please login to continue") : 
      ("Welcome user"+ user.name )}
    </div>
  )
}
export default HomePage