import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        
        navigate("/home");
    }
    return(
        <>
        <div>
        <div className="form-div">
        <form className="login-form">
        <p style={{fontSize:"30px", textAlign:"left", color:"black"}}>Welcome back to Pretty Login</p>
        <p style={{textAlign:"left", color:"black"}}>Its great to have you back</p>
          <label htmlFor="email">Email</label>
          <input  
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          placeholder="enter your email.."
          />
          <label htmlFor="password">Password</label>
          <input 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          type="password" 
          placeholder="password"
          /> 
          <button className="login-btn" onClick={()=>handleSubmit()}>Log In</button>
         </form>
         <div>
            <img src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="backgImg" style={{height:"110%",width:"375px"}} />
         </div>
        </div>
        </div>
         
        </>
    )
}

export default Login;