import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registeredUsers } from "../store";


function SignUp() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log("Form Data:", data);

    // Save user in Redux
    dispatch(registeredUsers(data));

    // alert("Signup successful!");

    //  Redirect to SignIn page
    navigate("/signIn");
  };

  const password = watch("password");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light mt-4 pt-4">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center  mb-4 fw-bolder">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          {/* Username */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter username"
              {...register("userName", { required: "Username is required" })}
            />
            {errors.userName && (
              <p className="text-danger small">{errors.userName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-danger small">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger small">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Please confirm password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-danger small">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-3 fw-bold"
          >
            Sign Up
          </button>
        </form>
        {/* message */}
         <p> Already have an account{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  marginTop: "20px",
                  cursor: "pointer",
                  
                }}
                onClick={() => navigate("/signIn")}
              >
                sign in
              </span>
        </p>
      </div>
      
    </div>
  );
}

export default SignUp;
