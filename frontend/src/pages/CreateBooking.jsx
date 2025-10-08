import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CreateBooking() {
  let { id } = useParams();
  let [houseData, setHouseData] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

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
    getData();
  }, []);

  const numberOfNights =
    checkIn && checkOut
      ? (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
      : 0;

  const totalBill = numberOfNights > 0 ? numberOfNights * houseData?.price : 0;
  return (
    <>
      <div className="relative w-screen h-screen p-4 flex">
        <div className="w-[50%] h-full " id="house-details p-4">
          <div
            id="image-section"
            className="w-full h-[70%]  p-4 flex flex-col justify-between"
          >
            <img
              src={houseData?.image1}
              alt=""
              className="w-full h-[60%] object-cover rounded-md"
            />
            <div
              className="flex justify-between w-full h-[38%]"
              id="side-images"
            >
              <img
                src={houseData?.image2}
                alt=""
                className="w-[49%] h-[100%] object-cover rounded-md"
              />
              <img
                src={houseData?.image3}
                alt=""
                className="w-[49%] h-[100%] object-cover rounded-md"
              />
            </div>
          </div>
          {/* Description */}
          <div
            id="description"
            className="w-full h-[30%] mt-2 p-4 bg-gray-100 rounded-xl shadow-inner"
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
              💰 Price: ₹{houseData?.price} / night
            </p>
          </div>
        </div>

        {/* Booking Section */}
        <div
          id="booking"
          className="w-[50%] h-full p-4 bg-gray-50 rounded-xl shadow-md"
        >
          <h1 className="text-2xl font-bold mb-4">Book Now</h1>
          <form className="flex flex-col gap-4">
            {/* Check-in Date */}
            <div className="flex flex-col">
              <label htmlFor="checkin" className="font-semibold mb-1">
                Check-in
              </label>
              <input
                type="date"
                id="checkin"
                name="checkin"
                min={new Date().toISOString().split("T")[0]}
                className="p-2 border rounded-md"
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
                className="p-2 border rounded-md"
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Billing Section */}
            <div className="p-4 bg-white rounded-md shadow-inner mt-2">
              <h2 className="text-xl font-semibold mb-2">Billing Summary</h2>
              <p>Price per Night: ₹{houseData?.price}</p>
              <p>Number of Nights: {numberOfNights || 0}</p>
              <p className="font-bold mt-2 text-green-600">
                Total: ₹{totalBill || 0}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBooking;
