import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = import.meta.env.VITE_SERVER_PORT;

const useAllFoods = () => {
  const {
    data: foods = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      try {
        const data = await axios.get(`${url}/getfoods`);
        return data?.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });
  return [foods, isLoading, refetch];
};

export default useAllFoods;
