import { FiArrowLeft } from "react-icons/fi";
import { IoAlertSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

const ShopDetails = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div className="bg-[#F5F4F2]">
      <div className="w-[1520px] mx-auto pb-14">
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
              <button>pizza</button>
              <button>pizza</button>
              <button>pizza</button>
              <button>pizza</button>
              <button>pizza</button>
              <button>pizza</button>
              <button>pizza</button>
              <button>pizza</button>
            </div>
          </div>
          {/* Middle --> foods showing side */}
          <div>d</div>
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
    </div>
  );
};

export default ShopDetails;
