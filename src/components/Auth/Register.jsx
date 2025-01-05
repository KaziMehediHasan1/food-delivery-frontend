import { FaFacebook, FaRegQuestionCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  // submit function
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const file = e.target.file.value;
    const password = e.target.password.value;
    const userData = {
      name,
      email,
      file,
      password,
    };
    console.log("submit", userData);
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
                type="eamil"
                name="email"
                required
                placeholder="Enter your email"
                className="border w-full py-2 px-3 text-sm rounded-lg"
              />
              <input
                type="file"
                name="file"
                className="bg-gray-200 w-full rounded-lg py-[8px] file:appearance-none file:border-none file:p-0 cursor-pointer inset-0 "
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
