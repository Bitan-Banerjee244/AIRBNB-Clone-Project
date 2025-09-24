import Card from "../components/Card";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      {/* Fixed top nav */}
      <Nav />

      {/* Page content with padding-top equal to nav height */}
      <div className="w-screen min-h-[500px] text-black mt-[200px] p-10">
        <h1 className="w-full h-[40px] text-3xl mb-2 uppercase">
          Rent Houses , Villas and More
        </h1>
        <div className="grid grid-cols-3 w-full min-h-[300px] gap-[20px]">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
      </div>
    </>
  );
}

export default Home;
