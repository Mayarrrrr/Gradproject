
import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../forms.css';
import background from "../../img/bg.jpg";

const Login = () =>{
    const[newvalues,setnewvalues]=useState({
        fullname:"",
        email:"",
        password:"",
    });
   

    const handleChange=(event)=>{
setnewvalues({
...newvalues,
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
            <input className="input" type="text" name="fullname" value={newvalues.fullname} 
            onChange={handleChange}>

            </input>
 
         
 </div>


 <div className="passwordd">
        <label className="label"> Password</label>
            <input className="input" type="password" name="password" value={newvalues.password}
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
    
   
            <button className="submit" onClick={handleFormSubmit}> <Link to={'/HomeDoc'}>Sign in </Link> </button>
            <p className="signn"> Don't have an account? <Link to="/SignupDoc">Sign up</Link> </p>
        </div> 
    </form>
    </div>
    </div>
  </div>
  );
};
export default  Login;