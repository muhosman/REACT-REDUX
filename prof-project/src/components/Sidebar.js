import { NavLink, Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { BsGraphUp, BsCart2 } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { MdCoffeeMaker, MdChecklistRtl } from "react-icons/md";
import { TbTruckDelivery, TbReportSearch, TbReportMoney } from "react-icons/tb";
import { RiHomeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import avatar from "../img/avatar.png";
import useAuth from "../hooks/useAuth";

function Sidebar() {
  const styleLinkIcon = "2xl:w-6 2xl:h-6 w-5 h-5";
  const activeClassName = "font-bold border-l-4 border-white pl-2";
  const { auth } = useAuth();

  const links = [
    {
      icon: <BsGraphUp className={styleLinkIcon} />,
      label: "Dashboards",
      path: "/dashboard",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <FaUserTie className={styleLinkIcon} />,
      label: "Firmalar",
      path: "/firm",
      roles: [],
    },
    {
      icon: <MdCoffeeMaker className={styleLinkIcon} />,
      label: "Cihazlar",
      path: "/device",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <GiCoffeeBeans className={styleLinkIcon} />,
      label: "Ürünler",
      path: "/product",
      roles: [],
    },
    {
      icon: <BsCart2 className={styleLinkIcon} />,
      label: "Siparişler",
      path: "/order",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <TbTruckDelivery className={styleLinkIcon} />,
      label: "Teslimat",
      path: "/delivery",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <RiHomeLine className={styleLinkIcon} />,
      label: "Depolar",
      path: "/store",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <MdChecklistRtl className={styleLinkIcon} />,
      label: "Stoklar",
      path: "/stock",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <TbReportMoney className={styleLinkIcon} />,
      label: "Faturalar",
      path: "/bill",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <FiUsers className={styleLinkIcon} />,
      label: "Kullanıcılar",
      path: "/users",
      roles: [1984, 2001, 5150],
    },
    {
      icon: <TbReportSearch className={styleLinkIcon} />,
      label: "Raporlar",
      path: "/report",
      roles: [1984, 2001, 5150],
    },
  ];

  const renderedLinks = links.map((link) => {
    if (auth?.roles?.find((role) => link.roles?.includes(role)) !== undefined)
      return (
        <NavLink
          key={link.label}
          to={link.path}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className="py-5 px-3 flex text-base items-center transition duration-500 hover:bg-white hover:text-black">
            {link.icon}
            <p className="pl-2 2xl:flex xl:flex hidden">{link.label}</p>
          </div>
        </NavLink>
      );
  });

  return (
    <div className="top-0 left-0 fixed overflow-y-scroll flex mr-6">
      <div className="flex flex-col w-fit">
        <div className="flex 2xl:flex-row xl:flex-row flex-col p-4 items-center min-w bg-gradient-to-r from-slate-600 to-slate-700">
          <div>
            <img src={avatar} alt="Profile" className="2xl:w-16 w-12 " />
          </div>
          <div className="flex p-2">
            <div>
              <p className="2xl:flex xl:flex hidden text-base text-white">
                Osman Talha Aydın
              </p>
              <p className="2xl:flex xl:flex hidden text-base text-white">
                BAYINER
              </p>
              <NavLink to={"/login"}>
                <BiLogOut className="2xl:w-6 2xl:h-6 w-5 h-5 transition duration-500   text-white hover:text-slate-500" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 bg-slate-800 pt-6 h-screen text-white">
          {renderedLinks}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
