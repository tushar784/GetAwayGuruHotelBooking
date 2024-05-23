import React from 'react';

function HolidayDayPackage({ singlePackage }) {
  return (
    <>
      <div className="container mx-auto mt-8 px-4">
        {/* Day 1 */}
        <div className="font-poppins md:ml-[5rem] md:w-[69rem] border rounded-2xl border-gray-300 mb-8 p-4">
          <h2 className="font-bold text-xl mb-4">Day 1</h2>
          <div className="flex flex-col lg:flex-row">
            <p className="flex-1 mb-4 lg:mb-0 lg:mr-4">
              {singlePackage.Day_1}
            </p>
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/11/12/package-holiday-credit-grafner.jpg?width=1200"
              className="w-full lg:w-80 h-56 rounded-xl object-cover"
              alt="Coastal town in Greece"
            />
          </div>
        </div>

        {/* Day 2 */}
        <div className="font-poppins md:ml-[5rem] md:w-[69rem] border rounded-2xl border-gray-300 mb-8 p-4">
          <h2 className="font-bold text-xl mb-4">Day 2</h2>
          <div className="flex flex-col lg:flex-row">
            <p className="flex-1 mb-4 lg:mb-0 lg:mr-4">
              {singlePackage.Day_2}
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpRT9PoOH8YGK8GBBV1W6Eos-PgGxVYFakLbaoQje_2AyngIX3sxkkSqgFhfqUwxQQnc&usqp=CAU"
              className="w-full lg:w-80 h-56 rounded-xl object-cover"
              alt="Coastal town in Greece"
            />
          </div>
        </div>

        {/* Day 3 */}
        <div className="font-poppins md:ml-[5rem] md:w-[69rem] border rounded-2xl border-gray-300 mb-8 p-4">
          <h2 className="font-bold text-xl mb-4">Day 3</h2>
          <div className="flex flex-col lg:flex-row">
            <p className="flex-1 mb-4 lg:mb-0 lg:mr-4">
              {singlePackage.Day_3}
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB19aqJJgiX8ByB7XRBNEhlsIW5LGFPnto4m4QDmRN3w9srMPcT6-lB9NsG9svI7rYamY&usqp=CAU"
              className="w-full lg:w-80 h-56 rounded-xl object-cover"
              alt="Coastal town in Greece"
            />
          </div>
        </div>

        {/* Day 4 */}
        <div className="font-poppins md:ml-[5rem] md:w-[69rem] border rounded-2xl border-gray-300 mb-8 p-4">
          <h2 className="font-bold text-xl mb-4">Day 4</h2>
          <div className="flex flex-col lg:flex-row">
            <p className="flex-1 mb-4 lg:mb-0 lg:mr-4">
              {singlePackage.Day_4}
            </p>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/6/315657859/VW/MS/HX/9333012/goa-combo-package-250x250.jpg"
              className="w-full lg:w-80 h-56 rounded-xl object-cover"
              alt="Coastal town in Greece"
            />
          </div>
        </div>

        {/* Day 5 */}
        <div className="font-poppins md:ml-[5rem] md:w-[69rem] border rounded-2xl border-gray-300 mb-8 p-4">
          <h2 className="font-bold text-xl mb-4">Day 5</h2>
          <div className="flex flex-col lg:flex-row">
            <p className="flex-1 mb-4 lg:mb-0 lg:mr-4">
              {singlePackage.Day_5}
            </p>
            <img
              src="https://www.travelguru.com/holiday-packages/images/goa.jpg"
              className="w-full lg:w-80 h-56 rounded-xl object-cover"
              alt="Coastal town in Greece"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HolidayDayPackage;
