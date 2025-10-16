import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";
import plus from "../assets/plus.png";
import house1 from "../assets/house1.webp";
import house2 from "../assets/house2.webp";
import house3 from "../assets/house3.webp";
import ListingCard from "../components/ListingCard";
import axios from "axios";
import useListing from "../hooks/useListing";
import toast from "react-hot-toast";
import useCurrentUser from "../hooks/useCurrentUser";

function CreateListing() {
  const navigate = useNavigate();

  // Image handling
  let [fimage1, setfImage1] = useState("");
  let [fimage2, setfImage2] = useState("");
  let [fimage3, setfImage3] = useState("");
  let [bimage1, setbImage1] = useState("");
  let [bimage2, setbImage2] = useState("");
  let [bimage3, setbImage3] = useState("");

  // Other details
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState(""); 
  let { reloadListings } = useListing();
  let { currentUser, reloadUser } = useCurrentUser();
  let [loader, setLoader] = useState(false);

  const handleSubmitData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image1", bimage1);
    formData.append("image2", bimage2);
    formData.append("image3", bimage3);
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("category", category); 

    try {
      setLoader(true);
      let response = await axios.post(
        "http://localhost:8000/api/v2/createlisting",
        formData,
        { withCredentials: true }
      );
      toast.success("List Created Successfully");
      console.log(response.data);
      navigate("/");
      reloadListings();
      reloadUser();
      setLoader(false);
    } catch (error) {
      console.log(`Error Occurred in Creating List Component : ${error}`);
      toast.error("Failed to create listing");
      setLoader(false);
    }
  };

  const tempdata = {
    title: "Luxury House",
    description: "Enjoy Night with amazing interior",
    price: "5000",
    image1: house1,
    image2: house2,
    image3: house3,
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between gap-6">
      {/* Left Section: Create Listing */}
      <div className="w-[100%] lg:w-[70%] lg:h-screen flex flex-col">
        <h1 className="text-3xl font-semibold mb-2 gap-2 flex items-center justify-center lg:justify-start">
          <IoChevronBackCircle
            className="text-red-500 cursor-pointer"
            onClick={() => navigate("/")}
          />{" "}
          Create Listing
        </h1>

        {/* Image Upload Container */}
        <div
          id="image-container"
          className="w-full flex flex-wrap justify-around gap-3 mt-2 p-2"
        >
          <img
            src={fimage1 || plus}
            alt="image1"
            className="h-[200px] w-[330px] bg-gray-300 shadow-sm rounded-lg object-cover cursor-pointer"
            onClick={() => {
              document.querySelector("#file1").click();
            }}
          />
          <img
            src={fimage2 || plus}
            alt="image2"
            className="w-[330px] h-[200px] bg-gray-300 shadow-sm rounded-lg object-cover cursor-pointer"
            onClick={() => {
              document.querySelector("#file2").click();
            }}
          />
          <img
            src={fimage3 || plus}
            alt="image3"
            className="w-[330px] h-[200px] bg-gray-300 shadow-sm rounded-lg object-cover cursor-pointer"
            onClick={() => {
              document.querySelector("#file3").click();
            }}
          />
        </div>

        <h5 className="text-xl ml-2 text-center lg:text-left mt-2 font-semibold">
          Upload Images*
        </h5>

        {/* Form */}
        <form
          className="mt-3 w-full lg:max-h-[400px] p-4 flex flex-col gap-4 overflow-y-auto"
          onSubmit={handleSubmitData}
        >
          {/* Hidden file inputs */}
          <input
            type="file"
            className="hidden"
            id="file1"
            onChange={(e) => {
              setbImage1(e.target.files[0]);
              setfImage1(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <input
            type="file"
            className="hidden"
            id="file2"
            onChange={(e) => {
              setbImage2(e.target.files[0]);
              setfImage2(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <input
            type="file"
            className="hidden"
            id="file3"
            onChange={(e) => {
              setbImage3(e.target.files[0]);
              setfImage3(URL.createObjectURL(e.target.files[0]));
            }}
          />

          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-1 font-medium">
              Title*
            </label>
            <input
              type="text"
              id="title"
              placeholder="Luxury House"
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 font-medium">
              Description*
            </label>
            <textarea
              id="description"
              placeholder="Enter Description"
              className="p-2 border border-gray-300 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1 font-medium">
              Price*
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter Room Rent"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="mb-1 font-medium">
              Category*
            </label>
            <select
              id="category"
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Rooms">Rooms</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Loft">Loft</option>
              <option value="Shared Room">Shared Room</option>
              <option value="Mansion">Mansion</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-500 transition-all"
          >
            {loader ? "Creating..." : "Create Listing"}
          </button>
        </form>
      </div>

      {/* Right Section: Your Listings */}
      <div className="lg:w-[30%] w-[100%] lg:h-screen overflow-y-auto mt-6 lg:mt-0">
        <h1 className="text-3xl font-semibold mb-3 ml-8">Your Listings</h1>
        <div
          id="listing-Container"
          className="flex flex-col items-center justify-start gap-4 px-4"
        >
          {currentUser &&
            currentUser?.listings?.map((data) => (
              <ListingCard data={data} key={data._id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CreateListing;
