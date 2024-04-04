

const Filters = () => {
  return (
    <>
    
    {/* <div className="box-border h-32 ml-20 p-4 border-2 mt-[12rem]"> */}
    <div className="bg-white ml-[6rem] w-[18rem] h-[29rem] fixed mt-[15rem] rounded-2xl">
        <h1 className="text-3xl ml-4 font-bold mb-2 mt-4 ">Filter</h1>
        <div className=" ml-4">

            <div>
                <h1 className="text-2xl font-bold border-t border-gray-400 w-64 ">Most Popular</h1>
               
            <div className="flex">
            <p className="mt-2 mr-20 text-black text-md font-semibold ">Free Cancellation</p>
              {/* <input
                type="checkbox"
                id="cancellation"
                className="bg-teal-200 mt-[0.9rem] ml-8 mr-2 size-4"
              /> */}
            </div>

            <div className="flex">
            <p className="mt-2 mr-20 text-black text-md font-semibold ">Free breakfast</p>
              {/* <input
                type="checkbox"
                id="cancellation"
                className="bg-teal-200 mt-[0.9rem] ml-8 mr-2 size-4"
              /> */}
            </div>

            <div className="flex">
            <p className="mt-2 mr-20 text-black text-md font-semibold ">Parking Availibility</p>
              {/* <input
                type="checkbox"
                id="cancellation"
                className="bg-teal-200 mt-[0.9rem] ml-8 mr-2 size-4"
              /> */}
            </div>

            </div>    
                <div className="text-2xl font-bold ">Price</div>

            <div className="flex">
            <p className="mt-2 mr-20 text-black text-md font-semibold ">High to Low</p>
              {/* <input
                type="checkbox"
                id="cancellation"
                className="bg-teal-200 mt-[0.9rem] ml-8 mr-2 size-4"
              /> */}
            </div>
            <div className="flex">
            <p className="mt-2 mr-20 text-black text-md font-semibold ">Low to High</p>
              {/* <input
                type="checkbox"
                id="cancellation"
                className="bg-teal-200 mt-[0.9rem] ml-8 mr-2 size-4"
              /> */}
            </div>
                <div className="text-2xl font-bold ">Star Rating</div>
                <p>5 Star</p>
                <p>4 Star</p>
                <p>3 Star</p>
                <p>2 Star</p>
                <p>1 Star</p>
        </div>
    </div>
   
    </>
  )
}

export default Filters