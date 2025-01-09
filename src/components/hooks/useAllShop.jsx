import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = import.meta.env.VITE_SERVER_PORT;
const useAllShop = () => {
  const {
    data: shops = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      try {
        const data = await axios.get(`${url}/getShopDetails`);
        return data?.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });
  return [shops, isLoading, refetch];
};

export default useAllShop;
