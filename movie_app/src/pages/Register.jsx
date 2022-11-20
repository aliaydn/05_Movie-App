import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(firstName, lastName);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-monie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              placeholder="Enter your first name..."
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              placeholder="Enter your last name..."
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
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
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
