import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../sign/sign.css";

interface User {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("https://sleepy-basin-09946.herokuapp.com/api/v1/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      }),
    })
      .then((docs) => {
        if (docs.ok) {
          return docs.json();
        }
        return "Wrong Entries";
      })
      .then((docs) => {
        navigate('/enter');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup__container">
      <div className="signup__wrapper">
        <form onSubmit={handleSubmit}>
          <div className="contact__input">
            <input
              type="email"
              name="email"
              className="input"
              required
              onChange={handleChange}
            />
            <label htmlFor="email" className="input__label">
              Email
            </label>
          </div>
          <br />
          <div className="contact__input">
            <input
              type="password"
              name="password"
              className="input"
              required
              onChange={handleChange}
            />
            <label htmlFor="password" className="input__label">
              Password
            </label>
          </div>
          <p style={{ marginBlock: "1rem" }}>Forgot Password <Link to='/reset'>Reset Password</Link></p>
          <br />
          <button className="footer__submit" type="submit">
            Log In
          </button>
          <p style={{ marginBlock: "1rem" }}>No Account <Link to='/signup'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
