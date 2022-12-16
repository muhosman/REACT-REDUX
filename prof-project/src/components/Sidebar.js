import Link from "./Link";
import { BiLogOut } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { MdCoffeeMaker } from "react-icons/md";

import avatar from "../img/avatar.png";
function Sidebar() {
  const links = [
    {
      icon: <BsGraphUp style={{ color: "#6c584c" }} />,
      label: "Dashboards",
      path: "/",
    },
    {
      icon: <MdCoffeeMaker style={{ color: "#6c584c" }} />,
      label: "Cihazlar",
      path: "/device",
    },
    {
      icon: <BiLogOut style={{ color: "#6c584c" }} />,
      label: "Çıkış Yap",
      path: "/",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-4 flex items-center border-r-green-600 transition duration-500 hover:bg-gray-100 hover:rounded-full "
        activeClassName="font-bold border-l-4 border-yellow-800 pl-2"
      >
        {link.icon}
        <p className="pl-2">{link.label}</p>
      </Link>
    );
  });

  return (
    <div className="fixed top-0 left-0 overflow-y-scroll flex flex-col items-start  bg-white w-50">
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
