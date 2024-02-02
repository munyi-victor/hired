import React, { useState } from 'react';

const Signup = () => {
  const [passwordVisble, setpasswordVisble] = useState("text")

  const showPassword = () => {
    if (passwordVisble === "text") {
      setpasswordVisble("password")
    } else {
      setpasswordVisble("text")
    }
  }

  return (
    <div className="form-container">
      <form className="form-el">
          <h3>Sign Up</h3>
        <div>
          <label for="firstname">First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <label for="lastname">Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type={passwordVisble} placeholder="Enter Password"/>
        </div>
        <div>
          <label for="password">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <span className='show' onClick={showPassword} style={{cursor:"pointer"}}>Show password</span>
      </form>
    </div>
  );
}

export default Signup;