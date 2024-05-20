import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoShareSocialSharp } from "react-icons/io5";

const PackageImg = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const packageData = {
    Package_Name: "Swiss Paris Delight ",
    Image_1: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Paris1.jpg?crop=800:420&downsize=800:420",
    Image_2: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/paris2.jpg?crop=800:420&downsize=800:420",
    Image_3: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/Louvre-Museum-05,-Paris,-France.jpg?crop=800:420&downsize=800:420",
    Image_4: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/paris5.jpg?crop=800:420&downsize=800:420",
    Image_5: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/734/paris4.jpg?crop=800:420&downsize=800:420",
    Star_Rating: 4,
    Location: "Switzerland"
  };

  const images = [
    packageData.Image_1,
    packageData.Image_2,
    packageData.Image_3,
    packageData.Image_4,
    packageData.Image_5,
  ].filter(Boolean); // Filter out undefined or null values

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden  ">
        <div className="relative">
          <img
            className="w-full h-64 object-cover"
            src={images[currentImageIndex]}
            alt={packageData.Package_Name}
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <FaArrowLeft
              className="text-white text-2xl cursor-pointer"
              onClick={handlePreviousImage}
            />
            <FaArrowRight
              className="text-white text-2xl cursor-pointer"
              onClick={handleNextImage}
            />
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="flex bg-white-200 ml-[4rem] bg-white-300 w-[70rem]">
          <div className="mt-[1.5rem] ml-[2rem] w-[25rem]">
            <img
              className="rounded mt-2 h-[26rem] object-cover"
              src={images[0]}
              alt={packageData.Package_Name}
            />
          </div>

          <div className="flex-direction-column mt-[2rem] ml-[20px] border-1 w-[19rem]">
            <img
              className="rounded w-[18rem] h-[12.5rem]"
              src={images[1]}
              alt=""
            />
            <img
              className="rounded w-[18rem] h-[12.5rem] mt-4"
              src={images[2]}
              alt=""
            />
          </div>

          <div className="flex-direction-column mt-[2rem] w-[19rem]">
            <img
              className="rounded w-[18rem] h-[12.5rem]"
              src={images[3]}
              alt=""
            />
            <div className="mt-4 rounded">
              <img
                className="rounded w-[18rem] h-[12.5rem]"
                src={images[4]}
                alt=""
              />
              <div className="relative inset-0 flex items-center justify-center">
                {/* Placeholder for additional images or text */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center md:w-[70rem] md:h-full md:ml-[6rem] md:mt-[1rem]">
        <h1 className="text-black md:text-2xl text-2xl mt-2 font-bold md:mr-2">
          {packageData.Package_Name}
        </h1>
        <div className="flex justify-normal gap-2">
          {[...Array(packageData.Star_Rating)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index}>
                <FaStar
                  size={12}
                  className={`text-yellow-500 cursor-pointer mt-4 ${
                    currentRating <= (hover || rating)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <p className="mt-[10px]">{packageData.Star_Rating}/5</p>
          <div className="flex mt-0 gap-2 ">
            <ImLocation2 className="text-1xl mt-[15px] " />
            <p className="mt-[10px] ml-[5px]">{packageData.Location}</p>
            <IoShareSocialSharp className="text-1xl mt-[15px] " />
            <p className="cursor-pointer mt-[10px]">share</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default PackageImg;
