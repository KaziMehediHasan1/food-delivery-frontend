import axios from "axios";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
const url = import.meta.env.VITE_SERVER_PORT;
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddProduct = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(selectedOption, loading, "12 no line");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const shopName = e.target.shopName.value;
    const productCatalog = e.target.productCatalog.value;
    const prodiscount = parseInt(e.target.prodiscount.value);
    const proOffer = e.target.proOffer.value;
    const proName = e.target.proName.value;
    const proPrice = parseInt(e.target.proPrice.value);
    const proWeight = e.target.proWeight.value;
    const prodescription = e.target.prodescription.value;
    const protags = selectedOption.map((tag) => tag.value);
    const prodeliveryTime = e.target.prodeliveryTime.value;
    const proPhoto = e.target.proPhoto.files[0];

    // Start loading
    setLoading(true);

    if (!proPhoto) {
      toast.error("No file selected");
      setLoading(false);
      return;
    }

    // Create FormData for the image
    const fileRender = new FormData();
    fileRender.append("image", proPhoto);

    try {
      // Step 1: Upload image
      const response = await axios.post(image_hosting_api, fileRender, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedImgUrl = response?.data?.data?.url;
      if (!uploadedImgUrl) throw new Error("Image upload failed");

      // Step 2: Create the product
      const products = {
        shopName,
        productCatalog,
        prodiscount,
        proOffer,
        proPhoto: uploadedImgUrl,
        prodeliveryTime,
        protags,
        prodescription,
        proWeight,
        proPrice,
        proName,
      };

      const res = await axios.post(`${url}/shopproduct`, products);

      if (res?.status === 200) {
        toast.success("Product added successfully!");
        console.log("Product created:", res.data);
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[65%] mx-auto my-20">
        <div className="grid grid-cols-2">
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Shop Name
            </label>
            <input
              type="text"
              name="shopName"
              required
              placeholder="Enter shop Name"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Catalog
            </label>
            <input
              type="text"
              name="productCatalog"
              required
              placeholder="Enter product Catalog"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Discount
            </label>
            <input
              type="text"
              name="prodiscount"
              required
              placeholder="Enter product discount"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Offer
            </label>
            <input
              type="text"
              name="proOffer"
              required
              placeholder="Enter product offer"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Name
            </label>
            <input
              type="text"
              name="proName"
              required
              placeholder="Enter product name"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Photo
            </label>
            <input
              type="file"
              name="proPhoto"
              className="bg-yellow-50 w-96 rounded py-2"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Price
            </label>
            <input
              type="text"
              name="proPrice"
              required
              placeholder="Enter product price"
              className="w-96 px-3 py-2 rounded"
            />
          </div>

          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Weight
            </label>
            <input
              type="text"
              name="proWeight"
              required
              placeholder="Enter product weight"
              className="w-96 px-3 py-2 rounded"
            />
          </div>

          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Product Description
            </label>
            <input
              type="text"
              name="prodescription"
              required
              placeholder="Enter product description"
              className="w-96 px-3 py-2 rounded"
            />
          </div>

          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Tags
            </label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              className="w-[395px] px-1 py-2 rounded"
              // options={options}
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Delivery Time
            </label>
            <input
              type="text"
              name="prodeliveryTime"
              required
              placeholder="Enter product delivery time"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
        </div>
        <button
          className={`text-center mx-auto w-[90%] ${
            loading ? "bg-white" : " bg-yellow-300"
          } py-2 rounded-lg hover:bg-yellow-400 font-semibold`}
        >
          {loading ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
