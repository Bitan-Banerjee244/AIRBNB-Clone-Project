import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  let [showPassword, setShowPassword] = useState(true);
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8000/api/v2/signup",
        { userName, email, password },
        { withCredentials: true }
      );
      // console.log(response.data);
      toast.success(response.data.message);
      setEmail("");
      setUserName("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(`Error Occurred in SignUp API : ${error}`);
      toast.error(response.data.message);
    }
  };

  return (
    <>
      <div className="relative w-screen h-screen flex justify-center items-center bg-gray-50 p-10 overflow-scroll">
        <div className="container w-[900px] h-[80vh] flex shadow-xl border-[1px] border-[#0000006e] border-solid rounded-[30px] ">
          <div
            id="left-section"
            className=" sm:w-1/2 w-full h-full bg-white rounded-[inherit]"
          >
            <form
              action=""
              className="w-full h-full flex flex-col justify-around p-5"
              onSubmit={handleSignup}
            >
              <h1 className="w-full h-[20%] text-4xl font-semibold flex items-center justify-center">
                Sign UP
              </h1>
              <section
                id="label-container"
                className="w-full h-[50%]  flex flex-col gap-[10px]"
              >
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                  className="w-full h-[40px] bg-gray-200 p-3 rounded-lg"
                  onChange={(e) => setUserName(e.target.value)}
                />
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
                    placeholder="Set a new Password"
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
                  Sign UP
                </button>
                <span className="mt-4">
                  Already Have a account ? <Link to="/login">Login</Link>{" "}
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
