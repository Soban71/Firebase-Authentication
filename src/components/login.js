import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const auth = getAuth();
      const { email, password } = user;

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/display");
      console.log('Login successful!');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const resetPassword =  () => {
  navigate('/ForgotPassword');
  }
  return (
    <div className="signup-page">
      <div className='Cntainer'>
        <h1>Login Here</h1>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
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
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" className='btn' onClick={login}>
          Login
        </button>
        <p>Already Have an account? <Link to="/Signup"><b>Signup</b></Link></p>
        <p onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset Password</p>
      </div>
    </div>
  );
};

export default Login;
