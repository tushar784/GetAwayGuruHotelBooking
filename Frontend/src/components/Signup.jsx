import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // validations
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
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidation(Validation(formData));

    // Handle successful signup
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(`${url}/api/signUp`, formData);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => navigate("/login"), // Navigate after the toast is closed
      });
      
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center md:flex">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          GetAwayGuru
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {validation.username && (
              <p className="text-red-500 text-xs mt-1">{validation.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
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
              <p className="text-red-500 text-xs mt-1">{validation.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition duration-200"
          >
            Sign up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;










// //finalllll working
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   // validations
//   const [validation, setValidation] = useState({});

//   function Validation(formData) {
//     const errors = {}; // Use an object for error messages

//     // Email validation (combined checks and more specific message)
//     if (
//       formData.email === "" ||
//       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
//     ) {
//       errors.email = "Please enter a valid email address.";
//     }

//     // Password validation (existing logic)
//     if (formData.password === "") {
//       errors.password = "Password is required.";
//     }

//     // Optional: Username validation (example with a regular expression)
//     if (formData.username && !/^[a-zA-Z0-9_.]+$/.test(formData.username)) {
//       errors.username =
//         "Username can only contain letters, numbers, underscores, and periods.";
//     }

//     return errors;
//   }

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setValidation(Validation(formData));

//     // Handle successful signup
//     try {
//       const url = import.meta.env.VITE_BASE_URL;
//       const response = await axios.post(`${url}/api/signUp`, formData);
//       // toastify
//       navigate("/login"); // navigation
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     console.log(formData, "this is a username");
//     console.log(validation, "this validation data");
//   }, [formData, validation]);

//   return (
//     <>
//       <div className="h-dvh flex">
//         {/* 1st half (Left side view) */}
//         <div className="w-1/2 hidden md:block mt-20 ml-56 mb-16 drop-shadow-xl " style={{ backgroundColor: "#90CCBA" }}>
//           <h1 className="text-white mt-7 ml-8 font-bold">NestAway</h1>
//           <h1 className="font-bold text-white text-5xl mt-10 pt-20 ml-8 ">
//             Welcome
//           </h1>
//           <h1 className="font-bold text-white text-5xl mt-7 ml-8">Back!</h1>
//         </div>

//         {/* 2nd Half (Right side view) */}
//         <div className="basis-1/2 bg-white mt-20 mb-16 mr-56 drop-shadow-2xl ">
//           <h1 className="text-black text-2xl font-bold mt-8 ml-8">Sign up</h1>
//           <p className="text-slate-400 mt-2 ml-8">Create Your Account.</p>
//           {/* Form */}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {/* Username */}
//             <h2 className="text-black text-sm font-semibold mt-5 ml-8">Username</h2>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
//               required
//               onChange={handleChange}
//             />
//             {validation.username && <p style={{ color: "red" }}>{validation.username}</p>}
//             {/* Email */}
//             <h2 className="text-black text-sm font-semibold mt-5 ml-8">Email</h2>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="border border-slate-500 w-80 h-8 mt-4 ml-8 rounded"
//               required
//               onChange={handleChange}
//             />
//             {validation.email && <p style={{ color: "red" }}>{validation.email}</p>}


            
//             {/* Password */}
//             <h2 className="text-black text-sm font-semibold mt-5 ml-8">Password</h2>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               className="border border-slate-500 w-80 h-8 mt-4 ml-8 mb-8 rounded"
//               required
//               onChange={handleChange}
//             />
//             {validation.password && <p style={{ color: "red" }}>{validation.password}</p>}
//             {/* Button */}
//             <button
//               onClick={handleSubmit}
//               className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded"
//               style={{ backgroundColor: "#90CCBA" }}
//             >
//               Sign up
//             </button>
//           </form>
//           {/* Login link */}
//           <div className="flex mt-4">
//             <p className=" text-slate-400 ml-8 mr-2">Already have an account?{" "}</p>
//             <Link to="/login" className="mb-12" style={{ color: "#90CCBA" }}>Login</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;



