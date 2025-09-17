import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


function Signup() {

  let [password, setShowPassword] = useState(true);

  return (
    <>
      <div className="relative w-screen h-screen flex justify-center items-center bg-gray-50 p-10 overflow-scroll">
        <div className="container w-[900px] h-[600px] flex shadow-xl border-[1px] border-[#0000006e] border-solid rounded-[30px] ">
          <div
            id="left-section"
            className=" sm:w-1/2 w-full h-full bg-white rounded-[inherit]"
          >
            <form
              action=""
              className="w-full h-full flex flex-col justify-around p-5"
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
                />
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  required
                  className="w-full h-[40px] bg-gray-200 p-3 rounded-lg"
                />
                <label htmlFor="">Password</label>
                <div className="w-full flex">
                  <input
                    type={password ? "password" : "text"}
                    placeholder="Set a new Password"
                    className="w-[90%] h-[40px] bg-gray-200 p-3 rounded-lg"
                  />
                  <div
                    className="w-[10%] h-[40px] bg-gray-200 flex items-center justify-center rounded-lg"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {password ? (
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
                <span className="mt-2">
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
