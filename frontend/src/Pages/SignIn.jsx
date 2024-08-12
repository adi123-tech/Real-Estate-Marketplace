import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../../redux/user/userSlice";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [empty, setEmpty] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      try {
        dispatch(signInStart());
        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await response.json();
        if (data.success == false) {
          dispatch(signInFailure(data.message));
        } else {
          dispatch(signInSuccess(data));
          navigate("/");
        }
      } catch (err) {
        dispatch(signInFailure(err.message));
      }
    } else {
      setEmpty(true);
    }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
      {empty && <p className="text-red-500 mt-5">Fill the empty fields</p>}
    </div>
  );
}

export default SignIn;
