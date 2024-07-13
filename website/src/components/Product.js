"use client";
import { getAsset } from "@/lib/utils/functions";
import { useCartStore } from "@/providers/cart-store-provider";
import { add, get } from "lodash";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Product = ({ id, name, category, cover, slug }) => {
  const { items, addItem } = useCartStore();
  const productElm = useRef(null);
  const isCart = items.findIndex((item) => item.id === id) != -1;

  useEffect(() => {
    if (productElm.current) {
      const height = productElm.current.clientHeight;
      productElm.current.addEventListener("mouseover", ({ currentTarget }) => {
        productElm.current.classList.add("hovered");
        productElm.current.style.height = `${height}px`;
      });
      productElm.current.addEventListener("mouseout", () => {
        productElm.current.classList.remove("hovered");
        productElm.current.style.height = null;
      });
    }
    return () => {
      if (productElm.current) {
        productElm.current.removeEventListener("mouseover", () => {});
        productElm.current.removeEventListener("mouseout", () => {});
      }
    };
  }, []);

  const handleAddToCart = () => {
    if (!isCart) {
      addItem({
        id,
        name,
        category,
        cover,
        slug,
        qty: 1,
      });
    }
  };

  return (
    <div
      ref={productElm}
      className={`prd prd--style2 prd-labels--max prd-labels-shadow prd-w-lg `}
    >
      <div className="prd-inside">
        <div className="prd-img-area">
          <Link
            href={`/product/${slug}`}
            className="prd-img image-hover-scale image-container"
            style={{ paddingBottom: "128.48%" }}
          >
            <img
              src={getAsset(cover)}
              alt="Leather Pegged Pants"
              className="js-prd-img fade-up ls-is-cached lazyloaded"
            />
            <div className="foxic-loader"></div>
            <div className="prd-big-squared-labels"></div>
          </Link>
        </div>
        <div className="prd-info">
          <div className="prd-info-wrap">
            <div className="prd-tag">
              <Link href={`/product/${slug}`}>
                {get(category, "data.attributes.name", "")}
              </Link>
            </div>
            <h2 className="prd-title">
              <Link href={`/product/${slug}`}>{name}</Link>
            </h2>
          </div>
          <div className="prd-hovers">
            <div className="prd-circle-labels"></div>
            <div className="prd-price">
              <div className="price-new">
                {/* {(id * 500).toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                  style: "currency",
                  currency: "INR",
                })} */}
              </div>
            </div>
            <div className="prd-action">
              <div className="prd-action-left">
                <button
                  className="btn js-prd-addtocart"
                  onClick={handleAddToCart}
                >
                  {isCart ? "Added!" : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
