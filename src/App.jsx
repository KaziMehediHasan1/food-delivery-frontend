import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-570px)]">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
