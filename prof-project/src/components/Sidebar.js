import Link from "./Link";
import { BiLogOut } from "react-icons/bi";
import { BsGraphUp, BsCart2 } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdCoffeeMaker, MdChecklistRtl } from "react-icons/md";
import { TbTruckDelivery, TbReportSearch, TbReportMoney } from "react-icons/tb";
import { GrHomeRounded } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";

import avatar from "../img/avatar.png";
function Sidebar() {
  const links = [
    {
      icon: <BsGraphUp className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Dashboards",
      path: "/",
    },
    {
      icon: <FaUserTie className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Firmalar",
      path: "/firm",
    },
    {
      icon: <MdCoffeeMaker className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Cihazlar",
      path: "/device",
    },
    {
      icon: <GiCoffeeBeans className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Ürünler",
      path: "/product",
    },
    {
      icon: <BsCart2 className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Siparişler",
      path: "/order",
    },
    {
      icon: (
        <TbTruckDelivery className="w-6 h-6" style={{ color: "#6c584c" }} />
      ),
      label: "Teslimat",
      path: "/delivery",
    },
    {
      icon: <GrHomeRounded className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Depolar",
      path: "/store",
    },
    {
      icon: <MdChecklistRtl className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Stoklar",
      path: "/stock",
    },
    {
      icon: <TbReportMoney className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Faturalar",
      path: "/bill",
    },
    {
      icon: <FiUsers className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Kullanıcılar",
      path: "/user",
    },
    {
      icon: <TbReportSearch className="w-6 h-6" style={{ color: "#6c584c" }} />,
      label: "Raporlar",
      path: "/report",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-4 p-3 flex items-center border-r-green-600 transition duration-500 hover:bg-gray-100"
        activeClassName="font-bold border-l-4 border-yellow-800 pl-2"
      >
        {link.icon}
        <p className="pl-2">{link.label}</p>
      </Link>
    );
  });

  return (
    <div className="top-0 left-0 fixed overflow-y-scroll flex flex-col bg-white mr-6">
      <div className="flex flex-col">
        <div
          className="flex p-4 items-center"
          style={{ backgroundColor: "#f5ebe0" }}
        >
          <div>
            <img src={avatar} alt="Profile" className="w-16 opacity-50" />
          </div>
          <div className="ml-4 flex items-center">
            <div>
              <p style={{ color: "#6c584c" }}>Osman Talha Aydın</p>
              <p className="text-base">BAYINER</p>
              <button>
                <BiLogOut className="w-6 h-6" style={{ color: "#6c584c" }} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 bg-white pt-8 h-screen">
          {renderedLinks}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
