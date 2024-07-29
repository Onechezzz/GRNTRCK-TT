import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-2 bg-cyberBlack text-cyberPurple">
      <h3 className="text-ellipsis text-3xl font-bold">
        This page does not exist!
      </h3>
    </div>
  );
};

export default NotFoundPage;
