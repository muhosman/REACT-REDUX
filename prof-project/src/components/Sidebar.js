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
  const styleLinkIcon = "2xl:w-6 2xl:h-6 w-5 h-5";
  const links = [
    {
      icon: (
        <BsGraphUp className={styleLinkIcon} style={{ color: "#6c584c" }} />
      ),
      label: "Dashboards",
      path: "/",
    },
    {
      icon: (
        <FaUserTie className={styleLinkIcon} style={{ color: "#6c584c" }} />
      ),
      label: "Firmalar",
      path: "/firm",
    },
    {
      icon: (
        <MdCoffeeMaker className={styleLinkIcon} style={{ color: "#6c584c" }} />
      ),
      label: "Cihazlar",
      path: "/device",
    },
    {
      icon: (
        <GiCoffeeBeans className={styleLinkIcon} style={{ color: "#6c584c" }} />
      ),
      label: "Ürünler",
      path: "/product",
    },
    {
      icon: <BsCart2 className={styleLinkIcon} style={{ color: "#6c584c" }} />,
      label: "Siparişler",
      path: "/order",
    },
    {
      icon: (
        <TbTruckDelivery
          className={styleLinkIcon}
          style={{ color: "#6c584c" }}
        />
      ),
      label: "Teslimat",
      path: "/delivery",
    },
    {
      icon: (
        <GrHomeRounded className={styleLinkIcon} style={{ color: "#6c584c" }} />
      ),
      label: "Depolar",
      path: "/store",
    },
    {
      icon: (
        <MdChecklistRtl
          className={styleLinkIcon}
          style={{ color: "#6c584c" }}
        />
      ),
      label: "Stoklar",
      path: "/stock",
    },
    {
      icon: (
        <TbReportMoney className={styleLinkIcon} style={{ color: "#6c584c" }} />
      ),
      label: "Faturalar",
      path: "/bill",
    },
    {
      icon: <FiUsers className={styleLinkIcon} style={{ color: "#6c584c" }} />,
      label: "Kullanıcılar",
      path: "/user",
    },
    {
      icon: (
        <TbReportSearch
          className={styleLinkIcon}
          style={{ color: "#6c584c" }}
        />
      ),
      label: "Raporlar",
      path: "/report",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-4 p-3 flex text-base items-center border-r-green-600 transition duration-500 hover:bg-gray-100"
        activeClassName="font-bold border-l-4 border-yellow-800 pl-2"
      >
        {link.icon}
        <p className="pl-2 2xl:flex hidden">{link.label}</p>
      </Link>
    );
  });

  return (
    <div className="top-0 left-0 fixed overflow-y-scroll flex bg-white mr-6">
      <div className="flex flex-col ">
        <div
          className="flex 2xl:flex-row flex-col p-4 items-center min-w"
          style={{ backgroundColor: "#f5ebe0" }}
        >
          <div>
            <img
              src={avatar}
              alt="Profile"
              className="2xl:w-16 w-12 opacity-50"
            />
          </div>
          <div className="flex p-2">
            <div>
              <p className="2xl:flex hidden" style={{ color: "#6c584c" }}>
                Osman Talha Aydın
              </p>
              <p className="2xl:flex hidden text-base">BAYINER</p>
              <button>
                <BiLogOut
                  className="2xl:w-6 2xl:h-6 w-5 h-5"
                  style={{ color: "#6c584c" }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col  px-4 bg-white pt-6 h-screen">
          {renderedLinks}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
