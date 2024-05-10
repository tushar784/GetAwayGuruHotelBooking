import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-100 sticky">
      {/* filter */}
      <div className="md:w-1/4 md:p-4">
        {children[0]}
      </div>
      
      {/* hotellist  */}
      <div className="md:w-3/4 p-4 ml-2 w-[20rem] ">
        {children[1]}
      </div>
    </div>
  );
};

export default Layout;