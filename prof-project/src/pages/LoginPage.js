import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { redirect, useNavigate, useLocation } from "react-router-dom";

export default function LoginPage() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = "/dashboard";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /*

      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
    */ const roles = [2001, 5150];
      const accessToken = "response?.data?.accessToken";

      console.log(from);
      setAuth({ user, pwd, roles, accessToken });
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="relativ flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-slate-900 rounded-2xl text-white shadow-md lg:max-w-xl">
        <div className="flex flex-col items-center">
          <GiCoffeeBeans className="text-center w-24 h-24" />
          <p>Bayıner Kahve</p>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="username" className="block text-sm font-semibold">
              UserName
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className="block w-full px-4 py-2 mt-2 border rounded-md text-black focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              className="block w-full px-4 py-2 mt-2 border rounded-md text-black focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6 flex flex-col items-center">
            <a href="#" className="text-xs  hover:underline p-6">
              Forget Password?
            </a>
            <button className=" w-fit px-4 py-2 tracking-wide border-white border-2 text-white transition-colors duration-200 transform bg-slate-800 rounded-md hover:bg-white hover:text-slate-800 focus:outline-none focus:bg-slate-800">
              <p className="pl-2">Login</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
