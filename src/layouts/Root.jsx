import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Root = () => {
  return (
    <>
      <Header />
      <main className="mx-auto container xl:max-w-[1140px] px-4 font-inter">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
