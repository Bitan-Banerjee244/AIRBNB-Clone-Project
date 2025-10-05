import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CreateBooking() {
  let { id } = useParams();
  let [houseData, setHouseData] = useState(null);

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

  return (
    <>
      <div className="relative w-screen h-screen p-4">
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
        <div id="booking"></div>
      </div>
    </>
  );
}

export default CreateBooking;
