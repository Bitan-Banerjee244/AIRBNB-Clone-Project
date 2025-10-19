import { useSelector } from "react-redux";
import { useUser } from "../contexts/userContext";
import { useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Home() {
  const { allListing } = useSelector((state) => state.list);
  const { selectedCategory } = useUser();

  const [searchTerm, setSearchTerm] = useState("");

  // First filter by category
  const categoryFiltered =
    selectedCategory === "All"
      ? allListing
      : allListing.filter(
          (listing) =>
            listing?.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Then filter by search term
  const filteredListings = categoryFiltered.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Nav setSearchTerm={setSearchTerm} /> {/* Pass setter to Nav */}

      <div className="absolute w-screen min-h-[500px] text-black mt-[170px] p-10">
        <Hero />
        <h1 className="w-full h-[40px] text-[18px] lg:text-3xl mb-[20px] lg:mb-4 text-center lg:text-left uppercase font-semibold">
          Rent Houses, Villas and More...
        </h1>

        {filteredListings?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full min-h-[300px] gap-[20px]">
            {filteredListings.map((data) => (
              <Card data={data} key={data._id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No listings found for "{selectedCategory}" with "{searchTerm}"
          </p>
        )}

        <Footer />
      </div>
    </>
  );
}

export default Home;
