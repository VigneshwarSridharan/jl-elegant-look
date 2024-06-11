import Link from "next/link";
import Filters from "./components/Filters";
import ListProducts from "./components/ListProducts";

const Products = () => {
  return (
    <>
      <div className="holder breadcrumbs-wrap mt-0">
        <div className="container">
          <ul className="breadcrumbs">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Products</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="holder">
        <div className="container">
          <div className="filter-row">
            <div className="row">
              <div className="items-count">35 item(s)</div>
              <div className="select-wrap d-none d-md-flex">
                <div className="select-label">SORT:</div>
                <div className="select-wrapper select-wrapper-xxs">
                  <select className="form-control input-sm">
                    <option value="featured">Featured</option>
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </div>
              <div className="select-wrap d-none d-md-flex">
                <div className="select-label">VIEW:</div>
                <div className="select-wrapper select-wrapper-xxs">
                  <select className="form-control input-sm">
                    <option value="featured">12</option>
                    <option value="rating">36</option>
                    <option value="price">100</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="col-lg-4 aside aside--left filter-col filter-mobile-col filter-col--sticky js-filter-col filter-col--opened-desktop">
              <Filters />
            </div>
            <div className="filter-toggle js-filter-toggle">
              <div className="loader-horizontal js-loader-horizontal">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <span className="filter-toggle-icons js-filter-btn">
                <i className="icon-filter"></i>
                <i className="icon-filter-close"></i>
              </span>
              <span className="filter-toggle-text">
                <a href="#" className="filter-btn-open js-filter-btn">
                  REFINE & SORT
                </a>
                <a href="#" className="filter-btn-close js-filter-btn">
                  RESET
                </a>
                <a href="#" className="filter-btn-apply js-filter-btn">
                  APPLY & CLOSE
                </a>
              </span>
            </div>

            <div class="col-lg aside">
              <ListProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
