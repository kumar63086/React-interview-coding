import React, { useState } from 'react'

const Login = () => {
    const[fromdata,setFormdata]=useState({
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({})
    const hanldesubmit=(e)=>{
     e.preventDefault(); 
     console.log(fromdata);
     const validationErrors={}

     const{email,password}=fromdata

     if(!email){
        validationErrors.email="email is Required"
     } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if(!password){
        validationErrors.password="password is is Required"
    } else if(password.length<6){
        validationErrors.password="passwoed must at least 6 chareters"
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    alert("Login successful!");
    // ✅ Save to localStorage
  localStorage.setItem("loginData", JSON.stringify(fromdata));
  setFormdata({
    email:"",
    password:""
  })
    }
    const onchange=(e)=>{
        const{name,value}=e.target
        setFormdata(preve=>({...preve,[name]:value}))
    }
  return (
    <div>
   <h1>Login</h1>

   <form onSubmit={hanldesubmit}>
    <label>Email:</label>
    <input
    type='text'
    placeholder='Jone@gmail.com'
    name='email'
    onChange={onchange}
    value={fromdata.email}
    />
    {errors.email && <p style={{"color":"red"}}>{errors.email}</p>}
   <br/>
    <label>Password:</label>
    <input
    type='password'
    placeholder='*******'
    name='password'
    onChange={onchange}
    value={fromdata.password}
    />
    {errors.password && <p style={{"color":"red"}}>{errors.password}</p>}
    <br/>
    <button type='submit'>submit</button>

   </form>

    </div>
  )
}

export default Login