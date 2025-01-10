import { FiArrowLeft, FiMinus } from "react-icons/fi";
import { IoAlertSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import DetailsModal from "./DetailsModal";
import { useState } from "react";
import useAllProducts from "../hooks/useAllProducts";
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";

const ShopDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { name } = useParams();
  const [products, isLoading] = useAllProducts();
  const [cart, setCart] = useState({});
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
        delete updatedCart[foodId];
      }
      return updatedCart;
    });
  };
  const handleModalOpen = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  if (isLoading) {
    return (
      <span className="loading loading-spinner text-warning mt-20 mx-32"></span>
    );
  }
  return (
    <div className="lg:bg-[#F5F4F2]">
      <div className="lg:w-[1520px]  mx-auto">
        {/* Desktop restaurant section */}
        <div className="lg:grid grid-cols-[200px_1fr_300px] hidden  gap-x-10 w-full bg-[#F5F4F2] pt-12 h-screen">
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
              {products
                ?.filter((shop) => shop?.shopName === name)
                .slice(0, 8)
                .map((item) => (
                  <button
                    className="hover:bg-white w-full items-start flex flex-col py-2 px-3 text-sm font-semibold rounded-lg text-gray-600"
                    key={item?._id}
                  >
                    {item?.productCatalog}
                  </button>
                ))}
            </div>
          </div>
          {/* Middle --> shops showing side */}
          <div className="overflow-y-auto h-screen scrollbar-none ">
            {/* show card */}
            <div className="mt-10 grid grid-cols-4 gap-10">
              {products
                ?.filter((shop) => shop?.shopName === name)
                .map((item) => {
                  return (
                    <button
                      onClick={() => handleModalOpen(item)}
                      key={item?._id}
                      className="w-[200px] h-[300px] bg-white rounded-3xl shadow-sm shadow-gray-50"
                    >
                      <img
                        src={item?.proPhoto}
                        className="w-36 h-36 mx-auto pt-4 rounded-full overflow-hidden"
                      />
                      <div className="px-5 pt-4">
                        <div className="space-y-1">
                          <p className="text-xl font-semibold">
                            {item?.proPrice}TK
                          </p>
                          <h1 className="text-sm font-semibold">
                            {item?.proName}
                          </h1>
                          <p className="text-sm font-semibold text-gray-400">
                            {" "}
                            {item?.shopWeight}
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

      <div className="w-[345px] mt-3 md:w-[720px] mx-auto lg:hidden block">
        <div className="py-4 flex space-x-3 items-center bg-slate-100 rounded-2xl justify-center">
          <FaSearch className="text-gray-500" />
          <p className="text-gray-500 font-semibold">Quick search</p>
        </div>
        {/* catalog */}

        <div className="pt-5">
          <div className="grid grid-cols-4 gap-5">
            {products?.slice(0, 8).map((pro) => {
              return (
                <div key={pro?._id}>
                  <div className="space-y-3">
                    <img
                      src={pro?.proPhoto}
                      className="w-12 md:w-16 md:h-16 mx-auto rounded-full h-12 "
                    />
                    <h1 className="text-xs font-semibold text-center">{pro?.proName}</h1>
                  </div>
                </div>
              );
            })}
            {/* discount  */}
            <div className="w-80 md:w-[720px] mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold">Discounts and promos</h1>
                <button className="flex items-center space-x-1 bg-gray-100 py-1 px-2 rounded-xl">
                  <p>All</p> <IoIosArrowForward />
                </button>
              </div>

              {/* card */}
              <div className="pb-8">
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                  {products
                    ?.filter((shop) => shop?.shopName === name)
                    .map((item) => {
                      return (
                        <button
                          onClick={() => handleModalOpen(item)}
                          key={item?._id}
                          className="w-[140px] h-[260px] bg-gray-100 rounded-3xl shadow-sm shadow-gray-50"
                        >
                          <img
                            src={item?.proPhoto}
                            className="w-28 h-28 mx-auto pt-4 rounded-full overflow-hidden"
                          />
                          <div className="px-5 pt-4">
                            <div className="space-y-1">
                              <p className="text-xl font-semibold">
                                {item?.proPrice}TK
                              </p>
                              <h1 className="text-sm font-semibold">
                                {item?.proName}
                              </h1>
                              <p className="text-sm font-semibold text-gray-400">
                                {" "}
                                {item?.shopWeight}
                              </p>
                            </div>
                            <div className="py-3">
                              {cart[item._id] ? (
                                <div className="flex items-center py-2 space-x-4 md:space-x-8 justify-center mx-auto lg:w-[160px] md:w-[110px] w-[100px] bg-gray-200 rounded-2xl">
                                  <button
                                    onClick={() => handleIncrement(item._id)}
                                  >
                                    <IoMdAdd />
                                  </button>
                                  <p>{cart[item._id].quantity}</p>
                                  <button
                                    onClick={() => handleDecrement(item._id)}
                                  >
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
                </div>
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
      </div>
    </div>
  );
};

export default ShopDetails;
