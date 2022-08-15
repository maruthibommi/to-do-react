import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar'
import HomePage from "./Components/HomePage";
import SignUp from "./Components/SignUp";
import userDatabase from "./users.json"
import Loginform from "./Components/Loginform";
import Logoutform from "./Components/Logoutform";
import { useState } from "react";


function App() {

const userDetails = userDatabase

const [currentUser,setCurrentUser] = useState({name : "", email : ""})



const addDataIntoCache = (cacheName, url, response) => {
  const data = new Response(JSON.stringify(response));

  if ('caches' in window) {
    caches.open(cacheName).then((cache) => {
      cache.put(url, data);
      alert('Data Added into cache!')
    });
  }
};

const signUp = (details) =>{
    console.log("details from Signup")
    console.log(details,userDetails)

    alert("user "+ details.name+" added")
}
const signIn = (details) =>{

  console.log("details from Log in")
  console.log(details,userDetails)
  setCurrentUser({...currentUser,name : details.name , email : details.email})
  addDataIntoCache("UserCache",window.location,details)
  alert("user logged in ")

}

const logOut = () => {
  setCurrentUser({...currentUser,name : "" , email : ""})
  window.location = "/"
}

  return (
    <div>
      <Navbar user={currentUser} />

        <Routes>
          <Route path="/" element={<HomePage user= {currentUser}/>}></Route>
          {(currentUser.email === "") ?
            (<><Route path="/Login" element={<Loginform signIn={signIn} />}></Route><Route path="/Signup" element={<SignUp signUp={signUp} />}></Route></>) :
            (<Route path="/Logout" element={<Logoutform logOut={logOut} />}></Route>)}
        </Routes>
    </div>
      
  )
}

export default App;
