import { SERVER_URL } from "@/constants";
import { getAsset } from "@/lib/utils/functions";
import { get } from "lodash";
import Link from "next/link";
import CartNav from "./CartNav";
import Image from "next/image";

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
                <Link href={"/products/all"}>Products</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="hdr-links-wrap col-auto ml-auto">
            <div className="hdr-inline-link">
              <CartNav />
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
