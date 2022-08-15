import React, { useState } from 'react'

function Loginform({signIn}) {
  const [user,setUser] = useState({email :"" , password: ""})

  const SigninHandler = (e) => {
      e.preventDefault()
      signIn(user)
  }

return (
  <div className='App'>
      <form onSubmit={SigninHandler}>
          <div className='form-inner'>
              <div className='form-group'>
                  <input type="email" placeholder='Email' id = "emaiID" name = "emailName" onChange={e =>setUser({...user,email : e.target.value})} value ={user.email} />
              </div>
              <div className='form-group'>
                  <input type="password" placeholder='Password' id = "passwordId" name = "passwordName" onChange={e =>{setUser({...user,password : e.target.value})}} value ={user.password} />
              </div>
          </div>
          <input type= "submit" value = "Sign In"/>
          

          
      </form>
      
  </div>
)
}

export default Loginform