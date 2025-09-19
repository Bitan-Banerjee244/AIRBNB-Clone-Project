import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  let [showPassword, setShowPassword] = useState(true);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8000/api/v2/login",
        { email, password },
        { withCredentials: true }
      );
      toast.success(response?.data.message);
      navigate("/");
      setPassword("");
      setEmail("");
      // console.log(response.data);
    } catch (error) {
      console.log(`Error Occurred in Login Component : ${error}`);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="relative w-screen h-screen flex justify-center items-center bg-gray-50 p-10 overflow-scroll">
        <div className="container w-[900px] h-[450px] flex shadow-xl border-[1px] border-[#0000006e] border-solid rounded-[30px] ">
          <div
            id="left-section"
            className=" sm:w-1/2 w-full h-full bg-white rounded-[inherit]"
          >
            <form
              action=""
              className="w-full h-full flex flex-col justify-around p-5"
              onSubmit={handleLogin}
            >
              <h1 className="w-full h-[20%] text-4xl font-semibold flex items-center justify-center">
                Log In
              </h1>
              <section
                id="label-container"
                className="w-full h-[50%]  flex flex-col gap-[10px]"
              >
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full h-[40px] bg-gray-200 p-3 rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Password</label>
                <div className="w-full flex">
                  <input
                    type={showPassword ? "password" : "text"}
                    placeholder="Enter Your Password"
                    className="w-[90%] h-[40px] bg-gray-200 p-3 rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="w-[10%] h-[40px] bg-gray-200 flex items-center justify-center rounded-lg"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-2xl" />
                    ) : (
                      <FaEye className="text-2xl" />
                    )}
                  </div>
                </div>
              </section>
              <div
                id="submit"
                className="w-full h-[15%] flex flex-col items-center"
              >
                <button
                  type="submit"
                  className="w-full p-3 bg-orange-500 rounded-xl text-white hover:bg-orange-700 transition-all duration-300"
                >
                  Login
                </button>
                <span className="mt-2 text-[0.8rem] md:text-[1rem]">
                  Want to create a new account ?{" "}
                  <Link to="/signup">Signup</Link>{" "}
                </span>
              </div>
            </form>
          </div>
          <div
            id="right-section"
            className="sm:w-1/2 w-[0%] h-full bg-gradient-to-br from-orange-500 to-pink-500 rounded-tr-[30px] rounded-br-[30px]"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
