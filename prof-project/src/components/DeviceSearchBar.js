import { useState } from "react";
import Dropdown from "./DropDown";

function DeviceSearchBar({ devices, handleSearch, isSearch }) {
  const [deviceType, setDeviceType] = useState("");
  const [position, setPosition] = useState("");
  const [firmname, setFirmName] = useState("");
  const [inputIP, setInputIP] = useState("Ip");
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

  const firmNames = devices.map((device) => {
    return { label: device.firmName, value: device.firmName };
  });
  const positions = [
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

  const handleClickSearch = () => {
    handleSearch(filteredData, true);
  };
  const cleanBar = () => {
    handleSearch("", false);
    setPosition("");
    setFirmName("");
    setDeviceType("");
    setInputSerial("Serial");
    setInputIP("Ip");
  };

  const filteredData = () => {
    return devices.filter((device) => {
      console.log(
        "\n" +
          inputIP +
          "-" +
          device.ip +
          "-" +
          inputSerial +
          "-" +
          device.serialNo
      );
      //if no input the return the original
      //console.log(device.deviceTypeId);
      if (
        deviceType.value === undefined &&
        position.value === undefined &&
        firmname.value === undefined &&
        (inputIP === "Ip" || inputIP === undefined) &&
        (inputSerial === "Serial" || inputSerial === undefined)
      ) {
        return true;
      }
      //return the item which contains the user input
      //device.firmName.toLowerCase().includes(firmname) &&
      //`${device.deviceType || ""}`.toLowerCase().includes(deviceType)
      else if (
        (inputIP === "Ip" || inputIP === undefined
          ? true
          : device.ip.toLowerCase().includes(inputIP)) &&
        (inputSerial === "Serial" || inputSerial === undefined
          ? true
          : device.serialNo.toLowerCase().includes(inputSerial)) &&
        (position.value === undefined
          ? true
          : "Depoda".toLowerCase().includes(position.value)) &&
        (deviceType.value === undefined
          ? true
          : `${device.deviceTypeId || ""}`
              .toLowerCase()
              .includes(deviceType.value)) &&
        (firmname.value === undefined
          ? true
          : device.firmName
              .toLowerCase()
              .includes(firmname.value.toLowerCase()))
      ) {
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <div className="flex gap-3 flex-col w-full">
      <div className="grid grid-cols-4 gap-3 mb-6 ">
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
      <div className="grid grid-cols-4 gap-3">
        <input
          className="w-full h-12 input rounded-full shadow border-1 p-3"
          value={inputSerial}
          onChange={(e) => {
            var lowerCase = e.target.value.toLowerCase();
            setInputSerial(lowerCase);
          }}
          onClick={() => setInputSerial("")}
        />
        <input
          className="w-full h-12 input rounded-full shadow border-1 p-3"
          value={inputIP}
          onChange={(e) => {
            var lowerCase = e.target.value.toLowerCase();
            setInputIP(lowerCase);
          }}
          onClick={() => setInputIP("")}
        />
        <div className="overflow-x-auto col-end-5 col-span-2 flex justify-end">
          <div className="flex gap-3">
            <button
              className="px-8 hover:opacity-90 rounded-xl"
              style={{ backgroundColor: "#edede9" }}
              onClick={cleanBar}
            >
              Temizle
            </button>
            <button
              className="px-8 hover:opacity-90 rounded-xl"
              style={{ backgroundColor: "#bc6c25" }}
              onClick={handleClickSearch}
            >
              <p>Uygula</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceSearchBar;
