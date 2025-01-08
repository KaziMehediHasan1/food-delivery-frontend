import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = import.meta.env.VITE_SERVER_PORT;
const useAllProducts = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const data = await axios.get(`${url}/shopallproducts`);
        return data?.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });
  return [products, isLoading, refetch];
};

export default useAllProducts;
