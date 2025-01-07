import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const url = import.meta.env.VITE_SERVER_PORT;
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resName = e.target.resName.value;
    const resPhoto = e.target.resPhoto.files[0];
    const resDeliveryTime = e.target.resDeliveryTime.value;
    // Create FormData and append the file
    const filePhoto = new FormData();
    filePhoto.append("image", resPhoto);

    try {
      // Upload image to ImgBB API
      const resPhoto = await axios.post(image_hosting_api, filePhoto, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setLoading(true);
      const uploadedImgUrl = resPhoto?.data?.data?.url;
      if (uploadedImgUrl) {
        const restaurantInfo = {
          resName,
          resPhoto: uploadedImgUrl,
          resDeliveryTime,
        };
        const res = await axios.post(`${url}/restaurantName`, restaurantInfo);
        if (res?.data && res.status === 200) {
          toast.success("Restaurant created successfully!");
          setLoading(false);
          console.log("38 line ", res.data, loading);
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
      toast.error("try again");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[35%] mx-auto my-44">
        <div className="flex-col flex space-y-2">
          <label htmlFor="name" className="text-xl font-semibold">
            Restaurant Name
          </label>
          <input
            type="text"
            name="resName"
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
            name="resPhoto"
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
            name="resDeliveryTime"
            placeholder="Enter Delivery time "
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
            "Add Restaurant"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
