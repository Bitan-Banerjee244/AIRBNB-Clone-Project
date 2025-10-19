import axios from "axios";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import useCurrentUser from "../hooks/useCurrentUser";
import useListing from "../hooks/useListing";
import toast from "react-hot-toast";

function ShowBooking() {
  const navigate = useNavigate();
  let { currentUser } = useSelector((state) => state.user);
  let { reloadUser } = useCurrentUser();
  let { reloadListings } = useListing();

  const handleCancelBooking = async (bookingId) => {
    try {
      let response = await axios.delete(
        `http://localhost:8000/api/v2/cancelbooking/${bookingId}`
      );
      console.log(response?.data);
      toast.success("Booking Cancelled Successfully!");
      reloadListings();
      reloadUser();
      navigate("/");
    } catch (error) {
      console.log(`Error Occurred in Cancel Booking Component !! : ${error}`);
    }
  };

  return (
    <div className="w-screen min-h-screen p-4 bg-gray-50">
      <div className="flex items-center mb-4 ">
        <IoChevronBackCircle
          className="text-3xl mr-2 text-red-500 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="text-3xl font-semibold text-gray-800">Your Bookings</h1>
      </div>

      <div className="flex flex-col gap-4">
        {currentUser &&
          currentUser?.bookings.map((booking) => (
            <div
              key={booking?._id}
              className="flex flex-col lg:flex-row w-full bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Left: Single Image */}
              <div className="w-full lg:w-[180px] p-1">
                <img
                  src={booking?.rentingHouse?.image1?.url}
                  alt={booking?.rentingHouse?.title}
                  className="w-full h-36 lg:h-40 object-cover rounded-md"
                />
              </div>

              {/* Right: Booking details */}
              <div className="flex-1 p-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-normal mb-1">
                    {booking?.rentingHouse?.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">
                    {booking?.rentingHouse?.category}
                  </p>
                  <p className="text-gray-700 text-base mb-1">
                    {booking?.rentingHouse?.description}
                  </p>
                  <div className="flex gap-4 text-gray-700 text-base">
                    <p>
                      <span className="font-semibold">Check-in:</span>{" "}
                      {booking?.checkIn.slice(0, 10)}
                    </p>
                    <p>
                      <span className="font-semibold">Check-out:</span>{" "}
                      {booking?.checkOut.slice(0, 10)}
                    </p>
                  </div>
                  <p className="mt-1 text-green-600 font-semibold text-lg">
                    Total: ₹{booking?.totalPrice}
                  </p>
                </div>

                {/* Cancel/Delete Button */}
                <div className="flex justify-end mt-2">
                  <button
                    className="flex items-center gap-1 bg-orange-600 text-white py-1 px-2 rounded-md hover:bg-orange-700 transition text-sm"
                    onClick={() => handleCancelBooking(booking?._id)}
                  >
                    <MdCancel />
                    Cancel your booking
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShowBooking;
