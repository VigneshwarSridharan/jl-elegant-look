"use client";

import { useCartStore } from "@/providers/cart-store-provider";

export const Counter = () => {
  const { count, incrementCount, decrementCount } = useCartStore(
    (state) => state
  );

  return (
    <div>
      Count: {count}
      <hr />
      <button type="button" onClick={() => void incrementCount()}>
        Increment Count
      </button>
      <button type="button" onClick={() => void decrementCount()}>
        Decrement Count
      </button>
    </div>
  );
};
