import { EditFilled, SearchOutlined } from "@ant-design/icons";
import "../index.css"

export const MainNav = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div>
        <div>
          <div className="flex list-none gap-5">
            <li className=" text-sm  hover:cursor-pointer inline-flex items-center gap-2 underline-animation ">
              <SearchOutlined className="text-gray-500 text-base" />
              <span>Search</span>
            </li>

            <li className=" text-sm  hover:cursor-pointer underline-animation">
              Campaigns
            </li>
            <li className=" text-sm  hover:cursor-pointer underline-animation">
              Fundraiser
            </li>
            <li className="text-sm  hover:cursor-pointer underline-animation">
              Membership
            </li>
            <li className=" text-sm  hover:cursor-pointer underline-animation">
              About
            </li>
            <li className=" text-sm  hover:cursor-pointer underline-animation">
              Contact
            </li>
            <li className="text-sm  hover:cursor-pointer underline-animation">
              Blog
            </li>
          </div>
        </div>
      </div>
      <div className="bg-purple px-5 rounded-lg py-1.5 flex items-center gap-2 hover:bg-purple-light duration-150 cursor-pointer">
        <EditFilled className="text-white" />
        <button className="text-white text-xs font-medium">
          Start a campaign
        </button>
      </div>
    </div>
  );
};
