const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <p>Search icon</p>
        <p>Search bar</p>
      </div>

      <div className="user-info">
        <p>Big avatar</p>
        <p>Greeting</p>
        <div className="admin-features">
          <p className="new">New</p>
          <p className="upload">upload</p>
          <p className="share">Share</p>
        </div>
      </div>

      <div className="notifications-panel">
        <p>Bell notification</p>
        <p>Small avatar</p>
        <p>User-name</p>
      </div>
    </div>
  );
};

export default Header;
