import { UncontrolledCollapse } from "reactstrap";

const Filters = ({ categories }) => {
  return (
    <div className="filter-col-content filter-mobile-content">
      <div className="sidebar-block">
        <div className="sidebar-block_title">
          <span>Current selection</span>
        </div>
        <div className="sidebar-block_content">
          <div className="selected-filters-wrap">
            <ul className="selected-filters">
              <li>
                <a href="#">Grey</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Above $200</a>
              </li>
            </ul>
            <div className="d-flex flex-wrap align-items-center">
              <a href="#" className="clear-filters">
                <span>Clear All</span>
              </a>
              <div className="selected-filters-count ml-auto d-none d-lg-block">
                Selected <span>6 items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-block d-filter-mobile">
        <h3 className="mb-1">SORT BY</h3>
        <div className="select-wrapper select-wrapper-xs">
          <select className="form-control">
            <option value="featured">Featured</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className="sidebar-block filter-group-block open">
        <div className="sidebar-block_title">
          <span>Categories</span>
          <span className="toggle-arrow">
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="sidebar-block_content">
          <ul className="category-list">
            {categories.map((category, inx) => {
              return (
                <li key={inx}>
                  <a href="#">{category.attributes.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="sidebar-block filter-group-block">
        <div className="sidebar-block_title">
          <span>Size</span>
          <span className="toggle-arrow">
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="sidebar-block_content">
          <ul className="category-list two-column size-list">
            <li className="active">
              <a href="#">L</a>
            </li>
            <li>
              <a href="#">XL</a>
            </li>
            <li>
              <a href="#">XXS</a>
            </li>
            <li>
              <a href="#">XS</a>
            </li>
            <li>
              <a href="#">S</a>
            </li>
            <li>
              <a href="#">XXL</a>
            </li>
            <li>
              <a href="#">XXXL</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-block filter-group-block">
        <div className="sidebar-block_title">
          <span>Price</span>
          <span className="toggle-arrow">
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="sidebar-block_content">
          <ul className="category-list">
            <li>
              <a href="#">$100-$200</a>
            </li>
            <li className="active">
              <a href="#">Above $200</a>
            </li>
            <li>
              <a href="#">Under $100</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
