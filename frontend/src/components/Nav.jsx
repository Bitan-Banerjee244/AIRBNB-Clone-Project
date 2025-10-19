import rentalLogo from "../assets/logoairbnb.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { MdVilla, MdBungalow } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { BsHousesFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "../store/userSlice";
import toast from "react-hot-toast";
import { useUser } from "../contexts/userContext";

function Nav({ setSearchTerm }) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [showPopUpMenu, setShowPopUpMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const { SERVER_URL, setSelectedCategory, selectedCategory } = useUser();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopUpMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/v2/logout`, {
        withCredentials: true,
      });
      dispatch(setCurrentUser(null));
      toast.success(response?.data?.message);
      navigate("/login");
    } catch (error) {
      console.log("Error in Logout", error);
    }
  };

  const categories = [
    {
      name: "All",
      icon: <FaHouseChimney className="w-[50px] h-[30px] mb-2" />,
    },
    {
      name: "Apartment",
      icon: <FaBuilding className="w-[50px] h-[30px] mb-2" />,
    },
    { name: "Villa", icon: <MdVilla className="w-[50px] h-[30px] mb-2" /> },
    {
      name: "Bungalow",
      icon: <MdBungalow className="w-[50px] h-[30px] mb-2" />,
    },
    {
      name: "Loft",
      icon: <PiWarehouseFill className="w-[50px] h-[30px] mb-2" />,
    },
    {
      name: "Shared Room",
      icon: <BsHousesFill className="w-[50px] h-[30px] mb-2" />,
    },
    {
      name: "Mansion",
      icon: <GiFamilyHouse className="w-[50px] h-[30px] mb-2" />,
    },
  ];

  return (
    <div className="w-screen fixed top-0 left-0 z-50">
      {/* Top Nav */}
      <div
        id="top-nav"
        className="w-screen h-[100px] flex items-center justify-around px-4 border-b-2 border-[#80808044] bg-white relative z-50"
      >
        {/* Logo */}
        <div className="w-[120px] md:w-[15vw] h-full flex items-center">
          <img
            src={rentalLogo}
            alt="Rental Logo"
            className="w-[140px] h-[120px] object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex w-[700px] h-[50px] bg-white rounded-[30px] px-4 shadow-lg items-center border-2 border-gray-300">
          <input
            type="text"
            placeholder="Search for homes and mansion"
            className="flex-1 h-[80%] text-gray-700 px-4 bg-transparent outline-none border-r-2 border-orange-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="mx-4 text-red-600 cursor-pointer text-xl" />
        </div>

        {/* Right Section */}
        <div className="w-[100px] h-[60%] rounded-[30px] flex items-center justify-evenly shadow-md relative border-2 border-gray-200">
          <div className="w-[30px] h-[30px] rounded-full bg-violet-900 text-white flex items-center justify-center cursor-pointer border-2 border-purple-700">
            {currentUser?.userName?.[0]?.toUpperCase() || "U"}
          </div>
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={() => setShowPopUpMenu((prev) => !prev)}
          />

          {showPopUpMenu && (
            <div
              id="popup"
              className="absolute w-[200px] h-[200px] top-[80px] right-0 shadow-lg border-2 border-gray-200 flex flex-col justify-around p-4 z-60 bg-white"
              ref={popupRef}
            >
              {!currentUser && (
                <Link
                  to="/login"
                  className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-b-2 border-gray-200"
                >
                  Login
                </Link>
              )}

              {currentUser && (
                <span
                  className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-b-2 border-gray-200"
                  onClick={handleLogOut}
                >
                  Log Out
                </span>
              )}

              <span
                className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-b-2 border-gray-200"
                onClick={() => {
                  if (currentUser) {
                    navigate("/createlisting");
                  } else {
                    alert("Please login");
                  }
                }}
              >
                Your Listing
              </span>
              <span
                className="w-full h-[25%] hover:bg-gray-300 cursor-pointer p-2 border-b-2 border-gray-200"
                onClick={() => {
                  if (currentUser) {
                    navigate("/yourbooking");
                  } else {
                    alert("Please login");
                  }
                }}
              >
                Your Booking
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Nav */}
      <div
        id="bottom-nav"
        className="flex justify-start md:justify-center items-center w-screen h-[90px] gap-[50px] overflow-x-auto overflow-y-hidden p-2 whitespace-nowrap fixed left-0 top-[100px] bg-white z-40 border-b-2 border-gray-200"
      >
        {categories.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelectedCategory(item.name)}
            className={`flex justify-center items-center flex-col p-4 cursor-pointer rounded-xl transition-all duration-300 ${
              selectedCategory === item.name
                ? "bg-green-200 scale-105 shadow-md"
                : "hover:bg-gray-200"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
