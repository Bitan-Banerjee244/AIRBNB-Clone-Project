import rentalLogo from "../assets/logoairbnb.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { MdVilla } from "react-icons/md";
import { MdBungalow } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { BsHousesFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { useSelector } from "react-redux";

function Nav() {
  let currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="relative">
      <div
        id="top-nav"
        className="w-screen h-[100px]  flex items-center justify-around px-4 border-2 border-[#80808044] border-solid"
      >
        {/* Logo */}
        <div className="w-[20vw] h-full flex items-center">
          <img
            src={rentalLogo}
            alt="Rental Logo"
            className="w-[140px] h-[120px] object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex w-[700px] h-[70px] bg-white rounded-[30px] px-4 shadow-lg items-center">
          <input
            type="text"
            placeholder="Search for homes and mansion"
            className="flex-1 h-full text-gray-700 px-4 bg-transparent outline-none"
          />
          <FaSearch className="ml-3 text-red-600 cursor-pointer text-xl" />
        </div>

        {/* Right Side Placeholder */}
        <div className="w-[100px] h-[60%] rounded-[30px] flex items-center justify-evenly shadow-md">
          <div className="w-[30px] h-[30px] rounded-full bg-gray-400 text-white flex items-center justify-center">
            {currentUser?.userName[0] || "U"}
          </div>
          <GiHamburgerMenu />
        </div>
      </div>

      <div
        className="flex justify-start md:justify-center items-center w-screen h-[90px] gap-[50px] overflow-x-auto p-4 whitespace-nowrap"
        id="bottom-nav"
      >
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <FaHouseChimney className="w-[50px] h-[30px] cursor-pointer" />
          <span>Rooms</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <FaBuilding className="w-[50px] h-[30px] cursor-pointer" />
          <span>apartment</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <MdVilla className="w-[50px] h-[30px] cursor-pointer" />
          <span>Villa</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <MdBungalow className="w-[50px] h-[30px] cursor-pointer" />
          <span>Bungalow</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <PiWarehouseFill className="w-[50px] h-[30px] cursor-pointer" />
          <span>Loft</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <BsHousesFill className="w-[50px] h-[30px] cursor-pointer" />
          <span>Shared Room</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer ">
          <GiFamilyHouse className="w-[50px] h-[30px] cursor-pointer" />
          <span>mansion</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
