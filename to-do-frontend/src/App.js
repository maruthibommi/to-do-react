import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar'
import HomePage from "./Components/HomePage";
import SignUp from "./Components/SignUp";
import userDatabase from "./users.json"


function App() {

const userDetails = userDatabase



const signUp = (details) =>{
    console.log(details,userDetails)

    alert("user "+ details.name+" added")
}



  return (

    <BrowserRouter>
        <div>
      <Navbar />
      </div>
      <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Signup" element={<SignUp signUp={signUp}/>}></Route>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
