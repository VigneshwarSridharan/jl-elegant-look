"use client";

import { useCartStore } from "@/providers/cart-store-provider";
import { get } from "lodash";

const CartButton = ({ slug, name, cover, id, category }) => {
  const { items, decrementQty, incrementQty, addItem } = useCartStore();
  const itemInx = items.findIndex((item) => item.id === id);
  const isCart = itemInx != -1;

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
    <div className="prd-block_actions prd-block_actions--wishlist">
      <div class="prd-block_qty">
        <div class="qty qty-changer">
          <button
            class="decrease js-qty-button"
            onClick={() => decrementQty(id)}
          ></button>
          <input
            type="number"
            class="qty-input"
            name="quantity"
            value={get(items, `[${itemInx}].qty`, 1)}
            onChange={() => {}}
          />
          <button
            class="increase js-qty-button"
            onClick={() => incrementQty(id)}
          ></button>
        </div>
      </div>
      <div className="btn-wrap">
        <button
          className="btn btn--add-to-cart js-trigger-addtocart js-prd-addtocart"
          onClick={handleAddToCart}
        >
          {isCart ? "Added!" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default CartButton;
