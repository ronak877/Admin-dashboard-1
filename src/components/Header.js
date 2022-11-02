import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="search-bar">
          <div className="searchIcon">
            <BsSearch />
          </div>

          <input type="text" />
        </div>

        <div className="notifications-panel">
          <p className="bell">
            <IoMdNotifications />
          </p>
          <p>Small avatar</p>
          <p>User-name</p>
        </div>
      </div>

      <div className="wrapper">
        <div className="user-info">
          <p>Big Avatar</p>
          <p>
            Hei there, <p>user.</p>
          </p>
        </div>

        <div className="admin-features">
          <p className="new">New</p>
          <p className="upload">Upload</p>
          <p className="share">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
