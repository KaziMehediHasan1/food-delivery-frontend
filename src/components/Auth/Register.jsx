import axios from "axios";
import { FaFacebook, FaRegQuestionCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const url = import.meta.env.VITE_SERVER_PORT;
const image_hosting_key = import.meta.env.VITE_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const navigate = useNavigate();

  // submit function
  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const file = e.target.file.files[0];
    const password = e.target.password.value;
    if (!file) {
      console.error("No file selected");
      return;
    }

    // Create FormData and append the file
    const fileRender = new FormData();
    fileRender.append("image", file);

    try {
      // Upload image to ImgBB API
      const response = await axios.post(image_hosting_api, fileRender, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const uploadedImgUrl = response.data.data.url;
      console.log("Uploaded image URL:", uploadedImgUrl);

      const userData = {
        name,
        email,
        photo: uploadedImgUrl,
        password,
      };

      const res = await axios.post(`${url}/user`, userData);

      console.log("User data:", res.status);
      if (res.status === 200) {
        toast.success("Regstration succesfull");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      className="font-robotomain"
    >
      <form onSubmit={submitHandler} className="w-[440px] mx-auto py-28">
        <div className=" bg-white p-8 rounded-2xl shadow-2xl">
          {/* bar */}
          <div className="flex items-center space-x-28 bg-white justify-center ">
            <Link to="/" className="bg-gray-100 rounded-lg p-1">
              <IoMdArrowBack className="w-8 h-5 " />
            </Link>
            <p className="font-semibold text-sm">APPLE ID</p>
            <FaRegQuestionCircle className="w-8 h-5 " />
          </div>
          {/* input field */}
          <div className="pt-5">
            <div className="flex-col w-[80%] mx-auto space-y-4">
              <input
                type="text"
                required
                name="name"
                placeholder="Enter your name"
                className="border w-full py-2 px-3 text-sm rounded-lg"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="border w-full py-2 px-3 text-sm rounded-lg"
              />
              <input
                type="file"
                name="file"
                className="bg-gray-200 w-full rounded-lg py-[8px] file:appearance-none file:border-none file:p-0 cursor-pointer inset-0"
                required
              />
              <input
                type="password"
                required
                name="password"
                placeholder="Enter your password"
                className="border w-full py-2 px-3 text-sm rounded-lg"
              />
              <button
                type="submit"
                className="w-full py-[8px] text-sm border rounded-lg hover:bg-gray-200 duration-200 transform"
              >
                Register
              </button>
              <p className="text-xs text-gray-600">
                you have already account? please{" "}
                <Link to="/login" className="hover:text-gray-900">
                  login
                </Link>
              </p>
              <div className="flex items-center space-x-4 w-full">
                <button className="border flex items-center space-x-3 w-1/2 mx-auto py-2 rounded-lg px-2 hover:bg-gray-100 duration-200 transform">
                  <FcGoogle size={25} className="w-4 h-4" />
                  <p className="text-xs font-semibold">Google</p>
                </button>
                <button className="border w-1/2 mx-auto flex items-center space-x-3 py-2 rounded-lg px-2 hover:bg-gray-100 duration-200 transform">
                  <FaFacebook size={25} className="w-4 h-4 text-blue-500" />
                  <p className="text-xs font-semibold">Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
