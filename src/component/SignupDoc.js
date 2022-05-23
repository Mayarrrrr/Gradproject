import React, {useState} from "react";
import {Link } from "react-router-dom";
import background from "../img/bg.jpg";
import './forms.css';

  
const SignupDoc = () =>{
    const[Valuess,setValuess]=useState({
        fullname:"",
        email:"",
        password:"",
    });

    const handleChange=(event)=>{
        setValuess({
        ...Valuess,
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
                <h2 className="title"> create Account

                </h2>
            </div>

            <form className="form-wrapper">
            
                <div className="name">
                    <label className="label"> Full name</label>
                        <input className="input" type="text" name="fullname" value={Valuess.fullname} 
                        onChange={handleChange}>

                        </input>

                        </div>
            


            <div className="email">
                    <label className="label"> Email</label>
                        <input className="input" type="email" name="email" value={Valuess.email
                        
                        }  onChange={handleChange}>
                        
                        </input>
                    
                    
            </div>


            <div className="password">
                    <label className="label"> Password</label>
                        <input className="input" type="password" name="password" value={Valuess.password}
                        onChange={handleChange}>
                        </input>
                        
            </div>

            
            <div className="password">
            <label>Enter your birthday:</label>
                    <input className="date"  type="date" name="bday"/>
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
            
            <div className="phone">
                <label className="password" for="phone">Enter your phone number:
            <input className="tel" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/> </label>
            </div>

            <div className="password">
            <label for="cars">Experience years:</label>
            <select className="cars" name="cars">
            
                <option value="volvo">1</option>
                <option value="saab">2</option>
            
                <option value="mercedes">3</option>
                <option value="audi">more</option>
            
            </select>
            </div>

            <div className="file">


            <div className="password">
            <label className="pass"> upload your profile picture</label>
            <input className="fille" type="file"  name="filename" accept="image/*"/>
            </div>
            </div>

            <div className="password">
            <label for="username"> Enter your specialization:</label>
                        <input className="spec" type="text" id="username" name="username" minlength="3" maxlength="20" required></input>
                        </div>

                        <div>

                        <label className="password"> Enter your address
                        <input type="street" 
                    class="control"  id="autocomplete"   placeholder="Street"></input> </label></div>

                    
            <button className="submit" onClick={handleFormSubmit}> 
            Ceate Account </button>
            


            
            <p className="signn">  Already have an account? <Link to="/Login">Sign in</Link></p>
            
                </div>
            </form>

            </div>
        </div>
    </div>
  );
};
export default  SignupDoc;

