import { ReactElement } from 'react';

const MainPage = (): ReactElement => {
  return (
    <div className="flex items-center justify-center min-h-screen p-2 bg-cyberBlack text-cyberPurple">
      <h3 className="text-ellipsis text-3xl font-bold">Hello world!</h3>
    </div>
  );
};

export default MainPage;
