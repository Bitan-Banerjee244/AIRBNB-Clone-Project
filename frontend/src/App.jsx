import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import useCurrentUser from "./hooks/useCurrentUser";
import { useEffect } from "react";

function App() {
  
  let currentUser = useCurrentUser();
  // let user = useSelector((state) => state.user.currentUser);

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
      </Routes>
    </>
  );
}

export default App;
