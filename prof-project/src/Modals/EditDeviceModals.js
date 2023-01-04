import { useState } from "react";
import Dropdown from "../components/DropDown";
import { AiOutlineWifi } from "react-icons/ai";
import { MdCoffeeMaker } from "react-icons/md";
import { IoMdAddCircle, IoMdSave } from "react-icons/io";
import { GiConfirmed, GiCancel } from "react-icons/gi";
import useDevicesContext from "../hooks/use-device-context";

function EditDeviceModals({ devices, onClick, Id }) {
  const { editDevicesById } = useDevicesContext();
  const [input, setInput] = useState(
    devices.find((device) => {
      return device.id === Id;
    })
  );
  console.log(input);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleOpenModal = () => {
    setShowConfirmModal(true);
    console.log(input);
  };

  const handleCloseModel = (bool) => {
    if (bool) {
      onClick();
    } else {
      setShowConfirmModal(false);
    }
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
    setInput({
      deviceTypeId: input.deviceTypeId,
      firmName: option.value,
      ip: input.ip,
      serialNo: input.serialNo,
      userPassword: input.userPassword,
      adminPassword: input.adminPassword,
      gsmNo: input.gsmNo,
      note: input.note,
      isActive: input.isActive,
    });
  };
  const handleSelectDevice = (option) => {
    setInput({
      deviceTypeId: option.value,
      firmName: input.firmName,
      ip: input.ip,
      serialNo: input.serialNo,
      userPassword: input.userPassword,
      adminPassword: input.adminPassword,
      gsmNo: input.gsmNo,
      note: input.note,
      isActive: input.isActive,
    });
  };
  return (
    <div className=" text-sm bg-white">
      <div
        className={` flex items-center justify-center absolute  ${
          showConfirmModal ? "flex" : "hidden"
        } w-full h-full z-10 bg-opacity-50 transition-all duration-100`}
      >
        <div className=" flex flex-col gap-3 bg-slate-600  mx-auto w-fit p-1 rounded-xl ">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center">
            <p className="mb-4">
              "{input.deviceTypeId}" tipindeki cihazı yüklemek istiyor musunuz?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleCloseModel(true)}
                className="flex items-center bg-slate-800 text-white p-2 rounded-xl border-4
              hover:bg-white hover:border-slate-800 hover:text-slate-800"
              >
                <GiConfirmed />
                Onay
              </button>
              <button
                onClick={() => handleCloseModel(false)}
                className="flex items-center bg-white border-4 rounded-xl p-2 hover:bg-slate-600 hover:text-white"
              >
                <GiCancel />
                İptal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-5 gap-6 mt-10 p-16 items-center justify-center overflow-scroll">
        <div className="flex px-6 py-3 bg-slate-800 top-0 -left-0 absolute w-fitt h-fitt rounded-tl-2xl rounded-br-2xl ">
          <div className="flex justify-center items-center pt-2">
            <MdCoffeeMaker className="mr-2 w-6 h-6 text-white" />
            <p className=" text-white">Cihaz Düzenleme</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-6 mb-2">
            <p className="col-span-2 col-end-3">Cihaz Tipi</p>
            <p className="col-span-2 col-end-5">Firma</p>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2 col-end-3">
              <Dropdown
                options={deviceTypes}
                value={{
                  label: input.deviceTypeId,
                  value: input.deviceTypeId,
                }}
                onChange={handleSelectDevice}
                search={false}
                barValue={"-Cihaz Tipi-"}
              />
            </div>
            <div className="col-span-2 col-end-5">
              <Dropdown
                options={firmNames}
                value={{
                  label: input.firmName,
                  value: input.firmName,
                }}
                onChange={handleSelectFirmName}
                search={true}
                barValue={"-Firma-"}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div>
              <div className="flex gap-3 ">
                <p className="pl-2">IP</p>
                <button className="flex gap-1">
                  <AiOutlineWifi />
                  <p>Bağlan</p>
                </button>
              </div>
              <input
                className="w-full h-12 input rounded-full shadow border-1 p-3"
                value={input.ip}
                maxLength="10"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  var lowerCase = e.target.value;
                  setInput({
                    ip: lowerCase,
                  });
                }}
              />
            </div>
          </div>
          <div>
            <p className="ml-3 mb-2">Kota</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.quota}
              disabled
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Dönem</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.counter}
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="ml-3 mb-2">Seri No</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.serialNo}
              disabled
            />
          </div>
          <div>
            <p className="ml-3 mb-2">GSM No</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.gsmNo}
              maxLength="11"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              disabled
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Imei</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.imei}
              maxLength="11"
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="mb-2 ml-3">Kullanıcı Şifresi</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.userPassword}
              maxLength="25"
              onChange={(e) => {
                var lowerCase = e.target.value;
                setInput({
                  userPassword: lowerCase,
                });
              }}
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Yönetici Şifresi</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.adminPassword}
              maxLength="25"
              onChange={(e) => {
                var lowerCase = e.target.value;
                setInput({
                  adminPassword: lowerCase,
                });
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <p className="ml-3 mb-2">Açıklama</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.note}
              maxLength="100"
              onChange={(e) => {
                var lowerCase = e.target.value;
                setInput({
                  deviceTypeId: input.deviceTypeId,
                  firmName: input.firmName,
                  ip: input.ip,
                  serialNo: input.serialNo,
                  userPassword: input.userPassword,
                  adminPassword: input.adminPassword,
                  gsmNo: input.gsmNo,
                  note: lowerCase,
                  isActive: input.isActive,
                });
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 h-fit items-center">
          <div>
            <label className="flex px-3 w-fit">
              <input
                type="checkbox"
                checked={input.isActive}
                onChange={() =>
                  setInput({
                    isActive: !input.isActive,
                  })
                }
              />
              <p className="ml-2">Durum</p>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="ml-3 mb-2">Oluşturulma Tarihi</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.createdInfo}
              disabled
            />
          </div>
          <div>
            <p className="ml-3 mb-2">Değiştirilme Tarihi</p>
            <input
              className="w-full h-12 input rounded-full shadow border-1 p-3"
              value={input.updatedInfo}
              disabled
            />
          </div>
        </div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-end">
          <button
            onClick={handleOpenModal}
            className="items-center justify-center w-fit text-white mt-11 2xl:col-start-4 xl:col-start-3 md:col-start-2 flex bg-slate-800 rounded-br-2xl rounded-tl-2xl px-6 py-3 active:bg-slate-800  hover:bg-slate-500 transition-all duration-500"
          >
            <IoMdSave className=" 2xl:w-6 2xl:h-6 w-5 h-5" />
            <p className="">Kaydet</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDeviceModals;
