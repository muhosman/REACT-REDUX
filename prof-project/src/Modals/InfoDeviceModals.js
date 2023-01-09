import { useState } from "react";
import SortableTable from "../components/SortableTable";
import PaginationBar from "../components/PaginationBar";
import { MdOutlineReport } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";

function InfoDeviceModals() {
  const [paginationNumber, setPaginationNumber] = useState(1);
  const fault = [
    {
      id: 0,
      code: 400,
      name: "Isıtıcı Arızası",
      note: "Cihaz kahve yapımı sırasında fazla ısındı.",
      createdInfo: "20.01.2022 12:45",
    },
    {
      id: 1,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı çalışmıyor.",
      createdInfo: "25.01.2022 15:12",
    },
    {
      id: 2,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı kırıldı.",
      createdInfo: "14.02.2022 14:35",
    },
    {
      id: 3,
      code: 400,
      name: "Isıtıcı Arızası",
      note: "Kahve soğuk yapıyor.",
      createdInfo: "25.01.2022 10:24",
    },
    {
      id: 4,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı çalışmıyor.",
      createdInfo: "25.01.2022 15:12",
    },
    {
      id: 6,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı kırıldı.",
      createdInfo: "14.02.2022 14:35",
    },
    {
      id: 7,
      code: 400,
      name: "Isıtıcı Arızası",
      note: "Kahve soğuk yapıyor.",
      createdInfo: "25.01.2022 10:24",
    },
    {
      id: 8,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı çalışmıyor.",
      createdInfo: "25.01.2022 15:12",
    },
    {
      id: 9,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı kırıldı.",
      createdInfo: "14.02.2022 14:35",
    },
    {
      id: 10,
      code: 400,
      name: "Isıtıcı Arızası",
      note: "Kahve soğuk yapıyor.",
      createdInfo: "25.01.2022 10:24",
    },
    {
      id: 11,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı çalışmıyor.",
      createdInfo: "25.01.2022 15:12",
    },
    {
      id: 12,
      code: 401,
      name: "Karıştırıcı Arızası",
      note: "Karıştıcı kırıldı.",
      createdInfo: "14.02.2022 14:35",
    },
    {
      id: 13,
      code: 400,
      name: "Isıtıcı Arızası",
      note: "Cihaz kahve yapımı sırasında fazla ısındı.",
      createdInfo: "25.01.2022 10:24",
    },
  ];

  const config = [
    {
      label: "Arıza Kodu",
      render: (fault) => fault.code,
      sortValue: (fault) => fault.code,
    },
    {
      label: "Arıza İsmi",
      render: (fault) => fault.name,
      sortValue: (fault) => fault.name,
    },
    {
      label: "Arıza Detayı",
      render: (fault) => fault.note,
    },
    {
      label: "Arıza Tarihi",
      render: (fault) => fault.createdInfo,
    },
  ];

  const keyFn = (fault) => {
    return fault.id;
  };

  return (
    <div className=" text-sm bg-white">
      <div className="flex px-6 py-3 z-10 transition-all duration-500 cursor-pointer text-white border-b-2 border-r-2 border-slate-800 hover:bg-white hover:text-slate-800 bg-slate-800 top-0 -left-0 gap-4 absolute w-fit h-fit rounded-tl-2xl rounded-br-2xl ">
        <div className="flex justify-center items-center pt-2 ">
          <MdOutlineReport className="mr-2 w-6 h-6" />
          <p className="">Arıza Bilgisi</p>
        </div>
      </div>
      <div className="flex px-6 py-3 transition-all duration-500 cursor-pointer text-white border-b-2 border-slate-800 border-r-2 hover:bg-white hover:text-slate-800 bg-slate-800 top-0 left-36 gap-4 absolute w-fit h-fit rounded-tl-2xl rounded-br-2xl ">
        <div className="flex justify-center items-center pt-2">
          <HiInformationCircle className="mr-2 w-6 h-6 " />
          <p className=" ">Cihaz Bilgisi</p>
        </div>
      </div>

      {/* Device Type And Firm name */}
      <div className="flex flex-col items-center gap-6 p-6 mt-12 overflow-hidden ">
        <SortableTable
          data={fault}
          config={config}
          keyFn={keyFn}
          paginationNumber={paginationNumber}
        />
        <div className="flex flex-col items-center">
          <PaginationBar
            devices={fault}
            paginationNumber={paginationNumber}
            setPaginationNumber={setPaginationNumber}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoDeviceModals;
