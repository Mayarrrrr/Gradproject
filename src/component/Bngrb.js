import { CFormCheck } from '@coreui/react';
import { CFormInput } from '@coreui/react';
import { CFormFeedback } from '@coreui/react'
import { CFormLabel } from '@coreui/react'
import { CFormText } from '@coreui/react'
import { CInputGroup } from '@coreui/react'
import { CInputGroupText } from '@coreui/react'
import { CForm } from "@coreui/react";
import { CFormSelect } from '@coreui/react'
import { CCol } from '@coreui/react'
import { CButton} from '@coreui/react'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom';
import './forms.css';
import background from "../img/bg.jpg";


const Bngrb = () => {
    
const [value, setValue] = useState(null);
const [validated, setValidated] = useState(false)
const handleSubmit = (event) => {
const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  setValidated(true)
}

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

    <div className="form-wrapper">
        <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
        <div className="name">
            <CFormLabel htmlFor="validationCustomUsername" >Username</CFormLabel>
            <CInputGroup className="has-validation">
                <CInputGroupText>@</CInputGroupText>
                <CFormInput
                type="text"
                aria-describedby="inputGroupPrependFeedback"
                feedbackValid="Please choose a username."
                id="validationCustomUsername"
                required
                // value={Values.fullname} 
                // onChange={handleChange}
                />
            </CInputGroup>
        </div>
    
      <div className="email">
        <label className="label"> Email</label>
        <CFormInput
            type="email"
            id="validationServer01"
            label="Email"
            feedback="Looks good!"
            required
            // value={Values.email}
            // onChange={handleChange}
        />
            {/* <input className="input" type="email" name="email" value={Values.email}  onChange={handleChange} > </input> */}
           </div>

           <div className="password">
             <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</CFormLabel>
            <CFormInput 
                type="password" 
                id="inputPassword"  
                required
                // value={Values.password}
                // onChange={handleChange}
                />

             {/* <label className="label"> Password</label>
                 <input className="input" type="password" name="password" value={Values.password} onChange={handleChange} ></input> */}
            </div>
            <div className="password">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Enter your date of birth "
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => (
                    <TextField {...params} helperText={params?.inputProps?.placeholder} required />
                    )}
                />
              </LocalizationProvider>
              </div>
    

    <div className="radio">
    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Gender</CFormLabel>
          <div className="rad">
          <CFormCheck
                type="radio"
                name="radio-stacked"
                id="validationFormCheck2"
                label="Male"
                required
            />
        <CFormCheck
            className="mb-3"
            type="radio"
            name="radio-stacked"
            id="validationFormCheck3"
            label="Female"
            feedbackInvalid="More example invalid feedback text"
            required
        />
        </div>
      </div>
   
      <CFormCheck
        type="checkbox"
        id="invalidCheck"
        label="Agree to terms and conditions"
        required
      />
      <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
  
      <CButton color="primary" type="submit" >
        Submit
      </CButton> 
   
  </CForm>
        </div>
        </div> </div></div>
     );
}
 
export default Bngrb;