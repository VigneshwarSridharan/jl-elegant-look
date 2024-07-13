"use client";
import Product from "@/components/Product";
import { useEffect, useRef, useState } from "react";

function Collections({ products }) {
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
            {products.map(({ id, attributes: product }) => {
              return <Product key={id} {...product} id={id} />;
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Collections;
