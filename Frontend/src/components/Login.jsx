import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth_Context";

// final
function Login() {
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //validations
  const [validation, setValidation] = useState({});

  function Validation(formData) {
    //validation function
    const errors = [];

    //validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Enter email in correct format";
    } else if (formData.email === "") {
      errors.email = "Email is required";
    }

    //validating password
    if (formData.password === "") {
      errors.password = "password is required";
    }
    return errors;
  }

  const {login} = useContext(AuthContext)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidation(Validation(formData));
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        formData
      );
      const { token, user } = response.data; // Destructure token and user directly
      localStorage.setItem("token", token);
      login({ user, token });   //coming from authcontext
      // Handle successful login
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
    {loading && <p>loading</p>}
    <div className=" bg-slate-200 h-dvh flex">
      <div
        className="w-1/2 mt-20 ml-56 mb-20 "
        style={{ backgroundColor: "#90CCBA" }}
      >
        <h1 className="text-white mt-7 ml-8 font-bold">NestAway</h1>
        <h1 className="font-bold text-white text-5xl mt-10 pt-20 ml-8 ">
          Welcome
        </h1>
        <h1 className="font-bold text-white text-5xl mt-7 ml-8">Back!</h1>
      </div>

      <div className="basis-1/2 bg-white mt-20 mb-20 mr-56 ">
        <h1 className="text-black text-2xl font-bold mt-14 ml-8">Login</h1>
        <p className="text-slate-400 mt-2 ml-8">
          Welcome back! Please login to your <br />
          account
        </p>

        {/* Email */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="text-black text-sm font-semibold mt-5 ml-8">Email</h2>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
            onChange={handleChange}
          />
          {validation.email && (
            <p style={{ color: "red" }}>{validation.email}</p>
          )}

          {/* Password */}
          <h2 className="text-black text-sm font-semibold mt-5 ml-8">
            Password
          </h2>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
            onChange={handleChange}
          />
          {validation.password && (
            <p style={{ color: "red" }}>{validation.password}</p>
          )}
          {/* CheckBox */}
          <div>
          <p className="flex">
            <p className="flex">
              <input
                type="checkbox"
                id="rememberMe"
                className="bg-teal-200 mt-4 mb-5 ml-8 mr-2"
              />
              <p className="mt-6 ml-0 text-slate-400 text-sm">Remember me</p>
            </p>
            <p className="ml-20 mb-8 mt-6 text-slate-400 text-sm mr-10">
              Forgot Password?
            </p>
          </p>
          </div>
          {/* Button */}
          <button
            onClick={handleSubmit}
            className="text-white font-bold py-2 px-20 w-80 h-10 ml-8 rounded"
            style={{ backgroundColor: "#90CCBA" }}>
            Log in
          </button>
        </form>
        <div className="flex">
          <p className=" text-slate-400 mt-2 ml-8 mr-2">New User? </p>
          {/* <p className="mt-2 mr-4" style={{color:"#90CCBA"}}> Sign up</p> */}
          <Link to="/Signup" className="mt-2" style={{ color: "#90CCBA" }}>
            Signup
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
