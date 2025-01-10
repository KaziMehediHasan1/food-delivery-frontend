import { useContext, useState } from "react";
import { GrLocationPin } from "react-icons/gr";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const navBar = () => {
  const navigete = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const { logout } = useContext(authContext);
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  const handleSearchData = async () => {
    if (!search.trim()) {
      toast.error("please write you foods name!");
      return;
    }
    navigete(`/searching?search=${search}`);
  };
  return (
    <div className="lg:border-b-[1px] font-robotomain border-gray-300 lg:w-[98%] w-[340px] md:w-[740px] mx-auto">
      <nav className="flex items-center justify-between lg:px-4 lg:py-3 py-2">
        {/* mobile device start */}
        <div className="navbar border shadow-md bg-gray-100 lg:hidden rounded-lg flex items-center  z-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <span>
                    {user?.picture ? (
                      <img
                        src={user?.picture}
                        className={`w-12 rounded-full`}
                      />
                    ) : (
                      <img src={user?.photo} className={`w-12 rounded-full`} />
                    )}
                  </span>
                  <Link>My Info</Link>
                  <Link>My address</Link>
                  <Link>My orders</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  {user ? (
                    <button onClick={logout()}>Logout</button>
                  ) : (
                    <Link
                      to="/login"
                      className="py-[10px] px-3 rounded-lg  font-semibold text-sm"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>{" "}
          <Link to="/" className="font-semibold text-xl pl-8 md:pl-44">
            FreshFeast 
          </Link>
        </div>
        {/* mobile device end */}
        <div className="lg:flex hidden items-center space-x-5">
          <div className="font-bold text-xl flex items-center space-x-4">
            <Link to="/" className="text-xl lg:text-3xl">
              {" "}
              FreshFeast
            </Link>{" "}
            <div className="h-4 border lg:block hidden"></div>
          </div>

          <label className="border pl-2 hidden border-[#F2D700] rounded-lg lg:flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>

            <section className="lg:flex hidden">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none px-3 py-[9px] text-sm border-none focus:ring-0"
                placeholder={
                  search ? search : "Search for restaurants, food or produ..."
                }
              />
              <button
                onClick={handleSearchData}
                className="w-full bg-[#F2D700] px-4 rounded-r-lg text-sm"
              >
                Search
              </button>
            </section>
          </label>

          {/* location searching section */}
          <div className="lg:flex hidden items-center border-[#e1dbdb] border py-[5px] rounded-lg  hover:bg-[#e8e7e7] w-52 space-x-4 duration-200 transform">
            <GrLocationPin className="w-7 h-7" />
            <p className="font-robotomain font-semibold text-xs text-[#3e3d3c]">
              Feni 3900, Bangladehs
            </p>
            <IoIosArrowDown className="w-4 h-5 " />
          </div>
        </div>

        {/* language and auth btn */}
        <div className="lg:flex hidden items-center space-x-3">
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
                  className={`w-96 bg-white shadow-lg rounded-xl px-5 py-1 h-80  ${
                    dropdown
                      ? "fixed top-[220px] right-4 z-10 -translate-y-[215px] duration-200 "
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
                  <div className="flex flex-col mt-3 space-y-2 place-items-start">
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
                    <Link
                      to="/dashboard"
                      className="hover:bg-slate-100 py-[6px] rounded-lg"
                    >
                      Dashboard
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
