import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-monie" />
      </div>
      <div className="login-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <div className="link">Forgot Password?</div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
        <button className="btn btn-primary form-control">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
