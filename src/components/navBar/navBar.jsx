import { GrLocationPin } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
const navBar = () => {
  return (
    <div className="border-b-[1px] font-robotomain border-gray-300 w-[98%] mx-auto">
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-5">
          <h1 className="font-bold text-xl">FreshFeast</h1>

          <label className="border pl-2 border-[#F2D700] rounded-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <section className="flex ">
              <input
                type="text"
                className="outline-none px-3 py-[8px] text-sm "
                placeholder="Search for restaurants, food or produ..."
              />
              <button className="w-full bg-[#F2D700] px-4 rounded-r-lg text-sm">
                Search
              </button>
            </section>
          </label>

          {/* location searching section */}
          <div className="flex items-center bg-[#F2F2F2] py-[5px] rounded-lg  hover:bg-[#edeaea] w-52 space-x-4 duration-200 transform">
            <GrLocationPin className="w-7 h-7" />
            <p className="font-robotomain font-semibold text-xs text-[#3e3d3c]">
              Feni 3900, Bangladehs 
            </p>
            <IoIosArrowDown className="w-4 h-5 " />
          </div>
        </div>

        {/* language and auth btn */}
        <div className="flex items-center space-x-3">
          <section className="inline-flex flex-col items-center">
            <TbWorld className="w-5 h-6" />
            <p className="text-xs font-semibold">English</p>
          </section>
          <button className="py-2 px-4 rounded-lg hover:bg-[#edeaea] font-semibold text-[17px] bg-[#F2F2F2]">
            Log in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
