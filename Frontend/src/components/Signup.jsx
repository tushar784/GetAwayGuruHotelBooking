import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  //validations
  const [validation, setValidation] = useState({});

  function Validation(formData) {
    const errors = {}; // Use an object for error messages

    // Email validation (combined checks and more specific message)
    if (
      formData.email === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = "Please enter a valid email address.";
    }

    // Password validation (existing logic)
    if (formData.password === "") {
      errors.password = "Password is required.";
    }

    // Optional: Username validation (example with a regular expression)
    if (formData.username && !/^[a-zA-Z0-9_.]+$/.test(formData.username)) {
      errors.username =
        "Username can only contain letters, numbers, underscores, and periods.";
    }

    return errors;
  }

  const handleChange = (event) => {
    console.log("this is the event",event);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log("handlechange",handleChange);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidation(Validation(formData));

    // Handle successful signup
    try {
      const url = import.meta.env.VITE_BASE_URL
      const response = await axios.post(
        `${url}/api/signUp`,
        formData
      );
      const data = response.json()
      console.log("data here",data);
      console.log(response.data);
      navigate("/"); //navigation
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(formData, "this is a username");
    console.log(validation, "this validation data");
  }, [formData, validation]);
  return (
    <>
      <div className="h-dvh flex">
        {/* 1st half */}

        <div
          className="w-1/2 mt-20 ml-56 mb-16 drop-shadow-xl "
          style={{ backgroundColor: "#90CCBA" }}
        >
          <h1 className="text-white mt-7 ml-8 font-bold">NestAway</h1>
          <h1 className="font-bold text-white text-5xl mt-10 pt-20 ml-8 ">
            Welcome
          </h1>
          <h1 className="font-bold text-white text-5xl mt-7 ml-8">Back!</h1>
        </div>

        {/* 2nd Half */}

        <div className="basis-1/2 bg-white mt-20 mb-16 mr-56 drop-shadow-2xl ">
          <h1 className="text-black text-2xl font-bold mt-14 ml-8">Sign up</h1>
          <p className="text-slate-400 mt-2 ml-8">Create Your Account.</p>

          {/* Username */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-black text-sm font-semibold mt-5 ml-8">
              Username
            </h2>
            <input
              type="text"
              name="username"
              id="username"
              className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
              required
              onChange={handleChange}
            />
            {validation.username && (
              <p style={{ color: "red" }}>{validation.username}</p>
            )}
            {/* Email */}
            <h2 className="text-black text-sm font-semibold mt-5 ml-8">
              Email
            </h2>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
              required
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
              name="password"
              id="password"
              className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
              required
              onChange={handleChange}
            />
            {validation.password && (
              <p style={{ color: "red" }}>{validation.password}</p>
            )}

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded"
              style={{ backgroundColor: "#90CCBA" }}
            >
              Sign up
            </button>
          </form>

          {/* <Link to="/"><button className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded" onClick={() =>signupp()} style={{backgroundColor:"#90CCBA"}}>
               Sign up
            </button></Link> */}

          <div className="flex">
            <p className=" text-slate-400  ml-8 mr-2">
              Already have an account?{" "}
            </p>
            {/* <p className=" mr-4" style={{color:"#90CCBA"}}> Login</p> */}
            <Link to="/login" className="mb-12" style={{ color: "#90CCBA" }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;


