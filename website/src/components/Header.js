import { SERVER_URL } from "@/constants";
import { getAsset } from "@/lib/utils/functions";
import { get } from "lodash";
import Link from "next/link";

const HeaderContent = ({ isSticky, logo }) => {
  const logoUrl = getAsset(logo);
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
            <Link href={"/"} className="logo">
              <img
                src={`${logoUrl}`}
                // srcSet="/images/logo.png 1x"
                alt="Logo"
              />
            </Link>
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
                <Link href={"/"} className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact Us</Link>
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

              <div className="hdr_container_mobile show-mobile">
                {/* <!-- Header Account --> */}
                <div className="dropdn dropdn_account dropdn_fullheight">
                  <a
                    href="#"
                    className="dropdn-link js-dropdn-link"
                    data-panel="#dropdnAccount"
                  >
                    <i className="icon-user"></i>
                    <span className="dropdn-link-txt">Account</span>
                  </a>
                </div>
                {/* <!-- /Header Account --> */}
              </div>
              <div className="dropdn dropdn_fullheight minicart">
                <a
                  href="#"
                  className="dropdn-link js-dropdn-link minicart-link"
                  data-panel="#dropdnMinicart"
                >
                  <i className="icon-basket"></i>
                  <span className="minicart-qty">3</span>
                  {/* <span className="minicart-total hide-mobile">$34.99</span> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ context }) => {
  const { logo } = context;
  return (
    <header className="hdr-wrap">
      <HeaderContent isSticky logo={logo} />
      <div className="hdr">
        <HeaderContent logo={logo} />
      </div>
    </header>
  );
};

export default Header;
