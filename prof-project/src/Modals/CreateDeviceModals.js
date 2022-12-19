import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import Dropdown from "../components/DropDown";
import { AiOutlineWifi } from "react-icons/ai";
function CreateDeviceModals({ devices }) {
  const [deviceType, setDeviceType] = useState("");
  const [firmname, setFirmName] = useState("");
  const [inputIP, setInputIP] = useState("Ip");

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
    <div className="grid grid-rows-5 gap-6">
      <div>
        <div className="grid grid-cols-6 gap-6">
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
          <p className="col-span-2 col-end-3">Seri No</p>
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
        <div>
          <p className="col-span-2 col-end-3">Kota</p>
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
        <div>
          <p className="col-span-2 col-end-3">Dönem</p>
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
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default CreateDeviceModals;
