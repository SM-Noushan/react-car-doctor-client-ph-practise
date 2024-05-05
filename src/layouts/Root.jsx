import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <p>This is root</p>
      <Outlet />
    </>
  );
};

export default Root;
