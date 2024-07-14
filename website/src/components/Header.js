"use client";
import { SERVER_URL } from "@/constants";
import { getAsset } from "@/lib/utils/functions";
import { get } from "lodash";
import Link from "next/link";
import CartNav from "./CartNav";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HeaderContent = ({ isSticky, logo, setIsOpen }) => {
  const logoUrl = getAsset(logo);
  return (
    <div className={`hdr-content ${isSticky ? "hdr-content-sticky" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-auto show-mobile">
            {/* <!-- Menu Toggle --> */}
            <div className="menu-toggle">
              <a
                href="#"
                className="mobilemenu-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >
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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { logo } = context;
  return (
    <>
      <header className="hdr-wrap">
        <HeaderContent isSticky logo={logo} />
        <div className="hdr">
          <HeaderContent logo={logo} setIsOpen={setIsOpen} />
        </div>
      </header>

      {isOpen && (
        <div class="header-side-panel">
          <div
            className="mobilemenu js-push-mbmenu active"
            style={{ opacity: 1 }}
          >
            <div className="mobilemenu-content">
              <div
                className="mobilemenu-close mobilemenu-toggle"
                onClick={() => setIsOpen(false)}
              >
                Close
              </div>
              <div className="mobilemenu-scroll">
                <div
                  className="nav-wrapper show-menu"
                  style={{ height: "100%" }}
                >
                  <ul className="nav nav-level-1">
                    <li>
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          router.push("/");
                        }}
                      >
                        Home
                        <span className="arrow">
                          <i className="icon-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about-us"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          router.push("/about-us");
                        }}
                      >
                        About Us
                        <span className="arrow">
                          <i className="icon-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products/all"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          router.push("/products/all");
                        }}
                      >
                        Products
                        <span className="arrow">
                          <i className="icon-angle-right"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact-us"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          router.push("/contact-us");
                        }}
                      >
                        Contact Us
                        <span className="arrow">
                          <i className="icon-angle-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
