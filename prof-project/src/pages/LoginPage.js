import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import Link from "../components/Link";
import useAuth from "../hooks/useAuth";
export default function LoginPage() {
  const { setAuth } = useAuth();

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-slate-900 rounded-2xl text-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex flex-col items-center">
          <GiCoffeeBeans className="text-center w-24 h-24" />
          <p>Bayıner Kahve</p>
        </div>
        <form className="mt-6">
          <div className="mb-2">
            <label for="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 border rounded-md text-black focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label for="password" className="block text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 border rounded-md text-black focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6 flex flex-col items-center">
            <a href="#" className="text-xs  hover:underline p-6">
              Forget Password?
            </a>
            <button className=" w-fit px-4 py-2 tracking-wide border-white border-2 text-white transition-colors duration-200 transform bg-slate-800 rounded-md hover:bg-white hover:text-slate-800 focus:outline-none focus:bg-slate-800">
              <Link to={"/dashboard"}>
                <p className="pl-2 2xl:flex hidden">Login</p>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
