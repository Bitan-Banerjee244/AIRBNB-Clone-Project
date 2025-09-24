function Card({ data }) {
  console.log(data);
  return (
    <div className="w-[300px] h-[400px] lg:w-[450px] lg:h-[400px] border-2 border-solid border-gray-300 shadow-xl rounded-2xl hover:scale-[1.05] transition-all duration-300 relative bg-white">
      {/* Images container */}
      <div
        id="images"
        className="w-full h-[69%] bg-blue-100 flex overflow-x-auto rounded-2xl"
      >
        <img
          src={data.image1}
          alt=""
          className="flex-none w-[450px] h-full object-cover"
        />
        <img
          src={data.image2}
          alt=""
          className="flex-none w-[450px] h-full object-cover"
        />
        <img
          src={data.image3}
          alt=""
          className="flex-none w-[450px] h-full object-cover"
        />
      </div>

      {/* Description */}
      <div
        id="description"
        className="h-[20%] p-2 flex flex-col justify-start gap-1"
      >
        <h2 className="text-3xl ">{data.title}</h2>
        <p className="text-gray-700">{data.description}</p>
        <button className="w-full px-[10px] py-[10px] bg-red-400 rounded-[18px] text-white hover:bg-red-600 transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Card;
