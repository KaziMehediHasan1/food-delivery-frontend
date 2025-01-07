import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const url = import.meta.env.VITE_SERVER_PORT;
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddShop = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading at the start

    const shopName = e.target.shopName.value;
    const shopImage = e.target.shopImage.files[0];
    const deliveryTime = e.target.deliveryTime.value;
    const shopLocation = e.target.shopLocation.value;

    // Create FormData and append the file
    const shopPhoto = new FormData();
    shopPhoto.append("image", shopImage);

    try {
      // Upload image to ImgBB API
      const photoResponse = await axios.post(image_hosting_api, shopPhoto, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedImgUrl = photoResponse?.data?.data?.url;
      if (uploadedImgUrl) {
        const shopCreating = {
          shopName,
          shopImage:uploadedImgUrl,
          deliveryTime,
          shopLocation,
        };

        // Create shop after successful image upload
        const res = await axios.post(`${url}/shopcreate`, shopCreating);
        if (res.status === 200) {
          toast.success("Shop created successfully!");
          console.log("Shop created: ", res.data);
        } else {
          toast.error("Error creating shop.");
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Try again");
    } finally {
      setLoading(false); // Ensure loading state is reset after processing
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[35%] mx-auto my-44">
        <div className="flex-col flex space-y-2">
          <label htmlFor="name" className="text-xl font-semibold">
            Shop Name
          </label>
          <input
            type="text"
            name="shopName"
            required
            placeholder="Enter restaurant name"
            className="w-96 px-3 py-2 rounded"
          />
        </div>
        <div className="flex-col flex space-y-2">
          <label htmlFor="photo" className="text-xl font-semibold">
            Photo
          </label>
          <input
            type="file"
            name="shopImage"
            required
            className="bg-yellow-50 w-96 rounded py-2"
          />
        </div>
        <div className="flex-col flex space-y-2">
          <label htmlFor="name" className="text-xl font-semibold">
            Delivery Time
          </label>
          <input
            type="text"
            required
            name="deliveryTime"
            placeholder="Enter Delivery time"
            className="w-96 px-3 py-2 rounded"
          />
        </div>
        <div className="flex-col flex space-y-2">
          <label htmlFor="name" className="text-xl font-semibold">
            Shop Location
          </label>
          <input
            type="text"
            required
            name="shopLocation"
            placeholder="Enter shop location"
            className="w-96 px-3 py-2 rounded"
          />
        </div>
        <button
          className={`text-center mx-auto w-96 ${
            loading ? "bg-gray-50" : "bg-yellow-300"
          } py-2 rounded-lg hover:bg-yellow-400 font-semibold`}
        >
          {loading ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : (
            "Add Shop"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddShop;
