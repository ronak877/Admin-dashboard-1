import { AiFillHome } from "react-icons/ai";
import { RiProfileFill } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { RiSettingsFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h2>Admin panel</h2>
      <ol>
        <li>
          {" "}
          <AiFillHome /> Home
        </li>
        <li>
          {" "}
          <RiProfileFill /> Profile
        </li>
        <li>
          {" "}
          <SiGooglemessages /> Messages
        </li>
        <li>
          {" "}
          <FaHistory /> History
        </li>
        <li>
          <FaTasks /> Tasks
        </li>
        <li>
          <RiCommunityFill />
          Communities
        </li>
        <li>
          <RiSettingsFill />
          Settings
        </li>
        <li>
          <BiSupport />
          Support
        </li>
        <li>
          <SiGnuprivacyguard />
          Privacy
        </li>
      </ol>
    </div>
  );
};

export default Sidebar;
