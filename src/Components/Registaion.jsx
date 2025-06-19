import React, { useState } from 'react'

export const Registaion = () => {
    const [fromdata,setFormdata]=useState({
        name:"",
        email:"",
        password:""
    })
      const [showPassword, setShowPassword] = useState(false);
       const [errors, setErrors] = useState({});
const handlechage=(e)=>{
    const {name,value}=e.target
    setFormdata({...fromdata,[name]:value})
}

    const handleSubmit = (e) => {
     
    const validateErrors = {};

    if (fromdata.name.length < 3) {
      validateErrors.name = 'Name must be at least 3 characters';
    }

    if (!fromdata.email.trim()) {
      validateErrors.email = 'Email is required';
    }

    if (fromdata.password.length < 6) {
      validateErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      return; // Stop form submission if there are errors
    }

    // Proceed with submission (e.g., API call)
    alert('Form submitted successfully!');
      e.preventDefault();
      console.log(fromdata); // Log form data to the console
      localStorage.setItem('registrationData', JSON.stringify(fromdata));
    setFormdata({
        name: "",
        email: "",
        password: ""
    });
};
  return (
    <div>
      <h1> Registaion</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
        type='text'
        placeholder='jhondoe'
        required
        name='name'
        value={fromdata.name}
        onChange={handlechage}
        
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <br/>
        <br/>
        <label>Email</label>
        <input 
        type='text'
        placeholder='jhondoe@gmail.com'
        required
        name='email'
        value={fromdata.email}
        onChange={handlechage}
        
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <br/>
        <br/>
        <label>password</label>
        <input
        type={showPassword ? 'text' : 'password'} 
        placeholder='*******'
        required
        name='password'
        value={fromdata.password}
        onChange={handlechage}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <br/>
        <button onClick={() => setShowPassword(prev => !prev)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
        <br/>
        <br/>
        <button type='submit'>submit</button>
      </form>

      

    </div>
  )
}
