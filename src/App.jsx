import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-538px)]">
        <Outlet></Outlet>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
