import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const url = import.meta.env.VITE_SERVER_PORT;
const SearchingData = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(location.search).get("search");
  console.log(query);

  // get data
  useEffect(() => {
    const searchingData = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const res = await axios.get(`${url}/getSearch/${query}`);
        if (res?.data) {
          setSearchResult(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    searchingData();
  }, [query]);

  console.log(loading, searchResult, "30no line");
  return (
    <div className="bg-gray-100 rounded-[50px]  h-screen pt-12 px-20">
      <div>
        
      </div>
    </div>
  );
};

export default SearchingData;
