import { useState } from "react";
import avatar from "../img/avatar.png";
import { IoMdSave } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    role: "admin",
    firmName: "Bayıner",
    name: "Muhammed Taha",
    lastName: "Bayındır",
    email: "bayıner@gmail.com",
    tel: "05551688290",
    createdInfo: "07.01.2023 17:37",
    updatedInfo: "07.01.2023 21:21",
  });
  const [userPassword, setUserPassword] = useState({
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  const input =
    "mt-4 h-12 input bg-transparent text-center bg-slate-100 rounded-lg";
  console.log(userInfo);

  return (
    <div className="mb-12 mr-24 ml-20">
      <div className=" grid grid-cols-3 items-center justify-center">
        <div className="col-span-3 col-start-2 col-end-3  flex items-center justify-center z-10">
          <img src={avatar} alt="Profile" className="w-64" />
        </div>
      </div>
      <div className="row-start-2 grid grid-cols-2 -mt-24">
        <div
          className=" shadow-2xl rounded-tl-2xl rounded-bl-2xl bg-gradient-to-l
          from-slate-300 to-slate-400 pt-20 pb-10 flex justify-center
        "
        >
          <div className="grid grid-cols-2 gap-10 justify-between">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold border-black border-b-2">İsim</p>
              <input
                className={`${input}`}
                value={userInfo.name}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, name: lowerCase });
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold border-black border-b-2">Soyisim</p>
              <input
                className={`${input}`}
                value={userInfo.lastName}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, lastName: lowerCase });
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center bg-transparent">
              <p className="font-bold border-black border-b-2 ">
                Telefon Numarası
              </p>
              <input
                className={`${input}`}
                value={userInfo.tel}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, tel: lowerCase });
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold border-black border-b-2">E-mail</p>
              <input
                className={`${input}`}
                value={userInfo.email}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, email: lowerCase });
                }}
              />
            </div>
            <div className="flex items-center justify-center col-span-2">
              <button className="items-center gap-2 mt-10 justify-center w-fit text-white 2xl:col-start-4 xl:col-start-3 md:col-start-2 flex bg-slate-800 rounded-br-2xl rounded-tl-2xl px-6 py-3 active:bg-slate-800  hover:bg-slate-500 transition-all duration-500">
                <IoMdSave className=" 2xl:w-6 2xl:h-6 w-5 h-5" />
                <p className="">Kaydet</p>
              </button>
            </div>
          </div>
        </div>
        <div
          className=" shadow-2xl rounded-tr-2xl rounded-br-2xl bg-gradient-to-r from-slate-300 to-slate-400 pt-20 pb-10 flex justify-center
        "
        >
          <div className="flex flex-col gap-4 justify-between">
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold border-black border-b-2">Şuanki Şifre</p>
              <input
                className={`${input}`}
                type="password"
                value={userPassword.password}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, password: lowerCase });
                }}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold border-black border-b-2">Yeni Şifre</p>
              <input
                className={`${input}`}
                type="password"
                value={userPassword.newPassword}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, newPassword: lowerCase });
                }}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold border-black border-b-2">
                Yeni Şifre Tekrar
              </p>
              <input
                className={`${input}`}
                type="password"
                value={userPassword.newPasswordConfirm}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;

                  setUserInfo({ ...userInfo, newPasswordConfirm: lowerCase });
                }}
              />
            </div>
            <div className="flex justify-center">
              <button className="items-center gap-2 mt-10 w-fit text-white 2xl:col-start-4 xl:col-start-3 md:col-start-2 flex bg-slate-800 rounded-br-2xl rounded-tl-2xl px-6 py-3 active:bg-slate-800  hover:bg-slate-500 transition-all duration-500">
                <RiLockPasswordLine className=" 2xl:w-6 2xl:h-6 w-5 h-5" />
                <p className="">Şifre Değiştir</p>
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default ProfilePage;
