import React, { useState } from 'react'

function SignUp({signUp}) {

    const [user,setUser] = useState({name: "",email :"" , password: ""})

    const SignupHandler = (e) => {
        e.preventDefault()

        signUp(user)
    }

  return (
    <div className='App'>
        <form onSubmit={SignupHandler}>
            <div className='form-inner'>
                <div className='form-group'>
                    <input type="text" placeholder='UserName' id = "userId" name = "userName" onChange={e =>setUser({...user,name : e.target.value})} value ={user.name} />
                </div>
                <div className='form-group'>
                    <input type="email" placeholder='Email' id = "emaiID" name = "emailName" onChange={e =>setUser({...user,email : e.target.value})} value ={user.email} />
                </div>
                <div className='form-group'>
                    <input type="password" placeholder='Password' id = "passwordId" name = "passwordName" onChange={e =>{setUser({...user,password : e.target.value})}} value ={user.password} />
                </div>
            </div>
            <input type= "submit" value = "Sign Up"/>
            

            
        </form>
        
    </div>
  )
}

export default SignUp