import { useRef, useState } from "react";

export default function Login() {
  // const [formInputs, setFormInputs] = useState({
  //   email: "",
  //   password: "",
  // });
    const email = useRef();
    const password = useRef();


  function handleSubmit(event) {
    event.preventDefault();
    console.log(email.current.value, password.current.value);
  }

  // function handleChangeFormInputs(identifier, value) {
  //   setFormInputs((prev) => ({
  //     ...prev,
  //     [identifier]: value,
  //   }));
  // }

  // following is not recommended, should be done with care; therefore resetting values with refs is difficult
  // because this is imperatively updating DOM, which is not recommended in React - React should be left to manage the DOM
  // React: declarative, not imperative
  // email.current.value = "";
  // password.current.value = "";

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
            ref={email}
            // onChange={(event) =>
            //   handleChangeFormInputs("email", event.target.value)
            // }
            // value={formInputs.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={(event) =>
            //   handleChangeFormInputs("password", event.target.value)
            // }
            // value={formInputs.password}
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
