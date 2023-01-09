import SortableTable from "../components/SortableTable";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { ImConnection } from "react-icons/im";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import PaginationBar from "../components/PaginationBar";
import SearchBar from "../components/Device/DeviceSearchBar";
import useDevicesContext from "../hooks/use-device-context";
import Modal from "../components/Modal";
import CreateDeviceModals from "../Modals/CreateDeviceModals";
import EditDeviceModals from "../Modals/EditDeviceModals";
import InfoDeviceModals from "../Modals/InfoDeviceModals";

function DevicePage() {
  const { fetchDevices, devices } = useDevicesContext();
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [searchBar, setSearchBar] = useState(true);
  const [filteredData, setFilteredData] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const [editId, setEditId] = useState("");

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);
  console.log(devices);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModel = () => {
    setShowModal(false);
  };

  const handleOpenInfoModal = () => {
    setShowInfoModal(true);
  };

  const handleCloseInfoModal = () => {
    setShowInfoModal(false);
  };

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const deviceCreateModal = (
    <Modal
      onClose={handleCloseModel}
      style={"inset-y-6 inset-x-20 lg:inset-x-40 xl:inset-x-60 2xl:inset-x-80"}
    >
      <CreateDeviceModals devices={devices} onClick={handleCloseModel} />
    </Modal>
  );

  const deviceEditModal = (
    <Modal
      onClose={handleCloseEditModal}
      style={"inset-y-6 inset-x-20 lg:inset-x-40 xl:inset-x-60 2xl:inset-x-80"}
    >
      <EditDeviceModals
        devices={devices}
        device={devices.find((device) => {
          return device.id === editId;
        })}
        onClick={handleCloseEditModal}
      />
    </Modal>
  );

  const deviceInfoModal = (
    <Modal onClose={handleCloseInfoModal} style={"inset-y-20 inset-x-80"}>
      <InfoDeviceModals />
    </Modal>
  );

  const hideSearchBar = () => {
    setSearchBar(searchBar === true ? false : true);
  };

  const handleSearch = (data, isSearch) => {
    setPaginationNumber(1);
    setFilteredData(data);
    setIsSearch(isSearch);
  };

  const config = [
    {
      class: "w-4",
      label: (
        <div>
          <button
            onClick={handleOpenModal}
            className="mx-auto flex flex-row justify-center  rounded-full items-center transition duration-500 hover:bg-slate-800 text-black hover:text-white font-semibold py-2 px-4 border border-gray-200 shadow"
          >
            <AiOutlinePlus />
            <div>Ekle</div>
          </button>
        </div>
      ),
      render: (device) => (
        <div className="flex flex-row justify-center">
          <button
            className="flex items-center justify-center py-2 pl-4 pr-3 rounded-full transition duration-500  hover:bg-slate-800 text-black hover:text-white"
            onClick={() => {
              setEditId(device.id);
              handleOpenEditModal();
            }}
          >
            <BsFillPencilFill className="2xl:w-8 2xl:h-8 w-5 h-5  " />
          </button>
          <button
            className="flex items-center justify-center py-2 pl-4 pr-3 rounded-full transition duration-500  hover:bg-slate-800 text-black hover:text-white"
            onClick={() => {
              handleOpenInfoModal();
            }}
          >
            <TbReportAnalytics className="2xl:w-8 2xl:h-8 w-5 h-5  " />
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
          <div className="flex flex-row gap-2 items-center w-20 text-slate-800 px-6 py-0.25 mb-1">
            <ImConnection
              className={`${
                device.isActive
                  ? "text-green-800"
                  : "animate-pulse text-red-500"
              }  delay-200 w-5 h-5`}
            />
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
  ];

  const keyFn = (device) => {
    return device.id;
  };

  return (
    <div className="overflow-x-auto mr-6 z-0">
      <div className="p-1.5 w-full inline-block align-middle">
        <div className="flex my-3 justify-between items-center ">
          <div className="flex gap-3 items-center text-slate-100">
            <div>Cihaz Listesi</div>
            <div className=" bg-slate-800 text-white px-2 rounded-full">
              {devices.length}
            </div>
          </div>
          <div>
            <button
              className="flex items-center rounded-full p-3 mr-6 gap-3 hover:bg-slate-400 bg-slate-300 text-slate-800"
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
            searchBar ? "block" : "hidden"
          }`}
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
      {showEditModal && deviceEditModal}
      {showInfoModal && deviceInfoModal}
    </div>
  );
}

export default DevicePage;
