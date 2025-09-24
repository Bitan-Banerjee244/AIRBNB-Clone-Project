import home1 from "../assets/house1.webp";
import home2 from "../assets/house2.webp";
import home3 from "../assets/house3.webp";

function Card() {
  return (
    <div className="w-[450px] h-[320px] bg-red-200 rounded-2xl">
      {/* Images container */}
      <div
        id="images"
        className="w-full h-[80%] bg-blue-100 flex overflow-x-auto rounded-2xl"
      >
        <img
          src={home1}
          alt=""
          className="flex-none w-[450px] h-full object-cover"
        />
        <img
          src={home2}
          alt=""
          className="flex-none w-[450px] h-full object-cover"
        />
        <img
          src={home3}
          alt=""
          className="flex-none w-[450px] h-full object-cover"
        />
      </div>

      {/* Description */}
      <div id="description" className="h-[20%] p-2">
        <h2 className="text-lg font-bold">Beautiful Home</h2>
        <p className="text-gray-700">This is a description of the house.</p>
      </div>
    </div>
  );
}

export default Card;
