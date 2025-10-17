import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserDetails } from "../store";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidUser = useSelector((state) => state.userAuth.isValidUser);
  const currentUser = useSelector((state) => state.userAuth.currentUser);

  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;

    if (!username) {
      userNameRef.current.focus();
      setUserNameError("Please enter username");
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      setPasswordError("Please enter password");
      return;
    }

    dispatch(loginUserDetails({ username, password }));

    setUserNameError("");
    setPasswordError("");
  };

  useEffect(() => {
    if (isValidUser && currentUser) {
      navigate("/");
    }
  }, [isValidUser, currentUser, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light mt-4 pt-4">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "300px" }}>
        <h2 className="text-center mb-4 fw-bolder">Sign In</h2>

        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter username"
              ref={userNameRef}
              className="form-control rounded-3"
            />
            {userNameError && (
              <p className="text-danger small">{userNameError}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
              className="form-control rounded-3"
            />
            {passwordError && (
              <p className="text-danger small">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 fw-bold"
          >
            Sign In
          </button>
        </form>

        <p className="mt-3 text-center">
          Create an account{" "}
          <span
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => navigate("/signUp")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
