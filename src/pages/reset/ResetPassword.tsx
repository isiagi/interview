import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../sign/sign.css";

interface User {
  password: string;
}

interface Use {
    password: string;
  }

const SignUp = () => {
  const [value, setValue] = useState<User>({
    password: "",
  });

  const { resetToken } = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`http://localhost:5000/api/v1/passwordreset/${resetToken}`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        password: value.password,
      }),
    })
      .then((docs) => {
        if (docs.ok) {
          return docs.json();
        }
        return docs;
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
