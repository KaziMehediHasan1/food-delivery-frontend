import axios from "axios";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
const url = import.meta.env.VITE_SERVER_PORT;
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddFood = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedIngrediants, setSelectedIngrediants] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(selectedOption, selectedIngrediants, loading);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resName = e.target.resName.value;
    const foodName = e.target.foodName.value;
    const foodPrice = parseInt(e.target.foodPrice.value);
    const foodWeight = e.target.foodWeight.value;
    const foodTags = selectedOption.map((tag) => tag.value);
    const foodIngrediants = selectedIngrediants.map(
      (grediants) => grediants.value
    );
    const foodDescriptions = e.target.foodDescriptions.value;
    const foodPhotos = e.target.foodPhoto.files[0];
    setLoading(true);
    if (!foodPhotos) {
      console.error("No file selected");
      setLoading(false);
      return;
    }

    // Create FormData and append the file
    const fileRender = new FormData();
    fileRender.append("image", foodPhotos);

    try {
      // Upload image to ImgBB API
      const response = await axios.post(image_hosting_api, fileRender, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(true);
      const uploadedImgUrl = response?.data?.data?.url;
      if (response?.data?.data?.url) {
        setLoading(true);
        const foodItems = {
          resName,
          foodName,
          foodPrice,
          foodWeight,
          foodTags,
          foodIngrediants,
          foodDescriptions,
          foodPhoto: uploadedImgUrl,
        };
        const res = await axios.post(`${url}/createfood`, foodItems);
        if (res?.data && res.status === 200) {
          toast.success("Food created successfully!");
          setLoading(false);

          console.log(foodItems, "57noline");
          console.log(res?.data, "58no line");
          console.log(foodItems, "33 no line", uploadedImgUrl);
        }
      }

      // console.log("User data:", res.status);
      // if (res.status === 200) {
      //   toast.success("Regstration succesfull");
      //   navigate("/login");
      // }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[65%] mx-auto my-44">
        <div className="grid grid-cols-2">
          <div className="flex-col flex space-y-4 py-2">
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
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              required
              placeholder="Enter food name"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Food weight
            </label>
            <input
              type="text"
              name="foodWeight"
              required
              placeholder="Enter food weight"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Food Price
            </label>
            <input
              type="text"
              name="foodPrice"
              required
              placeholder="Enter food price"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Food Tags
            </label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              className="w-[395px] px-1 py-2 rounded"
              options={options}
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Description
            </label>
            <input
              type="text"
              name="foodDescriptions"
              placeholder="Enter your name"
              className="w-96 px-3 py-2 rounded"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Food Photo
            </label>
            <input
              type="file"
              name="foodPhoto"
              className="bg-yellow-50 w-96 rounded py-2"
            />
          </div>
          <div className="flex-col flex space-y-4 py-2">
            <label htmlFor="name" className="text-xl font-semibold">
              Ingrediants
            </label>
            <CreatableSelect
              defaultValue={selectedIngrediants}
              onChange={setSelectedIngrediants}
              isMulti
              className="w-[395px] px-1 py-2 rounded"
              // options={options}
            />
          </div>
        </div>
        <button className="text-center mx-auto w-[90%] bg-yellow-300 py-2 rounded-lg hover:bg-yellow-400 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFood;
