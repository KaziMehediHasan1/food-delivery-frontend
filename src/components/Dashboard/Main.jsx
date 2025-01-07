import { CiShop } from "react-icons/ci";
import { GiFoodTruck } from "react-icons/gi";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PiBowlFoodThin } from "react-icons/pi";
import { Link, NavLink, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <div className="flex items-center space-x-4 w-full h-screen ">
        {/* bar */}
        <div className="w-[20%] h-full bg-slate-100 p-2 border-t border-r border-[#f5de31]">
          <div className="px-4 space-y-5">
            <Link
              to="/"
              className="font-semibold text-2xl flex items-center space-x-3"
            >
              <p className="text-[#564d0c]">FreshFeast</p>
              <GiFoodTruck className="w-6 h-6 text-yellow-700" />
            </Link>
            <div className="space-y-3">
              <NavLink
                to="addrestaurant"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-1 bg-[#f5de31]  rounded-lg font-semibold py-1 px-2"
                    : "flex items-center space-x-1 font-semibold py-1 px-2 hover:bg-slate-300 rounded-lg"
                }
              >
                <p>Add Restaurant</p>
                <IoRestaurantOutline className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="addfood"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-1 bg-[#f5de31]  rounded-lg font-semibold py-1 px-2"
                    : "flex items-center space-x-1 font-semibold py-1 px-2 hover:bg-slate-300 rounded-lg"
                }
              >
                <p>Add Foods</p>
                <PiBowlFoodThin className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="addshop"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-1 bg-[#f5de31]  rounded-lg font-semibold py-1 px-2"
                    : "flex items-center space-x-1 font-semibold py-1 px-2 hover:bg-slate-300 rounded-lg"
                }
              >
                <p>Add Shop</p>
                <CiShop className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="addproduct"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-1 bg-[#f5de31] rounded-lg font-semibold py-1 px-2"
                    : "flex items-center space-x-1 font-semibold py-1 px-2 hover:bg-slate-300 rounded-lg"
                }
              >
                <p>Add Products</p>
                <MdProductionQuantityLimits className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="logout"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center space-x-1 bg-[#f5de31]  rounded-lg font-semibold py-1 px-2"
                    : "flex items-center space-x-1 font-semibold py-1 px-2 hover:bg-slate-300 rounded-lg"
                }
              >
                <p>Logout</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="w-[80%] h-screen bg-gray-100 p-2 border-l border-[#f5de31] overflow-y-scroll ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
