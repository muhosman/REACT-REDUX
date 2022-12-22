import SortableTable from "../components/SortableTable";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import PaginationBar from "../components/PaginationBar";
import Dropdown from "../components/DropDown";
import SearchBar from "../components/Device/DeviceSearchBar";
import useDevicesContext from "../hooks/use-device-context";
import Modal from "../components/Modal";
import CreateDeviceModals from "../Modals/CreateDeviceModals";

function DevicePage() {
  const { fetchDevices, devices } = useDevicesContext();
  const [position, setPosition] = useState(null);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [searchBar, setSearchBar] = useState(true);
  const [filteredData, setFilteredData] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModel = () => {
    setShowModal(false);
  };

  const deviceCreateModal = (
    <Modal onClose={handleCloseModel}>
      <CreateDeviceModals devices={devices} onClick={handleCloseModel} />
    </Modal>
  );

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  const hideSearchBar = () => {
    setSearchBar(searchBar === true ? false : true);
  };
  const handleSearch = (data, isSearch) => {
    setPaginationNumber(1);
    setFilteredData(data);
    setIsSearch(isSearch);
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
        <div>
          <button
            onClick={handleOpenModal}
            className="mx-auto flex flex-row justify-center  rounded-full items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 shadow"
          >
            <AiOutlinePlus className="text-orange-400" />
            <div>Ekle</div>
          </button>
        </div>
      ),
      render: () => (
        <div className="flex flex-row gap-2 justify-center">
          <button className="flex items-center hover:rounded-full hover:p-2 transition duration-500 hover:bg-slate-200">
            <div>
              <BsFillPencilFill className="2xl:w-6 2xl:h-6 w-5 h-5 opacity-60" />
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
        <div className="flex flex-col justify-center items-center">
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
    <div className="overflow-x-auto mr-6 z-0">
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="flex my-3 justify-between items-center ">
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
          className={`bg-white rounded-xl p-10 shadow mb-4 ${
            searchBar ? "flex" : "hidden"
          } transition-all duration-500`}
        >
          <SearchBar
            devices={devices}
            handleSearch={handleSearch}
            isSearch={isSearch}
          />
        </div>
        <div className="flex flex-col items-center gap-6 bg-white rounded-xl p-6 mb-5 overflow-hidden shadow border ">
          <SortableTable
            data={isSearch ? filteredData : devices}
            config={config}
            keyFn={keyFn}
            paginationNumber={paginationNumber}
          />
          <div className="flex flex-col items-center">
            <PaginationBar
              devices={isSearch ? filteredData : devices}
              paginationNumber={paginationNumber}
              setPaginationNumber={setPaginationNumber}
            />
          </div>
        </div>
      </div>
      {showModal && deviceCreateModal}
    </div>
  );
}

export default DevicePage;
