"use client";
import { useState } from "react";

const ProductItem = ({ id = 1 }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-lg ${
        isHover ? "hovered" : ""
      }`}
      onMouseOver={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
    >
      <div className="prd-inside">
        <div className="prd-img-area">
          <a
            href="product.html"
            className="prd-img image-hover-scale image-container"
            style={{ paddingBottom: "128.48%" }}
          >
            <img
              src={`https://source.unsplash.com/random/792x1018?product\$${id}`}
              alt="Leather Pegged Pants"
              className="js-prd-img fade-up ls-is-cached lazyloaded"
            />
            <div className="foxic-loader"></div>
            <div className="prd-big-squared-labels"></div>
          </a>
        </div>
        <div className="prd-info">
          <div className="prd-info-wrap">
            <div className="prd-tag">
              <a href="#">FOXic</a>
            </div>
            <h2 className="prd-title">
              <a href="product.html">Leather Pegged Pants</a>
            </h2>
          </div>
          <div className="prd-hovers">
            <div className="prd-circle-labels"></div>
            <div className="prd-price">
              <div className="price-new">$ 180</div>
            </div>
            <div className="prd-action">
              <div className="prd-action-left">
                <button className="btn js-prd-addtocart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Collections() {
  return (
    <div
      className="holder holder-mt-medium section-name-products-grid"
      id="productsGrid01"
    >
      <div className="container">
        <div className="title-wrap text-center">
          <h2 className="h1-style">Collections</h2>
          <div className="title-wrap title-tabs-wrap text-center js-title-tabs ps ps--theme_default">
            <div className="title-tabs">
              <h2 className="h3-style active">
                <a href="#">
                  <span className="title-tabs-text theme-font">Women</span>
                </a>
              </h2>
              <h2 className="h3-style">
                <a href="#">
                  <span className="title-tabs-text theme-font">Men</span>
                </a>
              </h2>
              <h2 className="h3-style">
                <a href="#">
                  <span className="title-tabs-text theme-font">
                    Accessories
                  </span>
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="prd-grid-wrap">
          <div className="prd-grid data-to-show-4 data-to-show-md-3 data-to-show-sm-2 data-to-show-xs-2">
            <ProductItem id={1} />
            <ProductItem id={2} />
            <ProductItem id={3} />
            <ProductItem id={4} />
            <ProductItem id={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;