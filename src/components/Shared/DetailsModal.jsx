import { X } from "lucide-react";

const DetailsModal = ({ closeModal, item }) => {
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
        <div className="flex space-x-8">
          <img
            src={item?.foodPhoto}
            alt="foodimage"
            className="w-96 h-80 rounded-xl"
          />
          <section className="space-y-5">
            <div className="flex items-center space-x-3">
              <h1 className="text-4xl font-bold">{item?.foodName}</h1>
              <p className="text-gray-600 text-2xl font-semibold">
                {item?.foodWeight}
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{item?.foodPrice}TK</h1>
              <button className="w-28 h-14 text-xl font-semibold rounded-xl bg-yellow-200 mx-auto">
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
