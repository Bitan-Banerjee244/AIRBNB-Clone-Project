import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import useCurrentUser from "./hooks/useCurrentUser";
import useListing from "./hooks/useListing";
import CreateListing from "./pages/CreateListing";
import { useEffect } from "react";
import CreateBooking from "./pages/CreateBooking";
import ShowBooking from "./pages/ShowBooking";

function App() {
  const { currentUser, reloadUser } = useCurrentUser();
  const { reloadListings } = useListing();

  useEffect(() => {
    reloadUser();
    reloadListings();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={!currentUser ? <Signup /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/login"
          element={!currentUser ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createlisting" element={<CreateListing />}></Route>
        <Route path="/booking/:id" element={<CreateBooking />}></Route>
        <Route path="/yourbooking" element={<ShowBooking />}></Route>
      </Routes>
    </>
  );
}

export default App;
