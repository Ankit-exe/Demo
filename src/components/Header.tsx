import { Link } from "react-router-dom";
import logo from "./../assets/animal.png";
import { MobileNav } from "./MobileNav";
import { MainNav } from "./MainNav";
import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="z-10 shadow-md">
      <div className="px-2 mx-auto flex justify-between items-center">
        <div className="items-center gap-10 inline-flex">
          <Link to="/" className="h-16 items-center inline-flex">
            <img src={logo} className="h-10" />
            <span className="text-3xl font-medium tracking-tighter">
              Campoal
            </span>
          </Link>
          <Link
            to="/global"
            className=" border border-gray-300 px-3 py-1 rounded-full hidden md:visible md:flex"
          >
            <GlobalOutlined className="text-base text-gray-600" />
            <span className="ml-3 text-sm font-medium">Global</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <MainNav />
          </div>
          <div className="flex">
            <Link to="/sign-up" className="flex items-center">
              <button
                type="button"
                className="bg-yellow px-2 md:px-5 py-1.5 text-white font-medium rounded-l-lg text-xs flex items-center"
              >
                Sign up
              </button>
            </Link>
            <Link to="/sign-in" className="flex items-center text-center">
              <button
                type="button"
                className="bg-purple px-2 md:px-5 py-1.5 font-medium rounded-r-lg text-xs flex items-center text-white"
              >
                Sign in
              </button>
            </Link>
          </div>
          <div className="lg:hidden">
            <MenuOutlined
              className="text-xl hover:text-purple duration-500 drop-shadow-md " 
              onClick={() => setMobileNav(true)}
            />
            {mobileNav ? <MobileNav setMobileNav={setMobileNav} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
