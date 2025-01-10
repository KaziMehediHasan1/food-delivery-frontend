import axios from "axios";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import DetailsModal from "./DetailsModal";
const url = import.meta.env.VITE_SERVER_PORT;
const SearchingData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(location.search).get("search");
  const [cart, setCart] = useState({});

  // get data
  useEffect(() => {
    const searchingData = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(`${url}/getSearch/${query}`);
        if (res?.data) {
          setSearchResult(res?.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    searchingData();
  }, [query]);
  // add to cart
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
  console.log(loading, searchResult, "30no line");
  return (
    <div className="bg-gray-100 rounded-[50px]  h-screen pt-12 px-20">
      <div>
        <div className="mt-10 grid grid-cols-4 gap-10">
          {searchResult?.map((item) => {
            return (
              <button
                className="w-[200px] h-[300px] bg-white rounded-3xl shadow-sm shadow-gray-50"
                key={item?._id}
                onClick={() => handleModalOpen(item)}
              >
                {" "}
                <div>
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
  );
};

export default SearchingData;
