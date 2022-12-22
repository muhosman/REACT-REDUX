import { useEffect, useState } from "react";
import Dropdown from "../components/DropDown";
import { AiOutlineWifi } from "react-icons/ai";
import { MdCoffeeMaker } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { GiConfirmed, GiCancel } from "react-icons/gi";

import { Hidden } from "@mui/material";

function CreateDeviceModals({ devices, onClick }) {
  const [deviceType, setDeviceType] = useState("");
  const [firmname, setFirmName] = useState("");
  const [inputIP, setInputIP] = useState("Ip");
  const [inputSerialNo, setSerialNo] = useState("Serial No");
  const [inputUserPW, setUserPW] = useState("Şifre");
  const [inputAdminPW, setAdminPW] = useState("Şifre");
  const [inputGSM, setGSM] = useState("GSM No");
  const [inputExplanation, setExplanation] = useState("");

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleOpenModal = () => {
    setShowConfirmModal(true);
  };
  const handleCloseModel = (bool) => {
    if (bool) onClick();
    else setShowConfirmModal(false);
  };

  const deviceTypes = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];
  const firmNames = devices.map((device) => {
    return { label: device.firmName, value: device.firmName };
  });
  const handleSelectFirmName = (option) => {
    setFirmName(option);
  };
  const handleSelectDevice = (option) => {
    setDeviceType(option);
  };
  return (
    <div>
      <div
        className={` flex items-center justify-center absolute  ${
          showConfirmModal ? "flex" : "hidden"
        } w-full h-full z-10 bg-opacity-50 bg-gray-100 transition-all duration-100`}
      >
        <div className=" flex flex-col gap-3 bg-yellow-800  mx-auto w-fit p-1 rounded-xl ">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center">
            <p className="mb-4">
              "{deviceType.value}" tipindeki cihazı yüklemek istiyor musunuz?
            </p>
            <div className="flex gap-2">
              <button
                className="flex items-center bg-yellow-800 text-white p-2 rounded-xl
              hover:bg-yellow-600"
              >
                <GiConfirmed />
                Onay
              </button>
              <button
                onClick={() => handleCloseModel(false)}
                className="flex items-center bg-white text-yellow-800 border-4 rounded-xl p-2 hover:bg-yellow-600 hover:text-white"
              >
                <GiCancel />
                İptal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-5 gap-6 mt-10 px-12 py-6 items-center justify-center">
        <div className="flex px-6 py-3 bg-yellow-900 top-0 -left-0 absolute w-fitt h-fitt rounded-tl-2xl rounded-br-2xl ">
          <div className="flex justify-center items-center pt-2">
            <MdCoffeeMaker className="mr-2 w-6 h-6 text-white" />
            <p className=" text-white">Cihaz Ekle</p>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-6 gap-6 mb-2">
            <p className="col-span-2 col-end-3">Cihaz Tipi</p>
            <p className="col-span-2 col-end-5">Firma</p>
            <p className="pl-2">IP</p>
          </div>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2 col-end-3">
              <Dropdown
                options={deviceTypes}
                value={deviceType}
                onChange={handleSelectDevice}
                search={false}
                barValue={"-Cihaz Tipi-"}
              />
            </div>
            <div className="col-span-2 col-end-5">
              <Dropdown
                options={firmNames}
                value={firmname}
                onChange={handleSelectFirmName}
                search={true}
                barValue={"-Firma-"}
              />
            </div>
            <div>
              <input
                className="w-full h-12 input rounded-full shadow border-1 p-3"
                value={inputIP}
                onChange={(e) => {
                  var lowerCase = e.target.value.toLowerCase();
                  setInputIP(lowerCase);
                }}
                onClick={() => setInputIP("")}
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="flex gap-3">
                <AiOutlineWifi />
                <p>Bağlan</p>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="ml-3 mb-2">Seri No</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={inputSerialNo}
              onChange={(e) => {
                var lowerCase = e.target.value.toLowerCase();
                setSerialNo(lowerCase);
              }}
              onClick={() => setSerialNo("")}
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Kota</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value="0"
              disabled
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Dönem</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value="0"
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="mb-2 ml-3">Kullanıcı Şifresi</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={inputUserPW}
              onChange={(e) => {
                var lowerCase = e.target.value.toLowerCase();
                setUserPW(lowerCase);
              }}
              onClick={() => setUserPW("")}
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Yönetici Şifresi</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={inputAdminPW}
              onChange={(e) => {
                var lowerCase = e.target.value.toLowerCase();
                setAdminPW(lowerCase);
              }}
              onClick={() => setAdminPW("")}
            />
          </div>
          <div>
            <p className="ml-3 mb-2">GSM No</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={inputGSM}
              onChange={(e) => {
                var lowerCase = e.target.value.toLowerCase();
                setGSM(lowerCase);
              }}
              onClick={() => setGSM("")}
            />
          </div>
        </div>
        <div>
          <div>
            <p className="ml-3 mb-2">Açıklama</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={inputExplanation}
              onChange={(e) => {
                var lowerCase = e.target.value;
                setExplanation(lowerCase);
              }}
              onClick={() => setExplanation("")}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 h-fit items-center">
          <div>
            <label className="flex px-3 w-fit">
              <input type="checkbox" />
              <p className="ml-2">Durum</p>
            </label>
          </div>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <button
              onClick={handleOpenModal}
              className="active:text-yellow-800 items-center text-white mt-11 2xl:col-start-4 xl:col-start-3 md:col-start-2 flex bg-yellow-800 rounded-br-2xl rounded-tl-2xl px-6 py-3 active:bg-white  hover:bg-yellow-600 transition-all duration-500"
            >
              <IoMdAddCircle className=" 2xl:w-6 2xl:h-6 w-5 h-5" />
              <p className="">Ekle</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateDeviceModals;
