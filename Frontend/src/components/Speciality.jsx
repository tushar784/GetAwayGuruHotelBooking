import img1 from "../assets/img/deal.jpg";
import img2 from "../assets/img/24Hr.jpg";
import img3 from "../assets/img/LargeSelection.jpg";
import img4 from "../assets/img/PayAtHotel.jpg";

function Speciality() {
  return (
    <div className="container mx-auto px-4 py-8 md:mt-0 mt-20">
      <h1 className="text-2xl font-bold mb-4 ml-1 md:ml-0 md:mb-4">
        Why book hotels with GetawayGuru
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl mx-auto">
        <img
          src={img1}
          alt="Image 1"
          className="rounded-xl object-cover transition duration-300 transform hover:scale-110"
        />
        <img
          src={img2}
          alt="Image 2"
          className="rounded-xl object-cover transition duration-300 transform hover:scale-110"
        />
        <img
          src={img3}
          alt="Image 3"
          className="rounded-xl object-cover transition duration-300 transform hover:scale-110"
        />
        <img
          src={img4}
          alt="Image 4"
          className="rounded-xl object-cover transition duration-300 transform hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Speciality;
