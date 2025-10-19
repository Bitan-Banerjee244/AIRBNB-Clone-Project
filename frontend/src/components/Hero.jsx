import { useNavigate } from "react-router-dom";
import heroImage from "../assets/cover2.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Hero() {
  let navigate = useNavigate();
  return (
    <section className="w-full h-[300px] relative mb-7 rounded-2xl bg-black">
      {/* Image with dark mask */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-2xl z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Optional overlay for darker effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-white text-sm md:text-lg mb-4 max-w-xl">
          Explore the best houses, villas, and apartments for rent. Your perfect
          home is just a click away.
        </p>
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-all w-max flex gap-2 items-center"
          onClick={() => navigate("/createlisting")}
        >
          Explore <FaRegArrowAltCircleRight />
        </button>
      </div>
    </section>
  );
}

export default Hero;
