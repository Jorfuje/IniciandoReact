import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

  const focusRef = useRef()

  console.log(focusRef);

    const initialForm = {
        username: "",
        email: "",
        password: "",
    }

  const { formState, username, email, password, onInputChange } = useForm(initialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter Your Username"
          value={username}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          ref={focusRef}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
