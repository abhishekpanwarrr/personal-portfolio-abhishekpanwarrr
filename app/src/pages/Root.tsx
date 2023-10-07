import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const Root = () => {
  // TODO: Inactive text color -> 97989A
  return (
    <div className="px-5 md:px-[5rem] lg:px-[10rem] 2xl:px-[20rem]  bg-[#34343B] text-[#F9F8F8]">
      <Navbar />
      <Outlet />
    </div>
  );
};
