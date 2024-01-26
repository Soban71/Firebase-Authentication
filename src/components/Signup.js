import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseconfig';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      console.log("Registering...");
      const auth = getAuth(app);
      const { email, password } = formData;

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Registered successfully!', user);
      alert('Registered successfully');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  const backfunction=()=>{
    navigate('/')
  }

  return (
    <div className="signup-page">
      <div className="Container">
        <h1>Registration</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" className="btn" onClick={register}>
          Sign Up
        </button>
        <button onClick={backfunction}  className="btn" >
          back
        </button>
      </div>
    </div>
  );
};

export default Signup;



