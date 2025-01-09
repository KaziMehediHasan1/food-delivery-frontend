import { CiDeliveryTruck } from "react-icons/ci";
import useAllRestaurant from "../hooks/useAllRestaurant";
import useAllShop from "../hooks/useAllShop";
import useUser from "../hooks/useUser";

const Home = () => {
  const [restaurant, isLoading, refetch] = useAllRestaurant();
  const [shops] = useAllShop();
  console.log(restaurant, shops);

  return (
    <div className="w-[1200px] mx-auto mt-10 font-robotomain">
      {/* SHOP SECTION */}
      <div>
        <h1 className="text-3xl font-semibold">Shop</h1>
        {/* parent card div */}
        <div className="mt-2">
          <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/736x/17/1c/a2/171ca25053719bcd076a12e1e9d8a846.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-64 h-36 rounded-2xl relative"
          >
            <div className="w-36 py-1 px-2 space-x-3 mx-auto bg-gray-700 flex items-center absolute bottom-0 right-0 rounded-tl-xl rounded-bl-xl rounded-br-2xl shadow-lg bg-opacity-70">
              <CiDeliveryTruck size={30} className="text-yellow-300" />
              <p className="text-white  font-extrabold">5-14mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
