import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import useCurrentUser from "./hooks/useCurrentUser";
import useListing from "./hooks/useListing";

function App() {
  
  let currentUser = useCurrentUser();
  useListing()

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
