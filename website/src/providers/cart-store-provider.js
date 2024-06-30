"use client";

import { useStore } from "zustand";

import { createCartStore, initCartStore } from "@/stores/cart-store";
import { createContext, useContext, useRef } from "react";

export const CartStoreContext = createContext(undefined);

export const CartStoreProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = createCartStore();
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = (selector) => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
