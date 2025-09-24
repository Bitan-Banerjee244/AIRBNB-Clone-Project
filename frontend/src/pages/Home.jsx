import { useSelector } from "react-redux";
import Card from "../components/Card";
import Nav from "../components/Nav";

function Home() {
  let { allListing } = useSelector((state) => state.list);

  return (
    <>
      {/* Fixed top nav */}
      <Nav />

      <div className="absolute w-screen min-h-[500px] text-black mt-[200px] p-10">
        <h1 className="w-full h-[40px] text-[18px] lg:text-3xl mb-4 lg:mb-2 text-center lg:text-left uppercase font-bold ml-2">
          Rent Houses , Villas and More
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full min-h-[300px] gap-[20px]">
          {allListing &&
            allListing.map((data) => <Card data={data} key={data._id} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
