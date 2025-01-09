import { CiBookmark, CiDeliveryTruck } from "react-icons/ci";
import useAllRestaurant from "../hooks/useAllRestaurant";
import useAllShop from "../hooks/useAllShop";
import { NavLink } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css/bundle";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineDeliveryDining } from "react-icons/md";
import useAllFoods from "../hooks/useAllFoods";
import { IoIosStar } from "react-icons/io";
const Home = () => {
  const [restaurant, isLoading, refetch] = useAllRestaurant();
  const [shops] = useAllShop();
  const [foods] = useAllFoods();
  const [currentPage, setCurrentPage] = useState(0);
  const [foodCurrentPage, setOfferCurrentPage] = useState(0);
  const totalItems = Math.ceil(shops?.length / 5);
  const offerFood = foods?.filter((res) => res?.foodOffer);
  const foodPages = Math.ceil(offerFood?.length / 5);

// offer foods carousal 
const nextOfferBtn=()=>{
  
}

  // shop carousal
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
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Shop</h1>
          <button className="text-sm mr-4 bg-gray-200 hover:bg-slate-100 duration-200 w-12 h-9 rounded-full">
            All
          </button>
        </div>
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
                      className="w-[270px] h-36 rounded-2xl relative hover:cursor-pointer"
                    >
                      <div className="w-44 py-1 px-2 space-x-3 mx-auto bg-gray-700 flex items-center absolute bottom-0 right-0 rounded-tl-xl rounded-bl-xl rounded-br-2xl shadow-lg bg-opacity-70">
                        <CiDeliveryTruck
                          size={30}
                          className="text-yellow-300"
                        />
                        <p className="text-white font-extrabold">
                          {shop?.deliveryTime}
                        </p>
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
            className="absolute rotate-180 top-14 right-0 rounded-full w-8 h-8 shadow-lg shadow-gray-200"
          >
            <FiChevronLeft className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
          </button>
        </div>
        {/* sorting data */}
        <div className="w-[1500px]">
          <div className="mt-8 py-2 bg-slate-100  flex justify-between px-4 items-center rounded-lg">
            <div className="flex space-x-3">
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                All
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Burger
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Sushi
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Pizza
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Wok
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Pasta
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Lounch
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Indian
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Bangali
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Rool
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                Carry-out
              </button>
              <button className="hover:bg-white py-3 px-4 rounded-lg">
                China
              </button>
            </div>
            <button className="hover:bg-white py-3 px-4 rounded-lg flex items-center space-x-4">
              <VscSettings />
              <span> Sorting</span>
            </button>
          </div>

          {/* offer card */}
          <div className="mt-7">
            <h1 className="font-semibold text-3xl">Offer</h1>
            <div className="grid grid-cols-4 gap-12 absolute">
              {offerFood &&
                offerFood?.map((food) => {
                  // console.log(foodtaurant, "134lin");
                  return (
                    <NavLink key={food._id} className="rounded">
                      <div className=" w-[340px] h-[270px] rounded-2xl mt-4 relative hover:cursor-pointer">
                        <img
                          src={food?.foodPhoto}
                          alt=""
                          className="h-[185px] w-[340px] rounded-xl object-cover object-contain"
                        />
                        <div className=" py-1 px-2 space-x-3 mx-auto bg-gray-900 flex items-center absolute right-3 m-4 -top-2 rounded-full shadow-lg bg-opacity-70 hover:bg-slate-50 text-white hover:text-black">
                          <CiBookmark className="w-5 h-7  " />
                        </div>

                        <div className="px-2 py-2">
                          <section className="flex items-center justify-between ">
                            <h1>{food?.foodName}</h1>
                            <div className="flex items-center space-x-2">
                              {" "}
                              <IoIosStar size={12} />
                              <p className="text-xs font-semibold">4.3</p>
                            </div>
                          </section>
                          <div className="pt-2 flex items-center space-x-3 font-semibold">
                            <MdOutlineDeliveryDining size={20} />
                            <p className="text-xs">20-30mins</p>
                          </div>
                          <p className="text-sm pt-2">Free Delivery</p>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
              <button
                onClick={prevBtn}
                className="absolute rotate-180 top-24 -left-4 rounded-full w-8 h-8 shadow-lg shadow-gray-200"
              >
                <FiChevronRight className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
              </button>
              <button
                onClick={nextBtn}
                className="absolute rotate-180 top-24 -right-5 rounded-full w-8 h-8 shadow-lg shadow-gray-200"
              >
                <FiChevronLeft className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
