import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebasel.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/shop");
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Please login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          <div className="form_login">
            <input className="input_login" type="submit" value="Login" />
          </div>
        </form>
        <p>
          New To Amazon ?{" "}
          <Link className="form_link" to="/signup">
            Create An Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
