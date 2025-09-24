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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../store/userSlice";
import toast from "react-hot-toast";

function Nav() {
  let currentUser = useSelector((state) => state.user.currentUser);
  let [showPopUpMenu, setShowPopUpMenu] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      let response = await axios.get("http://localhost:8000/api/v2/logout", {
        withCredentials: true,
      });
      console.log(response);
      dispatch(setCurrentUser(null));
      toast.success(response?.data?.message);
      navigate("/login");
    } catch (error) {
      console.log(`Error in Logout`);
    }
  };

  return (
    <div className="w-screen fixed top-0 left-0">
      {/* Top Nav */}
      <div
        id="top-nav"
        className="w-screen h-[100px] flex items-center justify-around px-4 border-2  border-[#80808044] border-solid bg-white relative z-40"
      >
        {/* Logo */}
        <div className="w-[120px] md:w-[15vw] h-full flex items-center">
          <img
            src={rentalLogo}
            alt="Rental Logo"
            className=" w-[140px] h-[120px] object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex w-[700px] h-[60px] bg-white rounded-[30px] px-4 shadow-lg items-center border-2 border-solid border-gray-200">
          <input
            type="text"
            placeholder="Search for homes and mansion"
            className="flex-1 h-[80%] text-gray-700 px-4 bg-transparent outline-none rounded-3xl"
          />
          <FaSearch className="mx-4 text-red-600 cursor-pointer text-xl" />
        </div>

        {/* Right Side Placeholder */}
        <div className="w-[100px] h-[60%] rounded-[30px] flex items-center justify-evenly shadow-md relative z-50">
          <div className="w-[30px] h-[30px] rounded-full bg-violet-900 text-white flex items-center justify-center cursor-pointer">
            {currentUser?.userName?.[0]?.toUpperCase() || "U"}
          </div>
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => setShowPopUpMenu((prev) => !prev)}
          />

          {showPopUpMenu && (
            <div
              id="popup"
              className="absolute w-[200px] h-[200px] top-[80px] shadow-lg border-2 border-gray-200 
                         border-solid flex flex-col justify-around p-4 z-50 bg-white"
            >
              {!currentUser && (
                <Link
                  to="/login"
                  className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-solid border-b-2 border-gray-200"
                >
                  Login
                </Link>
              )}

              {currentUser && (
                <span
                  className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-solid border-b-2 border-gray-200"
                  onClick={handleLogOut}
                >
                  Log Out
                </span>
              )}
              <span className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-solid border-b-2 border-gray-200">
                Your Listing
              </span>
              <span className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-solid border-b-2 border-gray-200">
                Your Booking
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Nav */}
      <div
        id="bottom-nav"
        className="flex justify-start md:justify-center items-center w-screen h-[90px] gap-[50px]  overflow-x-auto p-2 whitespace-nowrap fixed left-0 top-[100px] bg-white z-30 border-gray-200 border-solid border-b-2"
      >
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <FaHouseChimney className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Rooms</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <FaBuilding className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Apartment</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <MdVilla className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Villa</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <MdBungalow className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Bungalow</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <PiWarehouseFill className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Loft</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <BsHousesFill className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Shared Room</span>
        </div>
        <div className="flex justify-center items-center flex-col hover:bg-gray-200 p-4 cursor-pointer">
          <GiFamilyHouse className="w-[50px] h-[30px] cursor-pointer mb-2" />
          <span>Mansion</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
