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
        title: "Drag me!",
        icon: "success",
        draggable: true,
      });
    }
  };

  // console.log(localStorage.getItem(JSON.parse("product")), "19 line");
  return (
    <div className="fixed inset-0 z-50 flex items-center font-robotomain justify-center bg-black bg-opacity-20 backdrop-blur-sm">
      {/* Modal content */}
      <div className="bg-white w-[1000px] h-96 p-6 rounded-lg shadow-lg relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={closeModal}
        >
          <X size={24} />
        </button>

        {/* Modal body */}
        <div className="flex items-center space-x-8">
          <img
            src={item?.foodPhoto || item?.proPhoto}
            alt="foodimage"
            className="w-96 object-cover h-80 rounded-xl"
          />
          <section className="space-y-5">
            <div className="flex items-center space-x-3">
              <h1 className="text-4xl font-bold">
                {item?.foodName || item?.proName}
              </h1>
              <p className="text-gray-600 text-2xl font-semibold">
                {item?.foodWeight || item?.proWeight}
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                {item?.foodPrice || item?.proPrice}TK
              </h1>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-28 h-14 text-xl font-semibold rounded-xl bg-yellow-200 mx-auto hover:bg-yellow-300 duration-200 transform "
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
