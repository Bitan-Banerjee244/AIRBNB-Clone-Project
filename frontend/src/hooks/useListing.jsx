import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllListing } from "../store/listingSlice";
import axios from "axios";
import { useUser } from "../contexts/userContext";

function useListing() {
  const dispatch = useDispatch();
  const { SERVER_URL } = useUser();

  const fetchListing = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/v2/showalllisting`, {
        withCredentials: true,
      });
      // console.log(response?.data?.list);
      dispatch(setAllListing(response?.data.list));
    } catch (error) {
      console.log("Fetching Data Error");
    }
  };

  useEffect(() => {
    fetchListing();
  }, [dispatch]);

  return { reloadListings: fetchListing };
}

export default useListing;
