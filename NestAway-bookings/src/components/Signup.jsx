import { Link } from "react-router-dom"


    // logic for signup (backend logic is required)
//     const signup = (history) => {
//       history.push('/signup');
//   };


function Signup(){
  return (
     <>
      
        <div className='h-dvh flex'>
        
        {/* 1st half */}

         <div className='w-1/2 mt-20 ml-56 mb-16 drop-shadow-xl ' style={{backgroundColor:"#90CCBA"}}>
               <h1 className='text-white mt-7 ml-8 font-bold'>NestAway</h1>
               <h1 className='font-bold text-white text-5xl mt-10 pt-20 ml-8 '>Welcome</h1>
               <h1 className='font-bold text-white text-5xl mt-7 ml-8'>Back!</h1>
         </div>

               {/* 2nd Half */}

         <div className='basis-1/2 bg-white mt-20 mb-16 mr-56 drop-shadow-2xl '>

            <h1 className='text-black text-2xl font-bold mt-14 ml-8' >Sign up</h1>
            <p className='text-slate-400 mt-2 ml-8'>Create Your Account.</p>
            
                   {/* Username */}
 
            <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Username</h2>
            <input type="text" name="username" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

                  {/* Email */}
            <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Email</h2>
            <input type="text" name="username" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

                  {/* Password */}
            <h2 className='text-black text-sm font-semibold mt-5 ml-8'>Password</h2>
            <input type="password" name="password" className='border border-slate-500 w-80 h-8 mt-3 ml-8 rounded'required/>

         
            {/* Button */}
            <button className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded" style={{backgroundColor:"#90CCBA"}}>
               Sign up
            </button>

            {/* <Link to="/"><button className="text-white font-bold w-80 h-10 ml-8 mb-4 mt-8 rounded" onClick={() =>signupp()} style={{backgroundColor:"#90CCBA"}}>
               Sign up
            </button></Link> */}
         


            <div className="flex">
               <p className=" text-slate-400  ml-8 mr-2">Already have an account? </p>
               {/* <p className=" mr-4" style={{color:"#90CCBA"}}> Login</p> */}
               <Link to='/login' className="mb-12" style={{color:"#90CCBA"}}>Login</Link>
            </div>
            
         </div>
      </div>
         </>
      )
      }

      export default Signup