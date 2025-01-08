import { useContext, useState } from "react";
import { GrLocationPin } from "react-icons/gr";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
// import useUser from "../hooks/useUser";
import { authContext } from "../AuthProvider/AuthProvider";
const navBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { logout } = useContext(authContext);
  // const [users, isLoading, refetch] = useUser();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  console.log(dropdown);
  console.log(user, "15 no line");
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
                className="outline-none px-3 py-[9px] text-sm "
                placeholder="Search for restaurants, food or produ..."
              />
              <button className="w-full bg-[#F2D700] px-4 rounded-r-lg text-sm">
                Search
              </button>
            </section>
          </label>

          {/* location searching section */}
          <div className="flex items-center border-[#e1dbdb] border py-[5px] rounded-lg  hover:bg-[#e8e7e7] w-52 space-x-4 duration-200 transform">
            <GrLocationPin className="w-7 h-7" />
            <p className="font-robotomain font-semibold text-xs text-[#3e3d3c]">
              Feni 3900, Bangladehs
            </p>
            <IoIosArrowDown className="w-4 h-5 " />
          </div>
        </div>

        {/* language and auth btn */}
        <div className="flex items-center space-x-3">
          {user && token ? (
            <>
              <div className="flex items-center  space-x-4">
                <section className="inline-flex flex-col items-center">
                  <TbWorld className="w-5 h-6" />
                  <p className="text-xs font-semibold">English</p>
                </section>
                <div className="flex flex-col items-center">
                  <IoIosNotificationsOutline size={20} className="w-5 h-6" />
                  <p className="text-xs font-semibold">Notification</p>
                </div>
              </div>
              <button onClick={handleDropdown}>
                {user?.picture ? (
                  <img src={user?.picture} className={`w-10 rounded-full`} />
                ) : (
                  <img src={user?.photo} className={`w-10 rounded-full`} />
                )}

                <div
                  className={`w-96 bg-white shadow-lg rounded-xl px-5 py-5 h-80  ${
                    dropdown
                      ? "fixed top-[220px] right-4 -translate-y-[215px] duration-200 "
                      : "hidden"
                  }`}
                >
                  <div className="flex items-center w-full justify-between">
                    <h1 className="text-xl font-semibold">{user?.name}</h1>
                    {user?.picture ? (
                      <img
                        src={user?.picture}
                        className={`w-10 rounded-full`}
                      />
                    ) : (
                      <img src={user?.photo} className={`w-10 rounded-full`} />
                    )}
                  </div>
                  <div className="flex flex-col mt-4 space-y-2 place-items-start">
                    <Link className="hover:bg-slate-100 py-[6px] rounded-lg">
                      My Info
                    </Link>
                    <Link className="hover:bg-slate-100 py-[6px] rounded-lg">
                      My addresses
                    </Link>
                    <Link className="hover:bg-slate-100 py-[6px] rounded-lg">
                      My orders
                    </Link>
                    <Link className="hover:bg-slate-100 py-[6px] rounded-lg">
                      Affiliate network
                    </Link>
                    <button
                      onClick={() => logout()}
                      className="hover:bg-slate-100 py-[6px] rounded-lg"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </button>{" "}
            </>
          ) : (
            <Link
              to="/login"
              className="py-[10px] px-3 rounded-lg hover:bg-[#edeaea] font-semibold text-sm bg-[#F2F2F2]"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default navBar;
