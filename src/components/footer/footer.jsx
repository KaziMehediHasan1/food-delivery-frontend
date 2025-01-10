import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="bg-[#F9F9F9] lg:w-full font-robotomain">
     
        {/* logo section */}
        <div className="space-y-3 lg:w-[1080px] w-80 mx-auto py-12">
          <h1 className="font-semibold text-sm">Even easier in the app</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center w-32 space-x-2 py-1 border border-gray-500 rounded-lg px-3">
              <FaApple size={15} />
              <p className="text-xs">App Store</p>
            </div>
            <div className="flex items-center w-32 space-x-2 py-1 border border-gray-500 rounded-lg px-3">
              <BiLogoPlayStore size={15} />
              <p className="text-xs">PLAY STORE</p>
            </div>
          </div>
        </div>
        <div className="lg:w-full w-80 mx-auto lg:mx-0 h-[1px] bg-gray-200 lg:mt-16 mt-2"></div>
        {/* company info section */}
        <div className="lg:w-[1200px] lg:mx-auto mt-10 w-80 flex">
          <div className="w-[600px]"></div>
          <div className="w-[600px] mx-auto space-y-2">
            <h1 className="font-semibold text-sm">Company Information</h1>
            <section className="space-y-3">
              <div className="space-x-4">
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  User agreement
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Contacts
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Delivery
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  FAQ
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Become a partner
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Become a courier
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Eats for Business
                </Link>
              </div>
              <div className="space-x-4 flex items-center">
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Plastic recycling
                </Link>
                <Link className="text-xs hover:text-slate-500 text-slate-600">
                  Order food in the Yandex Go app
                </Link>
                <Link className="text-xs flex items-center hover:text-slate-500 text-slate-600 space-x-1">
                  <MdOutlineMail size={20} />
                  <p>Feedback</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-16"></div>
        <div className="flex lg:w-[1080px] mx-auto items-center justify-between px-8 py-5">
          <p className="text-xs hover:text-slate-500 text-slate-600">
            © 2018–2025 Yandex Eats LLC
          </p>
          <Link className="text-xs hover:text-slate-500 text-slate-600">
            Project for Yandex{" "}
            <a href="https://avatars.mds.yandex.net/get-bunker/49769/9362802ad550d87a743751b144a576ad35d9d035/svg"></a>
          </Link>
        </div>
      
    </footer>
  );
};

export default footer;
