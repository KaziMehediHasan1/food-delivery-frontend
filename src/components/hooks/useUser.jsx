import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = import.meta.env.VITE_SERVER_PORT;
console.log(url, "5 no  line");

const useUser = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const data = await axios.get(`${url}/allusers`);
        return data?.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
  });
  return [users, isLoading, refetch];
};

export default useUser;
