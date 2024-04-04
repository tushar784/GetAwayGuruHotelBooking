import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <img src="../img/Logoimg.jpg" className="h-[3rem]" alt="Logo" />

      {/* Login Page */}
      <div className="lg:h-dvh lg:mt-[-3rem] lg:flex lg:pt-0 bg-white">
        {/* 1st half */}
        <div
          className="lg:w-1/2 lg:mt-20 lg:ml-56 lg:mb-16 hidden lg:block"
          style={{ backgroundColor: "#90CCBA" }}
        >
          {/* <div className='w-1/2 mt-20 ml-56 mb-16 drop-shadow-xl' style={{backgroundColor:"#90CCBA"}}> */}
          <h1 className="font-bold text-white lg:text-5xl lg:mt-10 lg:pt-20 lg:ml-8 mt-[2.5rem] text-2xl ml-4 ">
            Welcome
          </h1>
          <h1 className="font-bold text-white lg:text-5xl lg:mt-7 lg:ml-8 mt-[0.7rem] text-2xl ml-4 ">
            Back!
          </h1>
        </div>

        {/* 2nd Half */}

        {/* <div className='basis-1/2 bg-white lg:mt-20 lg:mb-16 lg:mr-56 mb-[22rem] drop-shadow-2xl '> */}
        <div className="basis-1/2 bg-white lg:mt-20 lg:mb-16 md:h-[32.5rem] h-[30rem] lg:ml-0 lg:mr-56 drop-shadow-2xl mt-[5rem] ml-[0.5rem] mr-[0.5rem]">
          <h1 className="text-black lg:text-2xl  font-bold lg:mt-14 lg:ml-8 ml-[7rem] mt-4 text-xl lg:pt-0 pt-4">
            Login in
          </h1>
          <p className="text-slate-400 lg:mt-2 lg:ml-8 ml-[5rem] mt-2">
            Create Your Account.
          </p>
          {/* <h1 className='text-black text-2xl font-bold lg:mt-14 lg:ml-8' >Login</h1>
                <p className='text-slate-400 lg:mt-2 lg:ml-8'>Welcome back! Please login to your <br/>account</p> */}

          {/* Email */}
          <h2 className="text-black text-sm font-semibold lg:mt-5 lg:ml-8 mt-4 ml-10">
            Email
          </h2>
          <input
            type="email"
            name="username"
            className="border border-slate-500 lg:w-80 lg:h-8 lg:mt-3 lg:ml-8 w-60 mt-2 ml-10 rounded"
            required
          />

          {/* Password */}
          <h2 className="text-black text-sm font-semibold lg:mt-5 lg:ml-8 mt-4 ml-10">
            Password
          </h2>
          <input
            type="password"
            name="password"
            className="border border-slate-500 lg:w-80 lg:h-8 lg:mt-3 lg:ml-8 w-60 mt-2 ml-10 rounded"
            required
          />

          {/* CheckBox */}
          <p className="flex">
            <p className="flex">
              <input
                type="checkbox"
                id="rememberMe"
                className="bg-teal-200 mt-4 mb-5 ml-8 mr-2"
              />
              <p className="lg:mt-6 lg:ml-0 text-slate-400 mt-[0.7rem] text-sm">
                Remember me
              </p>
            </p>
            <p className="lg:ml-20 lg:mb-8 lg:mt-6 text-slate-400 text-sm mt-[0.7rem] ml-6 lg:mr-10">
              Forgot Password?
            </p>
          </p>

          {/* Log in Button */}
          <button
            className="text-white font-bold lg:w-80 lg:h-10 lg:ml-8 lg:mb-4 lg:mt-4 w-60 mt-2 ml-10 h-8 rounded"
            style={{ backgroundColor: "#90CCBA" }}
          >
            Log in
          </button>

          <div className="flex">
            <p className=" text-slate-400 mt-2 ml-8 mr-2">New User? </p>
            <Link to="/SignUp" className="mt-2" style={{ color: "#90CCBA" }}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

// Final
// import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"

// function Login(){
//     return (
//         <>
//         <Navbar />

//                  {/* Login Page */}
//         <div className=' h-dvh flex '>

//                  {/* 1st half */}

//             <div className='w-1/2 mt-20 ml-56 mb-16 drop-shadow-xl ' style={{backgroundColor:"#90CCBA"}}>
//                     <h1 className='text-white mt-7 ml-8 font-bold'>NestAway</h1>
//                     <h1 className='font-bold text-white text-5xl mt-10 pt-20 ml-8 '>Welcome</h1>
//                     <h1 className='font-bold text-white text-5xl mt-7 ml-8'>Back!</h1>
//             </div>

//                     {/* 2nd Half */}

//             <div className='basis-1/2 bg-white mt-20 mb-16 mr-56 drop-shadow-2xl '>

//                 <h1 className='text-black text-2xl font-bold mt-14 ml-8' >Login</h1>
//                 <p className='text-slate-400 mt-2 ml-8'>Welcome back! Please login to your <br/>account</p>

//                       {/* Email */}
//                 <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Email/Username</h2>
//                 <input type="email" name="username" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

//                       {/* Password */}
//                 <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Password</h2>
//                 <input type="password" name="password" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

//                      {/* CheckBox */}
//             <p className='flex'>
//                 <p className="flex">
//                     <input type="checkbox" id="rememberMe" className='bg-teal-200 mt-4 mb-5 ml-8 mr-2'/>
//                     <p className="mt-6 ml-0 text-slate-400 text-sm">Remember me</p>
//                 </p>
//                 <p className="ml-20 mb-8 mt-6 text-slate-400 text-sm mr-10">Forgot Password?</p>
//             </p>

//                 {/* Log in Button */}
//                 <button className="text-white font-bold py-2 px-20 w-80 h-10 ml-8 rounded" style={{backgroundColor:"#90CCBA"}}>
//                     Log in
//                 </button>

//                 <div className="flex">
//                     <p className=" text-slate-400 mt-2 ml-8 mr-2">New User? </p>
//                     <Link to='/SignUp' className="mt-2" style={{color:"#90CCBA"}}>Signup</Link>
//                 </div>

//             </div>
//         </div>
//         </>
//       )
//     }

// export default Login
