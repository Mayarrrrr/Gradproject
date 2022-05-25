
import React, {useState} from "react";
import '../forms.css';
import background from "../../img/bg.jpg";
import {
    Link
    } from "react-router-dom";
const PatientLogin = () =>{
    const[newvaluesss,setnewvaluesss]=useState({
        fullname:"",
        email:"",
        password:"",
    });
   

    const handleChange=(event)=>{
setnewvaluesss({
...newvaluesss,
[event.target.name]: event.target.value,

})

    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
    };
  return (
    <div className="appConta" style={{ backgroundImage: `url(${background})` }}>
       <div className="container">
      <div className="app-wrapper">
          <div>
          <h2 className="title"> Sign in

          </h2>
      </div>

      
<form className="form-wrapper">
<div className="namee">
        <label className="label"> Username</label>
            <input className="input" type="text" name="fullname" value={newvaluesss.fullname} 
            onChange={handleChange}>

            </input>
 
         
 </div>


 <div className="passwordd">
        <label className="label"> Password</label>
            <input className="input" type="password" name="password" value={newvaluesss.password}
            onChange={handleChange}>
            </input>
            <div className="check">
                <div className="RememberMe">
                    <input  type="checkbox" id="vehiclea1" name="vehicle1" value="Bike"></input>
                    <label for='vehiclea1' className="remember"> Remember me</label>
                 </div>
                <p className="forgot">
                    Forgot password?
                </p> 
            </div>
    
   
            <button className="submit" onClick={handleFormSubmit}> <Link to="/Home"> Sign in </Link> </button> 
            <p className="signn">Don't have an account? <Link to="/SignupPatient">Sign up</Link>  </p>
            
        </div> 
    </form>
    </div>
    </div>
  </div>
  );
};
export default  PatientLogin;