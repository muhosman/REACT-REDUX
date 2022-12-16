import { useState } from "react";
import Dropdown from "./DropDown";

function DeviceSearchBar({ devices }) {
  const [deviceType, setDeviceType] = useState(null);
  const [position, setPosition] = useState(null);
  const [firmname, setFirmName] = useState(null);
  const [inputIP, setInputIP] = useState("IP");
  const [inputSerial, setInputSerial] = useState("Serial");

  const handleSelectDevice = (option) => {
    setDeviceType(option);
  };
  const handleSelectPosition = (option) => {
    setPosition(option);
  };
  const handleSelectFirmName = (option) => {
    setFirmName(option);
  };

  const cleanBar = () => {
    setPosition("");
    setFirmName("");
    setDeviceType("");
    setInputSerial("");
    setInputIP("");
  };

  const positions = [
    { label: "Hepsi", value: "hepsi" },
    { label: "Depoda", value: "depoda" },
    { label: "Müşteride", value: "müşteride" },
    { label: "Plasiyerde", value: "plasiyerde" },
    { label: "Serviste", value: "serviste" },
  ];

  const deviceTypes = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];

  const filteredData = devices.filter((device) => {
    //if no input the return the original
    if (deviceType === "" && position === "" && firmname === "") {
      return device;
    }
    //return the item which contains the user input
    else {
      return (
        device.firmName.toLowerCase().includes(firmname) &&
        "Depoda".toLowerCase().includes(position) &&
        device.deviceType.toLowerCase().includes(deviceType)
      );
    }
  });

  const firmNames = devices.map((device) => {
    return { label: device.firmName, value: device.firmName };
  });

  return (
    <div className="flex gap-3 flex-col">
      <div className="flex gap-3 mb-8">
        <Dropdown
          options={positions}
          value={position}
          onChange={handleSelectPosition}
          search={false}
          barValue={"-Konum-"}
        />
        <Dropdown
          options={deviceTypes}
          value={deviceType}
          onChange={handleSelectDevice}
          search={false}
          barValue={"-Cihaz Tipi-"}
        />
        <Dropdown
          options={firmNames}
          value={firmname}
          onChange={handleSelectFirmName}
          search={true}
          barValue={"-Firma-"}
        />
      </div>
      <div className="flex gap-3">
        <input
          className="w-48 h-12 input rounded-full shadow border-1 p-3"
          value={inputSerial}
          onChange={(e) => {
            var lowerCase = e.target.value.toLowerCase();
            setInputSerial(lowerCase);
          }}
          onClick={() => setInputSerial("")}
        />
        <input
          className="w-48 h-12 input rounded-full shadow border-1 p-3"
          value={inputIP}
          onChange={(e) => {
            var lowerCase = e.target.value.toLowerCase();
            setInputIP(lowerCase);
          }}
          onClick={() => setInputIP("")}
        />
        <div className="flex gap-4 overflow-x-auto ">
          <button
            className="p-3 hover:opacity-90 rounded-xl"
            style={{ backgroundColor: "#edede9" }}
            onClick={cleanBar}
          >
            Temizle
          </button>
          <button
            className="p-3 hover:opacity-90 rounded-xl"
            style={{ backgroundColor: "#bc6c25" }}
          >
            <p>Uygula</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceSearchBar;
