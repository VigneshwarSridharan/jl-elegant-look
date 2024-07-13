"use client";
import { getAsset } from "@/lib/utils/functions";
import { useCartStore } from "@/providers/cart-store-provider";
import { get } from "lodash";
import Link from "next/link";

const CartTable = () => {
  const { items, decrementQty, incrementQty, removeItem } = useCartStore();
  return (
    <div className="cart-table">
      <div className="cart-table-prd cart-table-prd--head py-1 d-none d-md-flex">
        <div className="cart-table-prd-image text-center">Product</div>
        <div className="cart-table-prd-content-wrap">
          <div className="cart-table-prd-info">Name</div>
          <div className="cart-table-prd-qty">Qty</div>
          {/* <div className="cart-table-prd-price">Price</div> */}
          <div className="cart-table-prd-action">&nbsp;</div>
        </div>
      </div>
      {!items.length && (
        <>
          <img src="/images/pages/tumbleweed.gif" alt="" />
          <h2 className="text-center p-3">Your shopping cart is empty!</h2>
        </>
      )}
      {items.map((item) => {
        return (
          <div className="cart-table-prd" key={item.id}>
            <div className="cart-table-prd-image">
              <Link
                href={"/product/" + item.slug}
                target={"_blank"}
                className="prd-img"
              >
                <img src={getAsset(item.cover)} alt="" />
              </Link>
            </div>
            <div className="cart-table-prd-content-wrap">
              <div className="cart-table-prd-info">
                <div className="cart-table-prd-price">
                  <Link
                    href={"/product/" + item.slug}
                    target={"_blank"}
                    className="price-new"
                  >
                    {item.name}
                  </Link>
                </div>
                <h2 className="cart-table-prd-name">
                  {get(item.category, "data.attributes.name", "")}
                </h2>
              </div>
              <div className="cart-table-prd-qty">
                <div className="qty qty-changer">
                  <button
                    className="decrease"
                    onClick={() => decrementQty(item.id)}
                  ></button>
                  <input
                    type="text"
                    className="qty-input"
                    value={item.qty}
                    onChange={() => {}}
                    readOnly
                  />
                  <button
                    className="increase"
                    onClick={() => incrementQty(item.id)}
                  ></button>
                </div>
              </div>
              {/* <div className="cart-table-prd-price-total"></div> */}
            </div>
            <div className="cart-table-prd-action">
              <div
                className="cart-table-prd-remove"
                title="Remove Product"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item.id)}
              >
                <i className="icon-recycle"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartTable;
