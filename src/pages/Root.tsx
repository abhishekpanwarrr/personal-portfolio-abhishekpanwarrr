import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div className="px-5 md:px-[5rem] lg:px-[2rem] xl:px-[6rem] 2xl:px-[2rem]  bg-[#34343B] text-[#F9F8F8]">
      <Outlet />
    </div>
  );
};
