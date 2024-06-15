import { CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

type Props = {
  setMobileNav: any;
};

export const MobileNav = ({ setMobileNav }: Props) => {
  return (
    <div className="w-screen fixed h-full bg-brown/50 backdrop-blur-sm top-0 right-0 ">
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-0 h-screen  z-50 flex-col flex text-brown bg-white rounded-l-md "
      >
        <CloseOutlined
          className="hover:text-purple duration-500 text-xl p-8  "
          onClick={() => {
            setMobileNav(false);
          }}
        />
        <div className=" border border-brown opacity-15 p-0 m-0" />
        <ul className="flex list-none gap-3 flex-col p-10 m-5 text-center bg-lightgray rounded-md max-w-full">
          <li className=" text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow  rounded-md  ">
            <span>Search</span>
          </li>
          <li className=" text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow  px-7 rounded-md ">
            Campaigns
          </li>
          <li className=" text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow  rounded-md ">
            Fundraiser
          </li>
          <li className="text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow rounded-md ">
            Membership
          </li>
          <li className=" text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow rounded-md ">
            About
          </li>
          <li className=" text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow  rounded-md ">
            Contact
          </li>
          <li className="text-lg hover:text-purple duration-500 hover:cursor-pointer hover:bg-yellow  rounded-md ">
            Blog
          </li>
        </ul>
      </motion.section>
    </div>
  );
};
