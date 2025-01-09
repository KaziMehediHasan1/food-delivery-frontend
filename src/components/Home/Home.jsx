import { CiDeliveryTruck } from "react-icons/ci";
import useAllRestaurant from "../hooks/useAllRestaurant";
import useAllShop from "../hooks/useAllShop";
import { NavLink } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css/bundle";
import { useState } from "react";
const Home = () => {
  const [restaurant, isLoading, refetch] = useAllRestaurant();
  const [shops] = useAllShop();
  console.log(shops);
  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = Math.ceil(shops?.length / 5);
  // console.log(totalItems);
  const nextBtn = () => {
    if (currentPage < totalItems - 1) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    }
  };
  const prevBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };
  const currentShops = shops?.slice(currentPage * 5, (currentPage + 1) * 5);
  return (
    <div className="w-[1520px] mx-auto mt-10 font-robotomain">
      {/* SHOP SECTION */}
      <div>
        <h1 className="text-3xl font-semibold">Shop</h1>
        {/* parent card div */}{" "}
        <div className="mt-2 gap-5 relative grid grid-cols-5">
          {shops
            ? currentShops?.map((shop) => {
                return (
                  <NavLink key={shop?._id}>
                    <div
                      style={{
                        backgroundImage: `url(${shop?.shopImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="w-64 h-36 rounded-2xl relative hover:cursor-pointer"
                    >
                      <div className="w-36 py-1 px-2 space-x-3 mx-auto bg-gray-700 flex items-center absolute bottom-0 right-0 rounded-tl-xl rounded-bl-xl rounded-br-2xl shadow-lg bg-opacity-70">
                        <CiDeliveryTruck
                          size={30}
                          className="text-yellow-300"
                        />
                        <p className="text-white  font-extrabold">5-14mins</p>
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : "nai"}{" "}
          <button
            onClick={prevBtn}
            className="absolute rotate-180 top-14 -left-3 rounded-full w-8 h-8 shadow-lg shadow-gray-200"
          >
            <FiChevronRight className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
          </button>
          <button
            onClick={nextBtn}
            className="absolute rotate-180 top-14 right-2 rounded-full w-8 h-8 shadow-lg shadow-gray-200"
          >
            <FiChevronLeft className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
