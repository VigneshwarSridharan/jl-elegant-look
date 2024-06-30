"use client";
import { useCartStore } from "@/providers/cart-store-provider";
import Link from "next/link";

const CartNav = () => {
  const { items } = useCartStore();

  return (
    <div className="dropdn dropdn_fullheight minicart">
      <Link href="/cart" className="dropdn-link js-dropdn-link minicart-link">
        <i className="icon-basket"></i>
        <span className="minicart-qty">{items.length}</span>
      </Link>
    </div>
  );
};

export default CartNav;
