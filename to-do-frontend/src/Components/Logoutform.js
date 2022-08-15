

function Logoutform({logOut}) {

    
    return(
        <div>
            Are you sure you want to log out ?
            <input type= "button" value= "Logout" onClick={logOut} />
        </div>
    )
}

export default Logoutform