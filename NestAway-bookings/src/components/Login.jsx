import { Link } from "react-router-dom"
// import Navbar from "./Navbar"


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





// final
function Login(){
    return (
        <div className=' bg-slate-200 h-dvh flex'>

            <div className='w-1/2 mt-20 ml-56 mb-20 ' style={{backgroundColor:"#90CCBA"}}>
                    <h1 className='text-white mt-7 ml-8 font-bold'>NestAway</h1>
                    <h1 className='font-bold text-white text-5xl mt-10 pt-20 ml-8 '>Welcome</h1>
                    <h1 className='font-bold text-white text-5xl mt-7 ml-8'>Back!</h1>
            </div>

            <div className='basis-1/2 bg-white mt-20 mb-20 mr-56 '>

                <h1 className='text-black text-2xl font-bold mt-14 ml-8' >Login</h1>
                <p className='text-slate-400 mt-2 ml-8'>Welcome back! Please login to your <br/>account</p>
                

                {/* Email */}
                <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Email/username</h2>
                <input type="text" name="username" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

                {/* Password */}
                <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Password</h2>
                <input type="password" name="password" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

                {/* CheckBox */}
            <p className='flex'> 
                <p className="flex">
                    <input type="checkbox" id="rememberMe" className='bg-teal-200 mt-4 mb-5 ml-8 mr-2'/>
                    <p className="mt-6 ml-0 text-slate-400 text-sm">Remember me</p>
                </p>
                <p className="ml-20 mb-8 mt-6 text-slate-400 text-sm mr-10">Forgot Password?</p>
            </p>

                {/* <div className="flex">
                    <p className="mr-4"> 
                        <input type="checkbox" id="rememberMe" className='mt-4 mb-5 ml-8 mr-4' style={{backgroundColor:"#90CCBA"}}/>
                        <p className="text-slate-400 text-xs mb-9 mt-4">Remember me</p>
                    </p>
                    <p className="ml-5 mr-9 mt-4 text-slate-400 text-xs">Forgot Password?</p>
                </div> */}


                {/* Button */}
                <button className="text-white font-bold py-2 px-20 w-80 h-10 ml-8 rounded" style={{backgroundColor:"#90CCBA"}}>
                    Log in
                </button>


                <div className="flex">
                    <p className=" text-slate-400 mt-2 ml-8 mr-2">New User? </p>
                    {/* <p className="mt-2 mr-4" style={{color:"#90CCBA"}}> Sign up</p> */}
                    <Link to='/Signup' className="mt-2" style={{color:"#90CCBA"}}>Signup</Link>
                </div>
                

            </div>
        </div>
      )
    }
    

 
export default Login



