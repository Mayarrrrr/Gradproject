import React, {useState} from "react";
import { Link } from "react-router-dom";
import './forms.css';
import background from "../img/bg.jpg";

const SignupForm = () =>{
    const[Values,setValues]=useState({
        fullname:"",
        email:"",
        password:"",
    });
   

    const handleChange=(event)=>{
setValues({
...Values,
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
          <h2 className="title"> Create Account

          </h2>
      </div>

<form className="form-wrapper">
  
    <div className="name">
        <label className="label"> Full name</label>
            <input className="input" type="text" name="fullname" value={Values.fullname} 
            onChange={handleChange} >

            </input>

            </div>
 



 <div className="email">
        <label className="label"> Email</label>
            <input className="input" type="email" name="email" value={Values.email
            
            }  onChange={handleChange} >
               
            </input>
          
        
 </div>


 <div className="password">
        <label className="label"> Password</label>
            <input className="input" type="password" name="password" value={Values.password}
            onChange={handleChange} >
            </input>
            
 </div>

 
 <div className="password">
  <label>Enter your birthday:</label>
        <input className="date"  type="date" name="bday" />
  </div>

<div>
 
 <div className="password">
 <label for="gender"> Select you gender</label>

      <div className="radio">
          <div className="rad">

        <input  type="radio" value="Male" name="gender" /> Male  <br></br>
        <input  type="radio" value="Female" name="gender" /> Female
        </div>
      </div>
      </div>
  

<button className="submit" onClick={handleFormSubmit}> 
<Link to={'/Home'}> Ceate Account </Link> </button> 
 


 
<p className="signn">  Already have an account? <Link to="/">Sign in</Link></p>
    
     </div>
</form>

      </div>
  </div>
  </div>
  );
};
export default  SignupForm;

