import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserDetails } from "../store";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidUser = useSelector((state) => state.userAuth.isValidUser); //  correct key
  const currentUser = useSelector((state) => state.userAuth.currentUser);
 


  let [userNameError, setUserNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let userNameRef = useRef(null);
  let passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    let username = userNameRef.current.value;
    let password = passwordRef.current.value;

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

    //  send as object
    dispatch(loginUserDetails({ username, password }));

    setUserNameError("");
    setPasswordError("");
  };

  //  redirect only after Redux confirms valid user
  useEffect(() => {
    if (isValidUser && currentUser) {
        // alert(`Welcome ${currentUser.userName}`);
        navigate("/");
      }
  }, [isValidUser, currentUser, navigate]);

  return (
    <div className="d-flex align-items-center justify-content-center m-5 pt-3">
      <form onSubmit={handleLogin} className="p-4 shadow rounded w-50">
        <h1 className="mb-4 text-center fw-bolder">Sign-In</h1>

        {/* Username */}
        <div className="mb-3 text-start">
          <label className="form-label">UserName :</label>
          <input
            type="text"
            placeholder="Enter username"
            ref={userNameRef}
            className="form-control bg-white"
          />
          {userNameError && <p className="text-danger">{userNameError}</p>}
        </div>

        {/* Password */}
        <div className="mb-3 text-start">
          <label className="form-label">Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
            className="form-control bg-white"
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}
        </div>

        <button className="btn bg-success mt-3 text-white w-100 fw-bold">sign in</button>


         <p> Create an account{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginTop: "20px",
                  cursor: "pointer",
                  
                }}
                onClick={() => navigate("/signUp")}
              >
                sign Up
              </span>
        </p>
      </form>

    </div>
  );
}

export default SignIn;
