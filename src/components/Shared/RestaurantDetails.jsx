import { FiArrowLeft, FiMinus } from "react-icons/fi";
import { Link, NavLink, useParams } from "react-router-dom";
import useAllRestaurant from "../hooks/useAllRestaurant";
import useAllFoods from "../hooks/useAllFoods";
import { IoMdAdd } from "react-icons/io";
import { IoAlertSharp } from "react-icons/io5";
import { CiDeliveryTruck, CiStar } from "react-icons/ci";
import { useState } from "react";
import DetailsModal from "./DetailsModal";

const RestaurantDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [restaurant] = useAllRestaurant();
  const [foods, isLoading, refetch] = useAllFoods();
  const [cart, setCart] = useState({});
  const { name } = useParams();
  // console.log(name, foods, restaurant);
  const handleAddTocart = (food) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[food._id]) {
        updatedCart[food._id].quantity += 1;
      } else {
        updatedCart[food._id] = { ...food, quantity: 1 };
      }
      return updatedCart;
    });
  };
  const handleIncrement = (foodId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[foodId].quantity += 1;
      return updatedCart;
    });
  };

  const handleDecrement = (foodId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[foodId].quantity > 1) {
        updatedCart[foodId].quantity -= 1;
      } else {
        delete updatedCart[foodId]; // Remove item if quantity is 0
      }
      return updatedCart;
    });
  };
  // modal handler
  const handleModalOpen = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  // type to show data
  const handleTypeToShowData = (type) => {
    console.log("data", type);
  };

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-warning mt-20 mx-32"></span>
    );
  }
  return (
    <div className="lg:bg-[#F5F4F2] pb-10 lg:pb-0">
      <div className="w-[1520px] lg:block hidden mx-auto pb-14">
        {/* Desktop restaurant section */}
        <div className="grid grid-cols-[200px_1fr_300px] gap-x-10 w-full bg-[#F5F4F2] pt-12 h-screen">
          {/* Catalog side */}
          <div className="w-[200px] flex-shrink-0">
            <Link
              to="/"
              className="py-3 px-5 bg-white flex items-center rounded-xl space-x-3"
            >
              <FiArrowLeft size={25} />
              <p className="text-[17px] font-semibold">All Restaurant</p>
            </Link>
            <h1 className="text-2xl font-semibold mt-4">Menu</h1>
            <div className="pt-5 space-y-2 flex flex-col items-start">
              {foods
                ?.slice(0, 10)
                .filter((food) => food?.resName === name)
                .map((type) => {
                  // console.log(type);
                  return (
                    <button
                      onClick={() => handleTypeToShowData(type?.foodType)}
                      key={type?._id}
                      className="hover:bg-white w-full items-start flex flex-col py-2 px-3 text-sm font-semibold rounded-lg text-gray-600"
                    >
                      {type?.foodType}
                    </button>
                  );
                })}
            </div>
          </div>
          {/* Middle --> foods showing side */}
          <div className="overflow-y-auto h-screen scrollbar-none ">
            {restaurant
              ?.filter((res) => res?.resName === name)
              ?.map((item) => {
                return (
                  <div
                    key={item?._id}
                    className="h-80 inset-0 bg-cover bg-black bg-opacity-30 backdrop-blur-sm relative rounded-3xl"
                    style={{
                      backgroundImage: `url(${item?.resPhoto})`,
                    }}
                  >
                    <div className="absolute top-[160px] left-8  space-y-4">
                      <h1 className="text-5xl font-bold text-white">
                        {item?.resName} Restaurant
                      </h1>
                      <div className="flex items-center space-x-4">
                        {/* Delivery Info */}
                        <div className="flex items-center space-x-2 bg-gray-200 py-3 rounded-lg px-4">
                          <CiDeliveryTruck
                            size={25}
                            className="text-black font-semibold"
                          />
                          <p className="text-sm font-semibold">
                            {item?.resDeliveryTime}
                          </p>
                        </div>
                        {/* Ratings Info */}
                        <div className="flex items-center space-x-2 bg-gray-200 py-3 rounded-lg px-4">
                          <CiStar
                            size={25}
                            className="text-black font-semibold"
                          />
                          <p className="text-sm font-semibold">4.7 (200+)</p>
                        </div>
                        {/* Alert Button */}
                        <button className="p-2 rounded-lg bg-gray-200 py-3  px-3">
                          <IoAlertSharp size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* delivery text */}
            <div className="bg-green-200 mt-10 rounded-lg px-4 py-2 flex items-center">
              <img
                src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
                alt="png"
                className="w-16 "
              />
              <p className="text-green-600 font-semibold">
                Free delivery – on any order
              </p>
            </div>
            {/* show card */}
            <div className="mt-10 grid grid-cols-4 gap-10">
              {foods
                ?.filter((food) => food?.resName === name)
                .map((item) => {
                  return (
                    <button
                      onClick={() => handleModalOpen(item)}
                      key={item?._id}
                      className="w-[200px] h-[300px] bg-white rounded-3xl shadow-sm shadow-gray-50"
                    >
                      <img
                        src={item?.foodPhoto}
                        className="w-36 h-36 mx-auto pt-4 rounded-full overflow-hidden"
                      />
                      <div className="px-5 pt-4">
                        <div className="space-y-1">
                          <p className="text-xl font-semibold">
                            {item?.foodPrice}TK
                          </p>
                          <h1 className="text-sm font-semibold">
                            {item?.foodName}
                          </h1>
                          <p className="text-sm font-semibold text-gray-400">
                            {" "}
                            {item?.foodWeight}
                          </p>
                        </div>
                        <div className="py-3">
                          {cart[item._id] ? (
                            <div className="flex items-center py-2 space-x-8 justify-center mx-auto w-[160px] bg-gray-200 rounded-2xl">
                              <button onClick={() => handleIncrement(item._id)}>
                                <IoMdAdd />
                              </button>
                              <p>{cart[item._id].quantity}</p>
                              <button onClick={() => handleDecrement(item._id)}>
                                <FiMinus />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleAddTocart(item)}
                              className="flex items-center py-2 space-x-3 justify-center mx-auto w-[160px] bg-gray-200 rounded-2xl"
                            >
                              <IoMdAdd />
                              <p>Add</p>
                            </button>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
          {showModal && (
            <DetailsModal
              closeModal={() => setShowModal(false)}
              item={selectedItem}
            />
          )}
          {/* Add to cart section */}
          <div className="w-[300px] h-screen bg-white flex-shrink-0 rounded-t-3xl shadow-xl shadow-gray-50">
            <div className="p-4">
              <h1 className="font-semibold text-2xl">Cart</h1>
              <div className="pt-80 text-center space-y-3">
                <img
                  src="https://avatars.mds.yandex.net/get-bunker/61205/a11b38948b6d328e2f739d602fa36b15b2680ba8/svg"
                  className="w-28 mx-auto"
                />
                <p className="font-semibold text-2xl">
                  Your cart is currently empty
                </p>
              </div>
              <div className="border border-b-[1px] h-[1px] w-full mt-64">
                <button className="pt-5 flex  space-x-3">
                  <img
                    src="https://avatars.mds.yandex.net/get-bunker/60661/e0b70b2b2a584c45a33c9f9866609f9b2e95019c/svg"
                    alt="delivery"
                    className="bg-gray-200 w-12 h-12 rounded-lg p-1"
                  />
                  <div className="flex items-center space-x-8">
                    <div>
                      <p className="text-sm text-[#76ce43] font-semibold">
                        20-45Miles 200TK
                      </p>
                      <p className="text-sm">Detailed Conditions</p>
                    </div>
                    <IoAlertSharp
                      size={15}
                      className="bg-gray-50 w-9 h-9 p-2 "
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="w-80 md:w-[720px] mx-auto rounded-lg lg:hidden block">
        <div className="overflow-y-auto h-screen scrollbar-none ">
          {restaurant
            ?.filter((res) => res?.resName === name)
            ?.map((item) => {
              return (
                <div
                  key={item?._id}
                  className="h-80 inset-0 bg-cover bg-black bg-opacity-30 backdrop-blur-sm relative rounded-3xl"
                  style={{
                    backgroundImage: `url(${item?.resPhoto})`,
                  }}
                >
                  <div className="absolute top-[220px] px-2  space-y-2">
                    <h1 className="text-xl font-bold text-white">
                      {item?.resName} Restaurant
                    </h1>
                    <div className="flex items-center space-x-2">
                      {/* Delivery Info */}
                      <div className="flex items-center space-x-2 bg-gray-200 py-3 rounded-lg px-4">
                        <CiDeliveryTruck
                          size={20}
                          className="text-black font-semibold"
                        />
                        <p className="text-xs font-semibold">
                          {item?.resDeliveryTime}
                        </p>
                      </div>
                      {/* Ratings Info */}
                      <div className="flex items-center space-x-2 bg-gray-200 py-3 rounded-lg px-4">
                        <CiStar
                          size={20}
                          className="text-black font-semibold"
                        />
                        <p className="text-xs font-semibold">4.7 (200+)</p>
                      </div>
                      <button className=" rounded-lg bg-gray-200 py-3  px-3">
                        <IoAlertSharp size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* delivery text */}
          <div className="bg-green-200 mt-8 rounded-lg px-4  flex items-center">
            <img
              src="https://eda.yandex/images/3816972/0a6904a5dbf6de2762626985e3fc860b.png"
              alt="png"
              className="w-16"
            />
            <p className="text-green-600 font-semibold">
              Free delivery – on any order
            </p>
          </div>

          {/* show card */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
            {foods
              ?.filter((shop) => shop?.resName === name)
              .map((item) => {
                return (
                  <button
                    onClick={() => handleModalOpen(item)}
                    key={item?._id}
                    className="w-[140px] h-[280px] bg-gray-100 rounded-3xl shadow-sm shadow-gray-50"
                  >
                    <img
                      src={item?.foodPhoto}
                      className="w-28 h-28 mx-auto pt-4 rounded-full overflow-hidden"
                    />
                    <div className="px-5 pt-4">
                      <div className="space-y-1">
                        <p className="text-xl font-semibold">
                          {item?.foodPrice}TK
                        </p>
                        <h1 className="text-sm font-semibold">
                          {item?.foodName}
                        </h1>
                        <p className="text-sm font-semibold text-gray-400">
                          {" "}
                          {item?.foodWeight}
                        </p>
                      </div>
                      <div className="py-3">
                        {cart[item._id] ? (
                          <div className="flex items-center py-2 space-x-4 lg:space-x-8 justify-center mx-auto lg:w-[160px] md:w-[110px] w-[100px] bg-gray-200 rounded-2xl">
                            <button onClick={() => handleIncrement(item._id)}>
                              <IoMdAdd />
                            </button>
                            <p>{cart[item._id].quantity}</p>
                            <button onClick={() => handleDecrement(item._id)}>
                              <FiMinus />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAddTocart(item)}
                            className="flex items-center py-2 space-x-3 justify-center mx-auto w-[100px] bg-white rounded-2xl"
                          >
                            <IoMdAdd />
                          </button>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}

            {showModal && (
              <DetailsModal
                closeModal={() => setShowModal(false)}
                item={selectedItem}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
