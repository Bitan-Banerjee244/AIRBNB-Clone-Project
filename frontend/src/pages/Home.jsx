import { useSelector } from "react-redux";
import Card from "../components/Card";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  let { allListing } = useSelector((state) => state.list);

  return (
    <>
      {/* Fixed top nav */}
      <Nav />

      <div className="absolute w-screen min-h-[500px] text-black mt-[170px] p-10">
        <h1 className="w-full h-[40px] text-[18px] lg:text-3xl mb-[20px] lg:mb-4 text-center lg:text-left uppercase font-semibold">
          Rent Houses , Villas and More ... 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full min-h-[300px] gap-[20px]">
          {allListing &&
            allListing.map((data) => <Card data={data} key={data._id} />)}
        </div>
        <Footer/>
      </div>
      
    </>
  );
}

export default Home;
