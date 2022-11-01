const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <p>Search icon</p>
        <p>Search bar</p>
      </div>

      <div className="UserInfo">
        <p>Big avatar</p>
        <p>Greeting</p>
        <div className="adminFeatures">
          <p>New</p>
          <p>upload</p>
          <p>Share</p>
        </div>
      </div>

      <div className="notificationsPanel">
        <p>Bell notification</p>
        <p>Small avatar</p>
        <p>User-name</p>
      </div>
    </div>
  );
};

export default Header;
