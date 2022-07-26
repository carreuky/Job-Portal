import React from "react";
import "./SignIn.css";

export default function SignIn() {
  const Login = (
    <div class=" div-center w-35 p-3">
      <div class="border border-primary p-4 content text-white">
        <h3>Login</h3>
        <hr />
        <form>
          <div class="form-group ">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary my-3">
            Login
          </button>
          <hr />
          <button type="button" class="btn btn-link">
            Signup
          </button>
          <button type="button" class="btn btn-link">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
  return <div className="LSin">{Login}</div>;
}
