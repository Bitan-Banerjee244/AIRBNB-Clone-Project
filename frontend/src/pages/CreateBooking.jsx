import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";
import useListing from "../hooks/useListing";
import { IoChevronBackCircle } from "react-icons/io5";
import { toast } from "react-hot-toast";
import { AiOutlineFileDone } from "react-icons/ai";

function CreateBooking() {
  let { id } = useParams();
  let [houseData, setHouseData] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  let { currentUser, reloadUser } = useCurrentUser();
  let navigate = useNavigate();
  let { reloadListings } = useListing();

  const getData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8000/api/v2/getdata/${id}`,
        { withCredentials: true }
      );
      setHouseData(response?.data?.house);
      console.log(response?.data?.house);
    } catch (error) {
      console.log(`Cannot Get Data of House, ${Error}`);
    }
  };

  useEffect(() => {
    if (checkIn && checkOut && houseData?.price) {
      const nights =
        (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
      setTotalPrice(nights > 0 ? nights * houseData.price : 0);
    } else {
      setTotalPrice(0);
    }
  }, [checkIn, checkOut, houseData]);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        `http://localhost:8000/api/v2/createbooking`,
        {
          checkIn,
          checkOut,
          totalPrice,
          customer: currentUser?._id,
          rentingHouse: id,
        },
        { withCredentials: true }
      );
      reloadUser();
      reloadListings();
      toast.success("Booking was successful!");
      console.log(response?.data);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message);
      console.log(`Error occurred in Booking component!! : ${error.message}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const numberOfNights =
    checkIn && checkOut
      ? (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
      : 0;
  return (
    <>
      <div className="relative w-screen min-h-screen p-4 flex flex-col lg:flex-row gap-2 ">
        <div className="w-full lg:w-1/2 h-full " id="house-details">
          <h1 className="flex gap-2 items-center text-3xl font-bold ml-2 cursor-pointer">
            <IoChevronBackCircle
              className="text-[#EF4444]"
              onClick={() => navigate("/")}
            />
            Book Now
          </h1>
          <div
            id="image-section"
            className="w-full h-[70vh] p-2 flex flex-col justify-between"
          >
            <img
              src={houseData?.image1?.url}
              alt=""
              className="w-full h-[60%] object-cover rounded-md"
            />
            <div
              className="flex justify-between w-full h-[38%]"
              id="side-images"
            >
              <img
                src={houseData?.image2?.url}
                alt=""
                className="w-[49%] h-[100%] object-cover rounded-md"
              />
              <img
                src={houseData?.image3?.url}
                alt=""
                className="w-[49%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
          {/* Description */}
          <div
            id="description"
            className="w-full h-[25%] mt-2 p-4 bg-gray-100 rounded-xl shadow-inner"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {houseData?.title}
            </h2>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {houseData?.category}
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              {houseData?.description}
            </p>

            <p className="text-lg font-semibold text-green-600">
              Price: ₹{houseData?.price} / night
            </p>
          </div>
        </div>

        {/* Booking Section */}
        <div
          id="booking"
          className="w-full lg:w-[49%] h-full p-4 bg-green-100 rounded-xl shadow-md border-2 border-solid border-green-700"
        >
          <h1 className="text-2xl font-bold mb-4">Billings</h1>
          <form className="flex flex-col gap-4" onSubmit={handleBooking}>
            {/* Check-in Date */}
            <div className="flex flex-col">
              <label htmlFor="checkIn" className="font-semibold mb-1">
                Check-in
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                min={new Date().toISOString().split("T")[0]}
                className="p-2 border rounded-lg"
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Check-out Date */}
            <div className="flex flex-col">
              <label htmlFor="checkout" className="font-semibold mb-1">
                Check-out
              </label>
              <input
                type="date"
                id="checkout"
                name="checkout"
                min={new Date().toISOString().split("T")[0]}
                className="p-2 border rounded-lg"
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Billing Section */}
            <div className="p-4 bg-white rounded-lg shadow-inner mt-2 ">
              <h2 className="text-xl font-semibold mb-2">Billing Summary</h2>
              <p>Price per Night: ₹{houseData?.price}</p>
              <p>Number of Nights: {numberOfNights || 0}</p>
              <p className="font-bold mt-2 text-green-600">
                Total: ₹{totalPrice || 0}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition flex justify-center items-center gap-2"
            >
              <AiOutlineFileDone />
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBooking;
