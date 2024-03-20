import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col lg:flex-row justify-center items-center">
      <p className="mb-4 lg:mb-0 lg:mr-24">© 2024 Unipolar Technology Ltd. India. All brands are trademarks of their respective owners.</p>
      <div className="flex space-x-4">
        <IoLogoFacebook className="text-2xl" />
        <FaSquareXTwitter className="text-2xl" />
        <FaInstagram className="text-2xl" />
      </div>
    </footer>
  );
}

export default Footer;












// Working
// import { IoLogoFacebook } from "react-icons/io5";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
//       <p className="mr-[24rem]">© 2024 Unipolar Technology Ltd.India. All brands are trademarks of their respective owners.</p>
//       <div className="ml-[4rem] mt-4 mb-2 flex space-x-4">
//       <IoLogoFacebook />
//       <FaSquareXTwitter />
//       <FaInstagram />
//       </div>
//     </footer>
//   );
// }

// export default Footer;



// old 
// function Footer(){
//   return (
//     <div className="bg-emerald-500 ">
//         <h1 className=" text-white justify-center ml-64">© 2024 Unipolar Technology Ltd.India. All brands are trademarks of their respective owners.</h1>
//     </div>
//   )
// }

// export default Footer

