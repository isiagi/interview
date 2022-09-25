import React, { useState } from "react";

import "../sign/sign.css";

interface User {
  email: string;
}

const SignUp = () => {
  const [value, setValue] = useState<User>({
    email: "",
  });
  const [yes, setYes] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch("https://sleepy-basin-09946.herokuapp.com/api/v1/forgotPassword", {
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
        setYes(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup__container">
      <div className="signup__wrapper">
        <h3 className={yes ? "show": "hide"}>Please Check Your Email</h3>
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
