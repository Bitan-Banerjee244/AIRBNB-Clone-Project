import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentUser } from "../store/userSlice";

export default function useCurrentUser() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v2/currentuser",
        { withCredentials: true }
      );
      console.log(response.data)
      dispatch(setCurrentUser(response?.data?.user));
    } catch (error) {
      console.log("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      fetchUser(); 
    }
  }, [currentUser]);

  return { currentUser, reloadUser: fetchUser }; 
}
