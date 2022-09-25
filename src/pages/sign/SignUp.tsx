import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./sign.css";

interface User {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
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

    fetch("http://localhost:5000/api/v1/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: value.email,
        password: value.password,
        username: value.username,
      }),
    })
      .then((docs) => {
        if (docs.ok) {
          return docs.json();
        }
        return "Wrong Entries";
      })
      .then((docs) => {
        console.log(docs);
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
              type="text"
              className="input"
              name="username"
              required
              onChange={handleChange}
            />
            <label htmlFor="name" className="input__label">
              Username
            </label>
          </div>
          <br />
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
          <br />
          <button className="footer__submit" type="submit">
            Sign Up
          </button>
          <p style={{ marginBlock: "1rem" }}>
            Already Registered <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
