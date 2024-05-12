import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// styles
import { FormStyles } from '../styles/App.styles';

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    login();
  };
  
  return (
    <FormStyles>
      <div className="form-container">
        <form className="form-el login-form" onSubmit={handleSubmit}>
          <h3>Log in</h3>
          <div>
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter email" required />
          </div>

          <div>
            <label for="password">Password:</label>
            <input type={passwordType} placeholder="Enter Password" required />
            <span
              className="show-password show-password-login"
              onClick={showPassword}
              style={{ cursor: "pointer" }}
            >
              {passwordType === "password" ? "Show" : "Hide"}
            </span>
          </div>
          <input type="submit" className="submit-btn" value="Log in" />
          <span>
            Don't have an account? <a href="/signup">Signup here</a>
          </span>
        </form>
      </div>
    </FormStyles>
  );
}

export default Login;