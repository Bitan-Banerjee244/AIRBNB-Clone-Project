import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentUser } from "../store/userSlice";
import { useUser } from "../contexts/userContext";

export default function useCurrentUser() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { SERVER_URL } = useUser();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/v2/currentuser`, {
        withCredentials: true,
      });
      // console.log(response.data)
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
