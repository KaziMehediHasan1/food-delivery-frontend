const AddRestaurant = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 w-[35%] mx-auto my-44">
        <div className="flex-col flex space-y-2">
          <label htmlFor="name" className="text-xl font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
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
            name="photo"
            required
            className="bg-yellow-50 w-96 rounded py-2"
          />
        </div>
        <div className="flex-col flex space-y-2">
          <label htmlFor="name" className="text-xl font-semibold">
            Logo
          </label>
          <input
            type="file"
            name="logo"
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
            name="delivery"
            placeholder="Enter Delivery time "
            className="w-96 px-3 py-2 rounded"
          />
        </div>
        <button className="text-center mx-auto w-96 bg-yellow-300 py-2 rounded-lg hover:bg-yellow-400 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
