import React, { useState } from "react";

import "../sign/sign.css";

interface User {
  email: string;
}

const SignUp = () => {
  const [value, setValue] = useState<User>({
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("http://localhost:5000/api/v1/forgotPassword", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: value.email,
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
          <button className="footer__submit" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
