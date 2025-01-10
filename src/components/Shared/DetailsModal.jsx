import { X } from "lucide-react";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";
const DetailsModal = ({ closeModal, item }) => {
  console.log(item);
  // add to cart handler
  const handleAddToCart = (item) => {
    if (item) {
      localStorage.setItem("product", JSON.stringify(item));
      closeModal();
      Swal.fire({
        title: "Add Your Cart!",
        icon: "success",
        draggable: true,
      });
    }
  };

  // console.log(localStorage.getItem(JSON.parse("product")), "19 line");
  return (
    <div className="fixed inset-0 z-50 lg:flex pt-64 px-14 lg:pt-0 lg:px-0 items-center font-robotomain justify-center bg-black bg-opacity-20 backdrop-blur-sm">
      {/* Modal content */}
      <div className="bg-white lg:w-[1000px] md:w-[650px] md:h-72  lg:h-96 w-72 h-44 p-6 rounded-lg shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={closeModal}
        >
          <X size={24} />
        </button>

        {/* Modal body */}
        <div className="flex items-center lg:space-x-8 space-x-3">
          <img
            src={item?.foodPhoto || item?.proPhoto}
            alt="foodimage"
            className="lg:w-96 w-32 md:w-64 md:h-[235px] h-28 object-cover lg:h-80 rounded-xl"
          />
          <section className="space-y-5">
            <div className="md:flex items-center lg:space-x-3">
              <h1 className="md:text-4xl text-xs font-bold">
                {item?.foodName || item?.proName}
              </h1>
              <p className="text-gray-600 lg:text-2xl text-xs md:text-sm font-semibold">
                {item?.foodWeight || item?.proWeight}
              </p>
            </div>
            <div>
              <h1 className="lg:text-4xl md:text-xl text-xs font-bold mb-4">
                {item?.foodPrice || item?.proPrice}TK
              </h1>
              <button
                onClick={() => handleAddToCart(item)}
                className="lg:w-28 md:w-32 md:h-12 lg:h-14 lg:text-xl md:text-sm text-xs w-12 h-8 font-semibold rounded-xl bg-yellow-200 mx-auto hover:bg-yellow-300 duration-200 transform "
              >
                Add
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
