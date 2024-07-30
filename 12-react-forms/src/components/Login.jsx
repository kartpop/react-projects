import { useState } from "react";

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formInputs);
  }

  function handleChangeFormInputs(identifier, value) {
    setFormInputs((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) =>
              handleChangeFormInputs("email", event.target.value)
            }
            value={formInputs.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleChangeFormInputs("password", event.target.value)
            }
            value={formInputs.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
