import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth_Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({});

  function Validation(formData) {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Enter email in correct format";
    } else if (formData.email === "") {
      errors.email = "Email is required";
    }
    if (formData.password === "") {
      errors.password = "Password is required";
    }
    return errors;
  }

  const { login } = useContext(AuthContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidation(Validation(formData));
  
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(`${url}/api/login`, formData);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      login({ user, token });
      navigate("/");
      toast.success("Login successful!", {
        position: "top-right", // Optional: Customize position
        autoClose: 3000, // Optional: Close toast automatically after 3 seconds
      });
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-slate-200 min-h-screen flex justify-center items-center">
        <div className=" md:flex hidden bg-slate-200 h-dvh flex">
          <div
            className="w-1/2 mt-20 ml-56 mb-20 "
            style={{ backgroundColor: "#90CCBA" }}
          >
            <h1 className="text-white mt-7 ml-8 font-bold">GetAwayGuru</h1>
            <h1 className="font-bold text-white text-5xl mt-10 pt-20 ml-8 ">
              Welcome
            </h1>
            <h1 className="font-bold text-white text-5xl mt-7 ml-8">Back!</h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-md md:p-0 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          GetAwayGuru
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h2>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Back!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {validation.email && (
                <p className="text-red-500 text-xs mt-1">{validation.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
              {validation.password && (
                <p className="text-red-500 text-xs mt-1">
                  {validation.password}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-gray-600">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white font-semibold py-2 px-4 rounded bg-[#90CCBA] transition duration-200"
            >
              Log in
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-sm">
              New User?{" "}
              <Link to="/Signup" className="text-teal-500 font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
