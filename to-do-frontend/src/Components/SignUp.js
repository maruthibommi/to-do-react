import React, { useState } from 'react'
import axios from 'axios';

function SignUp({signUp}) {

    const [user,setUser] = useState({name: "",email :"" , password: ""})

    const SignupHandler = (e) => {
        e.preventDefault()
        const userdetails = {
            username : user.name,
            email : user.email,
            password : user.password
        }

        axios.post('https://to-do-yagna.herokuapp.com/users/add', userdetails)
        .then(
            (response) => {
            console.log("data added to backend"); },
            (error) => {console.log(error)}
        );
        
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