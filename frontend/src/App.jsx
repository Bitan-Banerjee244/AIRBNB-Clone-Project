import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import getCurrentUser from "./hooks/getCurrentUser";
import { useSelector } from "react-redux";

function App() {
  let currentUser = getCurrentUser();
  let user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
