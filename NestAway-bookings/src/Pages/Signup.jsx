import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

    // logic for signup (backend logic is required)
//     const signupp = (history) => {
//       history.push('/signup');
//   };


function Signup(){
  return (
     <>
        <Navbar />
        <div className='h-dvh lg:flex lg:pt-0 pt-[2rem]'>
        
        <div className='lg:w-1/2 lg:mt-20 lg:ml-56 lg:mb-16 drop-shadow-xl mt-[1rem] ml-[1rem] w-[19.7rem] ' style={{backgroundColor:"#90CCBA"}}>
            {/* <div className='w-1/2 mt-20 ml-56 mb-16 drop-shadow-xl' style={{backgroundColor:"#90CCBA"}}> */}
               <h1 className='text-white lg:mt-7 lg:ml-8 font-bold mt-8 ml-2'>NestAway</h1>
               <h1 className='font-bold text-white lg:text-5xl lg:mt-10 lg:pt-20 lg:ml-8 mt-[2.5rem] text-2xl ml-4 '>Welcome</h1>
               <h1 className='font-bold text-white lg:text-5xl lg:mt-7 lg:ml-8 mt-[0.7rem] text-2xl ml-4 '>Back!</h1>
         </div>
         {/* <div className='lg:w-1/2 lg:mt-20 lg:ml-56 lg:mb-16 drop-shadow-xl mt-[1rem] ml-[1rem] mb-[5rem] w-[19.7rem] ' style={{backgroundColor:"#90CCBA"}}>
               <h1 className='text-white lg:mt-7 lg:ml-8 font-bold mt-8 ml-2'>NestAway</h1>
               <h1 className='font-bold text-white lg:text-5xl lg:mt-10 lg:pt-20 lg:ml-8 mt-[4rem] text-2xl ml-4 '>Welcome</h1>
               <h1 className='font-bold text-white lg:text-5xl lg:mt-7 lg:ml-8 mt-[0.7rem] text-2xl ml-4 '>Back!</h1>
         </div> */}

               {/* 2nd Half */}

         <div className='basis-1/2 bg-white lg:mt-20 lg:mb-16 md:h-[32.5rem] h-[25rem] lg:ml-0 lg:mr-56 drop-shadow-2xl mt-[-1rem] ml-[1rem] w-[19.7rem]'>

            <h1 className='text-black text-2xl font-bold lg:mt-14 lg:ml-8 ml-[7rem] mt-4' >Sign up</h1>
            <p className='text-slate-400 lg:mt-2 lg:ml-8 ml-[5rem] mt-2'>Create Your Account.</p>
            
                   {/* Username */}
 
            <h2 className='text-black text-sm font-semibold lg:mt-5 lg:ml-8 mt-4 ml-10'>Username</h2>
            <input type="text" name="username" className='border border-slate-500 lg:w-80 lg:h-8 lg:mt-3 lg:ml-8 w-60 mt-2 ml-10 rounded'required/>

                  {/* Email */}
            <h2 className='text-black text-sm font-semibold lg:mt-5 lg:ml-8 mt-4 ml-10'>Email</h2>
            <input type="email" name="username" className='border border-slate-500 lg:w-80 lg:h-8 lg:mt-3 lg:ml-8 w-60 mt-2 ml-10 rounded'required/>

                  {/* Password */}
            <h2 className='text-black text-sm font-semibold lg:mt-5 lg:ml-8 mt-4 ml-10'>Password</h2>
            <input type="password" name="password" className='border border-slate-500 lg:w-80 lg:h-8 lg:mt-3 lg:ml-8 w-60 mt-2 ml-10 rounded'required/>

         
            {/* Button */}
            <button className="text-white font-bold lg:w-80 lg:h-10 lg:ml-8 lg:mb-4 lg:mt-8 w-60 mt-4 ml-10 h-8 rounded" style={{backgroundColor:"#90CCBA"}}>
               Sign up
            </button>


            <div className="flex">
               <p className=" text-slate-400  lg:ml-8 lg:mr-2 lg:mt-0 mt-2 ml-8">Already have an account? </p>
               {/* <p className=" mr-4" style={{color:"#90CCBA"}}> Login</p> */}
               <Link to='/login' className="lg:mb-12 lg:mb-4 lg:mt-0 mt-2 " style={{color:"#90CCBA"}}>Login</Link>
            </div>
            
         </div>
      </div>
         </>
      )
      }

      export default Signup





      // Final without responsive
//       import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"

//     // logic for signup (backend logic is required)
// //     const signupp = (history) => {
// //       history.push('/signup');
// //   };


// function Signup(){
//   return (
//      <>
//         <Navbar />
//         <div className='h-dvh flex'>
        
//         {/* 1st half */}

//          <div className='w-1/2 mt-20 ml-56 mb-16 drop-shadow-xl ' style={{backgroundColor:"#90CCBA"}}>
//                <h1 className='text-white mt-7 ml-8 font-bold'>NestAway</h1>
//                <h1 className='font-bold text-white text-5xl mt-10 pt-20 ml-8 '>Welcome</h1>
//                <h1 className='font-bold text-white text-5xl mt-7 ml-8'>Back!</h1>
//          </div>

//                {/* 2nd Half */}

//          <div className='basis-1/2 bg-white mt-20 mb-16 mr-56 drop-shadow-2xl '>

//             <h1 className='text-black text-2xl font-bold mt-14 ml-8' >Sign up</h1>
//             <p className='text-slate-400 mt-2 ml-8'>Create Your Account.</p>
            
//                    {/* Username */}
 
//             <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Username</h2>
//             <input type="text" name="username" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

//                   {/* Email */}
//             <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Email</h2>
//             <input type="text" name="username" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

//                   {/* Password */}
//             <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Password</h2>
//             <input type="password" name="password" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

         
//             {/* Button */}
//             <button className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded" style={{backgroundColor:"#90CCBA"}}>
//                Sign up
//             </button>

//             {/* <Link to="/"><button className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded" onClick={() =>signupp()} style={{backgroundColor:"#90CCBA"}}>
//                Sign up
//             </button></Link> */}
         


//             <div className="flex">
//                <p className=" text-slate-400  ml-8 mr-2">Already have an account? </p>
//                {/* <p className=" mr-4" style={{color:"#90CCBA"}}> Login</p> */}
//                <Link to='/login' className="mb-12" style={{color:"#90CCBA"}}>Login</Link>
//             </div>
            
//          </div>
//       </div>
//          </>
//       )
//       }

//       export default Signup