import { useState } from "react";
// import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const AddFood = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedIngrediants, setSelectedIngrediants] = useState(null);
  console.log(selectedOption);
  const handleSubmit = (e) => {
    e.preventDefault();
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
              name="name"
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
              name="foodname"
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
              name="weight"
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
              name="price"
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
              name="description"
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
              name="photo"
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
              options={options}
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
