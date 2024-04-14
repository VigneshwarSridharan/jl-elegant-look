const HeaderContent = ({ isSticky }) => {
  return (
    <div className={`hdr-content ${isSticky ? "hdr-content-sticky" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-auto show-mobile">
            {/* <!-- Menu Toggle --> */}
            <div className="menu-toggle">
              <a href="#" className="mobilemenu-toggle">
                <i className="icon-menu"></i>
              </a>
            </div>
          </div>
          {/* <!-- /Menu Toggle --> */}
          <div className="col-auto hdr-logo">
            <a href="index.html" className="logo">
              <img
                srcSet="/images/logo.png 1x, /images/logo2x.png 2x"
                alt="Logo"
              />
            </a>
          </div>
          <div
            className={`hdr-nav hide-mobile ${
              isSticky
                ? "nav-holder-s"
                : "nav-holder justify-content-center px-4"
            }`}
          >
            <ul className="mmenu">
              <li>
                <a href="category.html">Home</a>
              </li>
              <li>
                <a href="category.html">About Us</a>
              </li>
              <li>
                <a href="category.html">Products</a>
              </li>
              <li>
                <a href="category.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="hdr-links-wrap col-auto ml-auto">
            <div className="hdr-inline-link">
              <div className="search_container_desktop">
                <div className="dropdn dropdn_search dropdn_fullwidth">
                  <a href="#" className="dropdn-link js-dropdn-link only-icon">
                    <i className="icon-search"></i>
                    <span className="dropdn-link-txt">Search</span>
                  </a>
                  <div className="dropdn-content">
                    <div className="container">
                      <form
                        method="get"
                        action="#"
                        className="search search-off-popular"
                      >
                        <input
                          name="search"
                          type="text"
                          className="search-input input-empty"
                          placeholder="What are you looking for?"
                        />
                        <button type="submit" className="search-button">
                          <i className="icon-search"></i>
                        </button>
                        <a href="#" className="search-close js-dropdn-close">
                          <i className="icon-close-thin"></i>
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="hdr-wrap">
      <HeaderContent isSticky />
      <div className="hdr">
        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
