function Speciality() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:mt-[10rem]]">
        <h1 className="md:text-xl font-bold md:mb-4 md:mt-1 mt-60 text-mx mb-4">
          Why book hotels with GetawayGuru
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {/* <div className="flex justify-center items-center ml-[3.8rem] mr-[4rem] mt-4 mb-[2rem]"> */}
          <img
            src="src/assets/img/deal.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/24Hr.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/LargeSelection.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/PayAtHotel.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default Speciality;
