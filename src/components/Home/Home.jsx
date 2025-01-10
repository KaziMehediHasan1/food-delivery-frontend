import { CiBookmark, CiDeliveryTruck } from "react-icons/ci";
import useAllRestaurant from "../hooks/useAllRestaurant";
import useAllShop from "../hooks/useAllShop";
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css/bundle";
import { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineDeliveryDining } from "react-icons/md";
import useAllFoods from "../hooks/useAllFoods";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Home = () => {
  const navigate = useNavigate();
  const [restaurant, isLoading, refetch] = useAllRestaurant();
  const [shops] = useAllShop();
  const [foods] = useAllFoods();
  const [currentPage, setCurrentPage] = useState(0);
  const [foodCurrentPage, setOfferCurrentPage] = useState(0);
  const totalItems = Math.ceil(shops?.length / 5);
  const offerFood = foods?.filter((res) => res?.foodOffer);
  const foodPages = Math.ceil(offerFood?.length / 4);
  // offer foods carousal
  const nextOfferBtn = () => {
    if (foodCurrentPage < foodPages - 1) {
      setOfferCurrentPage(foodCurrentPage + 1);
    }
  };
  const prevFoodOfferBtn = () => {
    if (foodCurrentPage > 0) {
      setOfferCurrentPage(foodCurrentPage - 1);
    }
  };

  // shop carousal
  const nextBtn = () => {
    if (currentPage < totalItems - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevBtn = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const currentShops = shops?.slice(currentPage * 5, (currentPage + 1) * 5);
  const foodsCurrentOffer = foods?.slice(
    foodCurrentPage * 4,
    (foodCurrentPage + 1) * 4
  );

  // navigate to details restaurant !
  const handleNavigateToRestaurant = (name) => {
    navigate(`/restaurant-details/${name}`);
  };
  const handleNavigateToShop = (name) => {
    navigate(`/shop-details/${name}`);
  };

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-warning mt-20 mx-32"></span>
    );
  }
  return (
    <div className="lg:w-[1520px] w-80 md:w-[690px] mx-auto mt-10 font-robotomain pb-10">
      {/* SHOP SECTION */}
      <div>
        <div className="lg:hidden block pb-10">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {restaurant?.map((res) => {
              return (
                <SwiperSlide key={res?._id}>
                  <img
                    src={res?.resPhoto}
                    className="w-80 md:w-[800px] md:h-64 h-44 rounded-xl relative"
                  />
                  <div className="absolute top-28 left-10">
                    <h1 className=" text-white top-32 left-10 text-xl shadow-md  font-semibold">
                      {res?.resName}
                    </h1>
                    <p className="text-white">{res?.resDeliveryTime}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex items-center justify-between md:px-2 lg:px-0 ">
          <h1 className="text-3xl font-semibold">Shop</h1>
          <button className="text-sm lg:mr-4 bg-gray-200 hover:bg-slate-100 duration-200 w-12 h-9 rounded-full">
            All
          </button>
        </div>
        {/* parent card div */}{" "}
        <div className="mt-2 gap-5 relative grid lg:grid-cols-5 grid-cols-1 md:grid-cols-2">
          {shops
            ? currentShops?.map((shop) => {
                return (
                  <NavLink
                    onClick={() => handleNavigateToShop(shop?.shopName)}
                    key={shop?._id}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${shop?.shopImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="lg:w-[270px]  w-80 md:w-76 md:h-[150px] mx-auto h-36 rounded-2xl relative hover:cursor-pointer"
                    >
                      <div className="lg:w-44 w-32 py-1 px-2 space-x-3 mx-auto bg-gray-700 flex items-center absolute bottom-0 right-0 rounded-tl-xl rounded-bl-xl rounded-br-2xl shadow-lg bg-opacity-70">
                        <CiDeliveryTruck
                          size={30}
                          className="text-yellow-300 w-6 h-5 lg:w-8 lg:h-7"
                        />
                        <p className="text-white font-extrabold text-xs lg:text-[15px]">
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
            className={`absolute lg:block hidden rotate-180 top-14 -left-3 rounded-full w-8 h-8 shadow-lg shadow-gray-200 ${
              currentPage == 0 && "hidden"
            }`}
          >
            <FiChevronRight className="w-10  h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
          </button>
          <button
            onClick={nextBtn}
            className="absolute lg:block hidden rotate-180 top-14 right-0 rounded-full w-8 h-8 shadow-lg shadow-gray-200"
          >
            <FiChevronLeft className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
          </button>
        </div>
        {/* sorting data */}
        <div className="lg:w-[1500px] w-[320px] md:w-[710px]">
          <div className="mt-8 lg:py-2 bg-slate-100  flex justify-between px-4 items-center rounded-lg">
            <div className="md:flex hidden space-x-3">
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
              <button className="hover:bg-white py-3 px-4 md:hidden lg:block rounded-lg">
                Indian
              </button>
              <button className="hover:bg-white py-3 px-4 md:hidden lg:block rounded-lg">
                Bangali
              </button>
              <button className="hover:bg-white py-3 px-4 md:hidden lg:block rounded-lg">
                Rool
              </button>
              <button className="hover:bg-white py-3 px-4 md:hidden lg:block rounded-lg">
                Carry-out
              </button>
              <button className="hover:bg-white py-3 px-4 md:hidden lg:block rounded-lg">
                China
              </button>
            </div>
            {/* mobile device start*/}
            <div className="dropdown dropdown-hover md:hidden block">
              <div tabIndex={0} role="button" className="btn m-1">
                More
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <button>All</button>
                  <button>Burger</button>
                  <button>Sushi</button>
                  <button>Wok</button>
                  <button>Lounch</button>
                  <button>Indian</button>
                  <button>Bangali</button>
                  <button>Biriyani</button>
                  <button>Pizza</button>
                </li>
              </ul>
            </div>
            {/* mobile device end */}
            <button className="hover:bg-white py-3 px-4 rounded-lg flex items-center space-x-4">
              <VscSettings />
              <span> Sorting</span>
            </button>
          </div>

          {/* offer card */}
          <div className="mt-7">
            <h1 className="font-semibold text-3xl">Offer</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-2 gap-8 lg:absolute">
              {offerFood &&
                foodsCurrentOffer?.map((food) => {
                  return (
                    <NavLink
                      onClick={() => handleNavigateToRestaurant(food?.resName)}
                      key={food?._id}
                      className="rounded"
                    >
                      <div className=" w-[340px] h-[270px] rounded-2xl mt-4 relative hover:cursor-pointer">
                        <img
                          src={food?.foodPhoto}
                          alt=""
                          className="h-[185px] w-[340px] rounded-xl object-cover"
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
                          <p className="text-sm mt-2 py-[2px] px-2 rounded-md  bg-green-100 inline-block text-green-600 ">
                            Free Delivery
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
              <button
                onClick={prevFoodOfferBtn}
                className={`absolute rotate-180 top-24 lg:block hidden -left-4 rounded-full w-8 h-8 shadow-lg shadow-gray-200 ${
                  foodCurrentPage == 0 && "hidden"
                }`}
              >
                <FiChevronRight className="w-10 h-10 p-1  bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
              </button>
              <button
                onClick={nextOfferBtn}
                className={`absolute rotate-180 top-24 lg:block hidden -right-5 rounded-full w-8 h-8 shadow-lg shadow-gray-200 ${
                  foodCurrentPage === foodsCurrentOffer?.length && "hidden"
                }`}
              >
                <FiChevronLeft className="w-10 h-10 p-1 bg-white mx-auto hover:bg-gray-200  transform duration-200 rounded-full" />
              </button>
            </div>
          </div>

          {/* all restaurant start for mobile device */}
          <div className="mt-10">
            <h1 className="text-2xl font-semibold pb-6">All Shop</h1>
            <div className="lg:hidden block">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {shops?.map((res) => {
                  return (
                    <SwiperSlide key={res?._id}>
                      <img
                        src={res?.shopImage}
                        className="w-80 md:w-[720px] md:h-64 h-44 rounded-2xl relative"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {/* all restaurant end */}
          {/* restaurant section */}
          <div className="lg:mt-[335px] md:w-[480px] lg:w-full mt-12">
            <h1 className="font-semibold text-3xl">Restaurant</h1>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-32 lg:gap-10 ">
              {restaurant &&
                restaurant?.map((res) => {
                  return (
                    <NavLink
                      onClick={() => handleNavigateToRestaurant(res?.resName)}
                      key={res?._id}
                      className="rounded"
                    >
                      <div className=" lg:w-[340px] w-80 md:w-72 mx-auto h-[270px] rounded-2xl mt-4 relative hover:cursor-pointer">
                        <img
                          src={res?.resPhoto}
                          alt=""
                          className="lg:h-[185px] lg:w-[340px]  md:w-[280px] w-80 h-44 rounded-xl object-cover "
                        />
                        <div className=" py-1 px-2 space-x-3 mx-auto bg-gray-900 flex items-center absolute right-3 m-4 -top-2 rounded-full shadow-lg bg-opacity-70 hover:bg-slate-50 text-white hover:text-black">
                          <CiBookmark className="w-5 h-7  " />
                        </div>

                        <div className="px-2 py-2">
                          <section className="flex items-center justify-between ">
                            <h1>{res?.resName}</h1>
                            <div className="flex items-center space-x-2">
                              {" "}
                              <IoIosStar size={12} />
                              <p className="text-xs font-semibold">4.3</p>
                            </div>
                          </section>
                          <div className="pt-2 flex items-center space-x-3 font-semibold">
                            <MdOutlineDeliveryDining size={20} />
                            <p className="text-xs">{res?.resDeliveryTime}</p>
                          </div>
                          <p className="text-sm mt-2 py-[2px] px-2 rounded-md  bg-green-50 inline-block text-green-500">
                            Free Delivery
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
