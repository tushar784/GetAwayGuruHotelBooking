import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-200 mt-[6rem] sticky">
      <div className="w-1/4 p-4">
        {children[0]}
      </div>
      <div className="w-3/4 p-4">
        {children[1]}
      </div>
    </div>
  );
};

export default Layout;