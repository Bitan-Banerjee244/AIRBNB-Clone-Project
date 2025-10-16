import { AiOutlineDelete } from "react-icons/ai";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import house1 from "../assets/house1.webp";
import house2 from "../assets/house2.webp";

function ShowBooking() {
  const navigate = useNavigate();

  const bookings = [
    {
      id: 1,
      title: "Cozy Villa",
      category: "Villa",
      description: "A beautiful villa near the beach with all amenities.",
      checkIn: "2025-10-16",
      checkOut: "2025-10-20",
      totalPrice: 5000,
      image: house1,
    },
    {
      id: 2,
      title: "Modern Apartment",
      category: "Apartment",
      description: "A modern apartment in the city center, close to all shops.",
      checkIn: "2025-11-01",
      checkOut: "2025-11-05",
      totalPrice: 3500,
      image: house2,
    },
  ];

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
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col lg:flex-row w-full bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Left: Single Image */}
            <div className="w-full lg:w-[180px] p-1">
              <img
                src={booking.image}
                alt={booking.title}
                className="w-full h-36 lg:h-40 object-cover rounded-md"
              />
            </div>

            {/* Right: Booking details */}
            <div className="flex-1 p-2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-normal mb-1">{booking.title}</h2>
                <p className="text-sm text-gray-500 mb-1">{booking.category}</p>
                <p className="text-gray-700 text-base mb-1">
                  {booking.description}
                </p>
                <div className="flex gap-4 text-gray-700 text-base">
                  <p>
                    <span className="font-semibold">Check-in:</span>{" "}
                    {booking.checkIn}
                  </p>
                  <p>
                    <span className="font-semibold">Check-out:</span>{" "}
                    {booking.checkOut}
                  </p>
                </div>
                <p className="mt-1 text-green-600 font-semibold text-lg">
                  Total: ₹{booking.totalPrice}
                </p>
              </div>

              {/* Cancel/Delete Button */}
              <div className="flex justify-end mt-2">
                <button className="flex items-center gap-1 bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 transition text-sm">
                  <AiOutlineDelete />
                  Cancel
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
