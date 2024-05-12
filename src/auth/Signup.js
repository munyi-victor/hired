import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import { FormStyles } from '../styles/App.styles';

const Signup = () => {
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");

  const [confirmPasswordType, setConfirmPasswordType2] = useState("password");

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  const showConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType2("text");
    } else {
      setConfirmPasswordType2("password");
    }
  };

  const handleSubmit = () => {
    navigate("/")
  }

  return (
    <FormStyles>
      <div className="form-container">
        <form className="form-el" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            <label for="firstname">First Name:</label>
            <input type="text" placeholder="First Name" required />
          </div>
          <div>
            <label for="lastname">Last Name:</label>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type={passwordType} placeholder="Enter Password" required />
            <span
              className="show-password"
              onClick={showPassword}
              style={{ cursor: "pointer" }}
            >
              {passwordType === "password" ? "Show" : "Hide"}
            </span>
          </div>

          <div>
            <label for="password">Confirm Password:</label>
            <input
              type={confirmPasswordType}
              placeholder="Confirm Password"
              required
            />
            <span
              className="show-confirm-password"
              onClick={showConfirmPassword}
              style={{ cursor: "pointer" }}
            >
              {confirmPasswordType === "password" ? "Show" : "Hide"}
            </span>
          </div>
          <input type="submit" className="submit-btn" value="Sign up" />

          <span>
            Already have an account? <a href="/login">Login here</a>
          </span>
        </form>
      </div>
    </FormStyles>
  );
}

export default Signup;