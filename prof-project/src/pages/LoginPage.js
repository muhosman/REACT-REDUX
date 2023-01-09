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
  const [login, setLogin] = useState(true);

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
    */ const roles = [5150];
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
    <div className="flex flex-col justify-center min-h-screen overflow-hidden">
      <div
        className={`w-full p-16 m-auto rounded-2xl  transition-all duration-500 ${
          login ? "bg-slate-900" : "bg-slate-600"
        }   text-white shadow-2xl max-w-md`}
      >
        <div className="flex flex-col items-center">
          <GiCoffeeBeans className="text-center w-24 h-24" />
          <p>Bayıner Kahve</p>
        </div>
        <form
          className={`mt-16 ${login ? "flex flex-col" : "hidden"}`}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className="block w-full px-4 py-2 mt-2 border rounded-md text-black focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="">
            <label htmlFor="username" className="block text-sm font-semibold">
              Şifre
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
            <div
              onClick={() => setLogin(false)}
              className="text-xs  hover:underline p-6 cursor-pointer"
            >
              Şifremi Unuttum
            </div>
            <button className=" w-fit px-4 py-2 tracking-wide border-white border-2 text-white transition-colors duration-200 transform bg-slate-800 rounded-md hover:bg-white hover:text-slate-800 focus:outline-none focus:bg-slate-800">
              <p className="pl-2">Giriş</p>
            </button>
          </div>
        </form>
        <form className={`mt-16 ${login ? "hidden" : ""}`} onSubmit={""}>
          <div className="mb-2">
            <label htmlFor="username" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="text"
              id="Email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              className="block w-full px-4 py-2 mt-2 border rounded-md text-black focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <div
              onClick={() => setLogin(true)}
              className="text-xs  hover:underline p-6 cursor-pointer"
            >
              Giriş Sayfasına Dön
            </div>
            <button className=" w-fit px-4 py-2 tracking-wide border-white border-2 text-white transition-colors duration-200 transform bg-slate-800 rounded-md hover:bg-white hover:text-slate-800 focus:outline-none focus:bg-slate-800">
              <p className="pl-2">Gönder</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
