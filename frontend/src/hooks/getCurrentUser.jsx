import { useEffect } from "react";
import axios from "axios";
import { setCurrentUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

function getCurrentUser() {
  let { currentUser } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "http://localhost:8000/api/v2/currentuser",
          { withCredentials: true }
        );
        // console.log(response.data);
        dispatch(setCurrentUser(response?.data.user));
      } catch (error) {
        console.log(`Error in Get Current user : ${error}`);
      }
    };

    fetchData();
  }, [dispatch]);

  return currentUser;
}

export default getCurrentUser;
