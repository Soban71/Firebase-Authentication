import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './Forgot.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Check your email for instructions.');
    } catch (error) {
      console.error('Password reset error:', error.message);
      alert('Password reset failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <p>Please enter your email to reset your password.</p>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
