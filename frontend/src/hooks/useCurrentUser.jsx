import { useEffect } from "react";
import axios from "axios";
import { setCurrentUser } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useCurrentUser() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8000/api/v2/currentuser",
            { withCredentials: true }
          );
          dispatch(setCurrentUser(response.data.user));
        } catch (error) {
          console.log(`Error fetching current user: ${error}`);
        }
      };
      fetchData();
    }
  }, [dispatch]);

  return currentUser;
}
