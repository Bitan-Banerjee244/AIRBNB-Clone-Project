import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const { currentUser } = useSelector((state) => state.user);
  let navigate = useNavigate();
  // console.log(data);
  const isLoggedIn = !!currentUser;
  const isOwner = currentUser?._id === data?.host?._id;
  const isBookedByUser = currentUser?.bookings?.some(
    (b) => b?.rentingHouse?._id?.toString() === data?._id?.toString()
  );
  const isBooked = data?.isBooked || false;
  const isBookedByOthers = !isBookedByUser && data?.isBooked;

  return (
    <div className="w-[300px] lg:w-[450px] h-[400px] border border-gray-200 shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="w-full h-[180px] lg:h-[220px] overflow-hidden relative flex-none">
        <div className="flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory scrollbar-hide">
          <img
            src={data?.image1?.url}
            alt="image1"
            className="w-full h-full object-cover flex-none snap-center"
          />
          <img
            src={data.image2?.url}
            alt="image2"
            className="w-full h-full object-cover flex-none snap-center"
          />
          <img
            src={data.image3?.url}
            alt="image3"
            className="w-full h-full object-cover flex-none snap-center"
          />
        </div>

        {/* Booked Tag - Always Visible */}

        {isBookedByUser && (
          <div className="absolute top-3 right-3 z-20 px-4 py-2 bg-white rounded-md flex items-center gap-2 shadow-md">
            <IoCheckmarkDoneCircleSharp className="text-green-600 text-xl" />
            <span className="text-sm font-medium">You booked this</span>
          </div>
        )}

        {/* <span className="text-sm font-medium">Cancel Booking</span> */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="w-full flex justify-between items-start">
          <h2 className="text-lg lg:text-xl font-bold text-gray-800 truncate w-2/3">
            {data.title}
          </h2>
          <p className="text-lg lg:text-2xl font-semibold text-orange-800 flex-none">
            {data.price}/-
          </p>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 flex-1 overflow-hidden">
          {data.description}
        </p>

        {/* Logic and Button Rendering */}
        <div className="mt-auto space-y-2">
          {/* 1️⃣ Not logged in → redirect to login */}
          {!isLoggedIn && (
            <button
              className="w-full py-2 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md"
              onClick={() => navigate("/login")}
            >
              Book Now
            </button>
          )}

          {/* 2️⃣ Logged in & not owner & not booked → Book Now */}
          {isLoggedIn && !isOwner && !isBookedByUser && !isBookedByOthers && (
            <button
              className="w-full py-2 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md"
              onClick={() => navigate(`/booking/${data._id}`)}
            >
              Book Now
            </button>
          )}

          {/* 3️⃣ Logged in & user has booked → Cancel Booking */}
          {isLoggedIn && isBookedByUser && (
            <button
              className="w-full py-2 bg-yellow-500 text-white font-medium rounded-xl hover:bg-yellow-600 transition-all duration-300 shadow-md"
              onClick={() => console.log("Cancel Booking")}
            >
              Cancel Booking
            </button>
          )}

          {/* 4️⃣ Logged in & booked by someone else → Already Booked (disabled) */}
          {isLoggedIn && isBookedByOthers && (
            <button
              className="w-full py-2 bg-gray-400 text-white font-medium rounded-xl cursor-not-allowed shadow-md"
              disabled
            >
              Already Booked
            </button>
          )}

          {/* 5️⃣ Owner → Delete Listing */}
          {isLoggedIn && isOwner && !isBookedByOthers && (
            <button className="w-full py-2 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-all duration-300 shadow-md flex items-center gap-2 justify-center">
              <MdDelete className="text-pink-200 text-xl" />
              Delete Listing
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
