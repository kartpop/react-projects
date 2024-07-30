import { useRef, useState } from "react";

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const [editedFormInputs, setEditedFormInputs] = useState({
    email: false,
    password: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formInputs);

    // should validate all inputs before sending data to the server
    // even if we are validating on every key input
    // because every key input validation is for user experience - does not really prevent user from submitting invalid data


    // ....send data to server
  }

  function handleChangeFormInputs(identifier, value) {
    setFormInputs((prev) => ({
      ...prev,
      [identifier]: value,
    }));

    // remove error message if user starts typing again - better user experience 
    setEditedFormInputs((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleEditedFormInputs(identifier) {
    setEditedFormInputs((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }


  const invalidEmail = editedFormInputs.email && !(formInputs.email.includes("@")) 

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
            onBlur={() => handleEditedFormInputs("email")}
            onChange={(event) =>
              handleChangeFormInputs("email", event.target.value)
            }
            value={formInputs.email}
          />
          {invalidEmail && <div className="control-error">Please enter a valid email address</div>}
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
