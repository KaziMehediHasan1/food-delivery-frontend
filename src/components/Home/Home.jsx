import useUser from "../hooks/useUser";

const Home = () => {
  const [users, isLoading, refetch] = useUser();
  // console.log(users);
  return (
    <div className="w-[1200px] mx-auto mt-10 font-robotomain">
      {/* SHOP SECTION */}
      <div>
        <h1 className="text-3xl font-semibold">Shop</h1>
      </div>
    </div>
  );
};

export default Home;
