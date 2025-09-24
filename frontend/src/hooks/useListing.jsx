import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllListing } from "../store/listingSlice";
import axios from "axios";

function useListing() {
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        let response = await axios.get(
          "http://localhost:8000/api/v2/showalllisting",
          { withCredentials: true }
        );
        console.log(response?.data?.list);
        dispatch(setAllListing(response?.data.list));
      } catch (error) {
        console.log(`Fetching Data Error`);
      }
    };

    fetchListing();
  }, [dispatch]);
}

export default useListing;
