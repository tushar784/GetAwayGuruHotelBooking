

import { Link } from "react-router-dom"

    // logic for login
        const handleLoginClick = (history) => {
        history.push('/login');
    };

    // logic for signup
        const signupp = (history) => {
        history.push('/signup');
    };
  

function Navbar(){
    return (
        <>
       
            {/* Navbar */}
        <div className="flex bg-white fixed z-10 w-full ">
            <ul className="flex space-x-8 justify-center font-semibold ">

                <div className="ml-2"><li><h1 className="font-bold text-xl p-4">NestAway</h1></li></div>
                <div className=" flex justify-evenly pl-[300px]">
                {/* <li className="p-4">Home</li> */}
                <li className="p-4"><Link to='/' >Home</Link></li>
                <li className="p-4">Customer Support</li>
                <li className="p-4">About</li></div>
           </ul>

             {/* Navbar Login button */}
            <Link to="/login"><button className="font-semibold ml-80 mt-4" onClick={() => handleLoginClick()}> Login</button></Link>

            <Link to="/signup"><button className="bg-[#90CCBA] text-white font-bold py-1 mt-[0.75rem] ml-[1rem] px-4 rounded h-10" onClick={() =>signupp()}>Sign up</button></Link>
       </div>
       
       
        </>
      )
    }


export default Navbar













// gemini
// import { Link } from "react-router-dom";

// // Logic for login (assuming you have a separate login component)
// const handleLoginClick = (history) => {
//   history.push('/login');
// };

// // Logic for signup (assuming you have a separate signup component)
// const signupp = (history) => {
//   history.push('/signup');
// };

// function Navbar() {
//   return (
//     <nav className="bg-white fixed w-full flex justify-between p-4">
//       <div className="flex items-center">
//         <Link to="/">
//           <h1 className="font-bold text-xl">NestAway</h1>
//         </Link>
//       </div>

//       <ul className="hidden sm:flex space-x-8 font-semibold">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>Customer Support</li>
//         <li>About</li>
//       </ul>

//       <div className="flex items-center sm:hidden">
//         <Link to="/login">
//           <button className="font-semibold mr-4" onClick={() => handleLoginClick()}>
//             Login
//           </button>
//         </Link>
//         <Link to="/signup">
//           <button
//             className="bg-[#90CCBA] text-white font-bold py-1 px-4 rounded h-10"
//             onClick={() => signupp()}
//           >
//             Sign up
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


