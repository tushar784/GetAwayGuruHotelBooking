import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth_Context";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(`${url}/api/login`, formData);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      login({ user, token });
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <p>Loading...</p>}

      
  <div class="bg-slate-200 min-h-screen flex justify-center items-center md:flex">
  <div class="w-full m-2 max-w-md p-8 bg-white rounded-lg shadow-lg">
    <h1 class="text-center text-2xl font-bold text-gray-800 mb-6">GetAwayGuru</h1>
    <h2 class="text-xl font-semibold text-gray-800 mb-2">Welcome Back!</h2>
    {/* <h2 class="text-2xl font-bold text-gray-800 mb-6">Back!</h2> */}
    <form onSubmit={handleSubmit}>
      <div class="mb-4">
        <label for="email" class="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          class="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {validation.email && <p class="text-red-500 text-xs mt-1">{validation.email}</p>}
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          class="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {validation.password && <p class="text-red-500 text-xs mt-1">{validation.password}</p>}
      </div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <input type="checkbox" id="rememberMe" class="mr-2" />
          <label for="rememberMe" class="text-sm text-gray-600">Remember me</label>
        </div>
        <Link to="/forgot-password" class="text-sm text-gray-600">Forgot Password?</Link>
      </div>
      <button
        type="submit"
        class="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600 transition duration-200"
      >
        Log in
      </button>
    </form>
    <div class="mt-4 text-center">
      <p class="text-gray-600 text-sm">New User? <Link to="/Signup" class="text-teal-500 font-semibold">Sign up</Link></p>
    </div>
  </div>
</div>

    </>
  );
}

export default Login;

























// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Context/Auth_Context";

// function Login() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [validation, setValidation] = useState({});

//   function Validation(formData) {
//     const errors = [];
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       errors.email = "Enter email in correct format";
//     } else if (formData.email === "") {
//       errors.email = "Email is required";
//     }
//     if (formData.password === "") {
//       errors.password = "Password is required";
//     }
//     return errors;
//   }

//   const { login } = useContext(AuthContext);

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setValidation(Validation(formData));
//     setLoading(true);
  //   try {
  //     const url = import.meta.env.VITE_BASE_URL;
  //     const response = await axios.post(`${url}/api/login`, formData);
  //     const { token, user } = response.data;
  //     localStorage.setItem("token", token);
  //     login({ user, token });
  //     navigate("/");
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   return (
//     <>
//       {loading && <p>Loading...</p>}

      
//       <div className="bg-slate-200 min-h-screen flex justify-center items-center">


//       <div className=" md:flex hidden bg-slate-200 h-dvh flex">
//       <div
//         className="md:w-1/2 w-full mt-20 ml-56 mb-20 "
//         style={{ backgroundColor: "#90CCBA" }}
//       >
//         <h1 className="text-white mt-7 ml-8 font-bold">NestAway</h1>
//         <h1 className="font-bold text-white text-2xl mt-10 pt-20 ml-8 ">
//           Welcome
//         </h1>
//         <h1 className="font-bold text-white text-2xl mt-7 ml-8">Back!</h1>
//       </div>
//       </div>


//         <div className="w-full md:w-1/2 max-w-md md:p-0 p-8 bg-white rounded-lg shadow-lg">
//           <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">NestAway</h1>
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h2>
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Back!</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-3 py-2 w-full"
//               />
//               {validation.email && <p className="text-red-500 text-xs mt-1">{validation.email}</p>}
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 onChange={handleChange}
//                 className="border border-gray-300 rounded px-3 py-2 w-full"
//               />
//               {validation.password && <p className="text-red-500 text-xs mt-1">{validation.password}</p>}
//             </div>
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">
//                 <input type="checkbox" id="rememberMe" className="mr-2" />
//                 <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember me</label>
//               </div>
//               <Link to="/forgot-password" className="text-sm text-gray-600">Forgot Password?</Link>
//             </div>
//             <button
//               type="submit"
//               className="w-full text-white font-semibold py-2 px-4 rounded bg-[#90CCBA] transition duration-200"
//             >
//               Log in
//             </button>
//           </form>
//           <div className="mt-4 text-center">
//             <p className="text-gray-600 text-sm">New User? <Link to="/Signup" className="text-teal-500 font-semibold">Sign up</Link></p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;







































































// //finalllll
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Context/Auth_Context";

// // final
// function Login() {
//   const navigate = useNavigate();
//   const[loading,setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   //validations
//   const [validation, setValidation] = useState({});

//   function Validation(formData) {
//     //validation function
//     const errors = [];

//     //validating email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       errors.email = "Enter email in correct format";
//     } else if (formData.email === "") {
//       errors.email = "Email is required";
//     }

//     //validating password
//     if (formData.password === "") {
//       errors.password = "password is required";
//     }
//     return errors;
//   }

//   const {login} = useContext(AuthContext)

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setValidation(Validation(formData));
//     setLoading(true);
//     try {
//       const url = import.meta.env.VITE_BASE_URL
//       const response = await axios.post(
//         `${url}/api/login`,
//         formData
//       );
//       const { token, user } = response.data; // Destructure token and user directly
//       localStorage.setItem("token", token);
//       login({ user, token });   //coming from authcontext
//       // Handle successful login
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <>
//     {loading && <p>loading</p>}
//     <div className=" bg-slate-200 h-dvh flex">
//       <div
//         className="w-1/2 mt-20 ml-56 mb-20 "
//         style={{ backgroundColor: "#90CCBA" }}
//       >
//         <h1 className="text-white mt-7 ml-8 font-bold">NestAway</h1>
//         <h1 className="font-bold text-white text-5xl mt-10 pt-20 ml-8 ">
//           Welcome
//         </h1>
//         <h1 className="font-bold text-white text-5xl mt-7 ml-8">Back!</h1>
//       </div>

//       <div className="basis-1/2 bg-white mt-20 mb-20 mr-56 ">
//         <h1 className="text-black text-2xl font-bold mt-14 ml-8">Login</h1>
//         <p className="text-slate-400 mt-2 ml-8">
//           Welcome back! Please login to your <br />
//           account
//         </p>

//         {/* Email */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <h2 className="text-black text-sm font-semibold mt-5 ml-8">Email</h2>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
//             onChange={handleChange}
//           />
//           {validation.email && (
//             <p style={{ color: "red" }}>{validation.email}</p>
//           )}

//           {/* Password */}
//           <h2 className="text-black text-sm font-semibold mt-5 ml-8">
//             Password
//           </h2>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="border border-slate-500 w-80 h-8 mt-3 ml-8 rounded"
//             onChange={handleChange}
//           />
//           {validation.password && (
//             <p style={{ color: "red" }}>{validation.password}</p>
//           )}
//           {/* CheckBox */}
//           <div>
//           <div className="flex">
//             <div className="flex">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className="bg-teal-200 mt-4 mb-5 ml-8 mr-2"
//               />
//               <p className="mt-6 ml-0 text-slate-400 text-sm">Remember me</p>
//                </div>
//             <p className="ml-20 mb-8 mt-6 text-slate-400 text-sm mr-10">
//               Forgot Password?
//             </p>
//           </div>
//           </div>
//           {/* Button */}
//           <button
//             onClick={handleSubmit}
//             className="text-white font-bold py-2 px-20 w-80 h-10 ml-8 rounded"
//             style={{ backgroundColor: "#90CCBA" }}>
//             Log in
//           </button>
//         </form>
//         <div className="flex">
//           <p className=" text-slate-400 mt-2 ml-8 mr-2">New User? </p>
//           {/* <p className="mt-2 mr-4" style={{color:"#90CCBA"}}> Sign up</p> */}
//           <Link to="/Signup" className="mt-2" style={{ color: "#90CCBA" }}>
//             Signup
//           </Link>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Login;
