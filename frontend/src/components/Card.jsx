import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";


function Card({ data }) {
  return (
    <div className="w-[300px] lg:w-[450px] h-auto border border-gray-200 shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl hover:scale-[1.03] transition-all duration-300">
      {/* Image Section */}
      <div className="w-full h-[220px] lg:h-[260px] overflow-hidden relative">
        <div
          className="flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory
                     scrollbar-hide"
        >
          <img
            src={data.image1}
            alt="image1"
            className="w-full h-full object-cover flex-none snap-center"
          />
          <img
            src={data.image2}
            alt="image2"
            className="w-full h-full object-cover flex-none snap-center"
          />
          <img
            src={data.image3}
            alt="image3"
            className="w-full h-full object-cover flex-none snap-center"
          />

          {/* Booked Tag */}
          <div
            className="absolute px-9 py-3 bg-white z-80 flex gap-2 items-center right-2 top-3 rounded-md"
            id="booked-tag"
          >
            <IoCheckmarkDoneCircleSharp className="text-green-600 text-2xl" />
            <span>Booked</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div className="w-full flex justify-between">
          <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
          <p className="text-2xl font-semibold text-orange-800">
            {data.price}/-
          </p>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3">{data.description}</p>

        {/* <button className="w-full py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300 shadow-md">
          Book Now
        </button> */}

        <button className="w-full py-3 bg-violet-500 text-white font-medium rounded-xl hover:bg-violet-600 transition-all duration-300 shadow-md flex items-center gap-2 justify-center">
               <MdCancel className="text-pink-200 text-2xl" />
          Cancel Now
        </button>
      </div>
    </div>
  );
}

export default Card;
