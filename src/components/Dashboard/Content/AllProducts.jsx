import axios from "axios";
import useAllProducts from "../../hooks/useAllProducts";
import { toast } from "react-toastify";
const url = import.meta.env.VITE_SERVER_PORT;
const AllProducts = () => {
  const [products, isLoading, refetch] = useAllProducts();
  const handleDelete = async (id) => {
    const response = await axios.delete(`${url}/productdeleted/${id}`);
    if (response?.data) {
      toast.success("Product Deleted Successfull");
      refetch();
    }
  };
  return (
    <div className="container font-robotomain p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        All Products
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3">No</th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3 ">Photo</th>
              <th className="p-3">Delete</th>
              <th className="p-3">Update</th>
            </tr>
          </thead>
          <tbody>
            {products
              ? products?.map((product, index) => {
                  return (
                    <tr
                      key={product?._id}
                      className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                    >
                      <td className="p-3">
                        <p>{index + 1}</p>
                      </td>
                      <td className="p-3">
                        <p>{product?.proName}</p>
                      </td>
                      <td className="p-3">
                        <p>{product?.proPrice}</p>
                      </td>
                      <td className="p-3">
                        <img
                          src={product?.proPhoto}
                          alt="product images"
                          className="rounded-full w-10 h-10"
                        />
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(product?._id)}
                          className="bg-yellow-400 px-2 py-1 rounded-lg hover:text-white hover:bg-yellow-700"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="p-3">
                        <button className="bg-blue-400 px-2 py-1 rounded-lg text-white hover:bg-yellow-700">
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "Not Found Of Your Product!"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
