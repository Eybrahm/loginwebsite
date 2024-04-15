import React from 'react';
import logo from './logo.svg';
import "./App.css"

function App() {
  return (
    
    <div className="Login">

      <div className="LoginBox">
        <div className="LoginHeader">Login<div></div>
        <div className="inputs">
          <input className="email" placeholder="Enter Your Email" />
          <input className="password" placeholder="Enter Your Password" type="password" />
         </div>

         

         </div>
         <div style={{display:"flex", justifyContent: "center"}}>
          <button className="submitbutton">Login</button>
          </div> 


          <div style={{display:"flex", justifyContent:"center", position:"relative"}}>
          <button className="forgotpassword">forgot password?</button>
          </div>
    
     </div>
     
     </div>
  );
}

export default App;
