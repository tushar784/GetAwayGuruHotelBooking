import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-200 sticky">
      <div className="md:w-1/4 md:p-4">
        {children[0]}
      </div>
      <div className="md:w-3/4 p-4 ml-2 w-[20rem] ">
        {children[1]}
      </div>
    </div>
  );
};

export default Layout;