import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url = import.meta.env.VITE_SERVER_PORT;
const useAllRestaurant = () => {
  const {
    data: restaurant = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["restaurant"],
    queryFn: async () => {
      try {
        const data = await axios.get(`${url}/getreataurant`);
        return data?.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });
  return [restaurant, isLoading, refetch];
};

export default useAllRestaurant;
