import SortableTable from "../components/SortableTable";
import DevicesContext from "../context/devices.js";
import { useEffect, useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import PaginationBar from "../components/PaginationBar";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/DeviceSearchBar";

function DevicePage() {
  const { fetchDevices, devices } = useContext(DevicesContext);
  const [position, setPosition] = useState(null);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [searchBar, setSearchBar] = useState(true);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  const hideSearchBar = () => {
    setSearchBar(searchBar === true ? false : true);
  };
  const positions = [
    { label: "Hepsi", value: "hepsi" },
    { label: "Depoda", value: "depoda" },
    { label: "Müşteride", value: "müşteride" },
    { label: "Plasiyerde", value: "plasiyerde" },
    { label: "Serviste", value: "serviste" },
  ];

  const handleSelectPosition = (option) => {
    setPosition(option);
  };

  const config = [
    {
      class: "w-4",
      label: (
        <button className="mx-auto flex flex-row justify-center  rounded-full items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 shadow">
          <AiOutlinePlus className="text-orange-400" />
          <div>Ekle</div>
        </button>
      ),
      render: () => (
        <div className="flex flex-row gap-2 p-5 justify-center">
          <button className="flex items-center p-2 rounded-full hover:rounded-full hover:p-2 transition duration-500 hover:bg-slate-200">
            <div>
              <BsFillPencilFill />
            </div>
          </button>
          <button className="flex items-center p-2 rounded-full hover:rounded-full hover:p-2 transition duration-500 hover:bg-slate-200">
            <div>
              <FaTrash />
            </div>
          </button>
        </div>
      ),
    },
    {
      label: "Cihaz Tipi",
      render: (device) => device.deviceTypeId,
      sortValue: (device) => device.deviceTypeId,
    },
    {
      label: "Firma",
      render: (device) => device.firmName,
      sortValue: (device) => device.firmName,
    },

    {
      label: "Kota",
      render: (device) => device.quota,
      sortValue: (device) => device.quota,
    },
    {
      label: "Tüketim",
      render: (device) => device.counter,
      sortValue: (device) => device.counter,
    },
    {
      label: "Durum",
      render: (device) => (device.isActive ? "Aktif" : "Pasif"),
      sortValue: (device) => device.isActive,
    },
    {
      label: "Seri No",
      render: (device) => device.serialNo,
    },
    {
      label: "GSM",
      render: (device) => (
        <div className="">
          <div className="flex flex-row gap-2 items-center w-20 bg-green-100 px-6 py-0.25 mb-1">
            <ImConnection className="4" />
            <p style={{ fontSize: "0.8rem" }}>5</p>
          </div>
          <div
            className="flex items-cente"
            style={{ fontSize: "0.6rem", lineHeight: "1rem" }}
          >
            <div>{device.lastConnectionDate}</div>
          </div>
        </div>
      ),
    },
    {
      label: "Konum",
      render: () => "Depoda",
    },
    {
      label: "İşlemler",
      render: () => (
        <div className=" flex w-auto flex-col items-center">
          <Dropdown
            options={positions}
            value={position}
            onChange={handleSelectPosition}
            search={false}
            barValue={"-İŞLEMLERİM-"}
          />
        </div>
      ),
    },
  ];

  const keyFn = (device) => {
    return device.firmName;
  };

  return (
    <div className="">
      <div className="flex my-9 justify-between items-center ">
        <div className="flex gap-3 ">
          <div>Cihaz Listesi</div>
          <div className="bg-yellow-600 px-2 rounded-full">
            {devices.length}
          </div>
        </div>
        <div>
          <button
            className="flex items-center rounded-full p-3 mr-6 gap-3 hover:opacity-90"
            style={{ backgroundColor: "#d5bdaf" }}
            onClick={hideSearchBar}
          >
            <p>FİLTRELE</p>
            <IoIosArrowUp
              className={`${
                searchBar ? "flex" : "hidden"
              } transition-all duration-500`}
            />
            <IoIosArrowDown
              className={`${
                searchBar ? "hidden" : "flex"
              } transition-all duration-500`}
            />
          </button>
        </div>
      </div>
      <div
        className={`flex bg-white rounded-xl p-10 mr-6 shadow-2xl mb-4 ${
          searchBar ? "flex" : "hidden"
        } transition-all duration-500`}
      >
        <SearchBar devices={devices} />
      </div>
      <div className="flex flex-col items-center gap-6 bg-white rounded-xl p-4 mr-6 shadow-2xl mb-5">
        <SortableTable
          data={devices}
          config={config}
          keyFn={keyFn}
          paginationNumber={paginationNumber}
        />
        <div className="flex flex-col items-center">
          <PaginationBar
            devices={devices}
            paginationNumber={paginationNumber}
            setPaginationNumber={setPaginationNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default DevicePage;
