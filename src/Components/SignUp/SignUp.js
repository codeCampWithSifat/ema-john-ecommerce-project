import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebasel.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPasword(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your Password Not Match");
      return;
    }
    if (password.length < 6) {
      setError("Password Must Be At Least 6 or More Characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
    
  };

  return (
    <div className="form_container">
      <div>
        <h2 className="form_title">Sign Up Here</h2>
        <form onSubmit={handleCreateUser}>
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

          <div className="input_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>

          <div className="form_login">
            <p style={{ color: "red" }}>{error}</p>
            <input className="input_login" type="submit" value="Sign Up" />
          </div>
        </form>
        <p>
          Already Have An Account ?
          <Link className="form_link" to="/login">
            {" "}
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
