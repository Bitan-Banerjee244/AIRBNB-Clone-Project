import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function ListingCard({ data }) {
  return (
    <div className="w-full max-w-sm bg-white shadow-md  border-2 border-solid border-[#65636357] rounded-lg overflow-hidden mb-4">
      {/* Images */}
      <div className="flex gap-1 p-2">
        <img
          src={data?.image1?.url}
          alt="image1"
          className="w-1/3 h-20 object-cover rounded-md"
        />
        <img
          src={data?.image2?.url}
          alt="image2"
          className="w-1/3 h-20 object-cover rounded-md"
        />
        <img
          src={data?.image3?.url}
          alt="image3"
          className="w-1/3 h-20 object-cover rounded-md"
        />
      </div>

      {/* Info */}
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mt-1">
          {data.description}
        </p>
        <div className="mt-2 border-t border-gray-200 pt-1 flex justify-between">
          <span className="font-bold text-red-500">₹{data.price}</span>
          <span className="font-semibold text-green-500">
            {data && data?.isBooked ? (
              <div className="flex items-center gap-1">
                <IoCheckmarkDoneCircleSharp /> Booked by others
              </div>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListingCard;
