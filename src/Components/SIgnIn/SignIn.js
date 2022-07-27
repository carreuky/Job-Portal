import React from "react";
import "./SignIn.css";

export default function SignIn() {
  const Login = (
    <div className=" div-center row w-35 p-3">
      <div className="border border-primary p-4 content text-white">
        <h3>Login</h3>
        <hr />
        <form>
          <div className="form-group ">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary my-3">
            Login
          </button>
          <hr />
          <button type="button" className="btn btn-link text-white">
            Signup
          </button>
          <button type="button" className="btn btn-link text-white">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
  return <div className="LSin">{Login}</div>;
}
