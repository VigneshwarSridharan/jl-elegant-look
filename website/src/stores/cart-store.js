import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";

export const initCartStore = () => {
  return { count: new Date().getFullYear() };
};

export const defaultInitState = {
  items: [],
};

persist(
  (set, get) => ({
    bears: 0,
    addABear: () => set({ bears: get().bears + 1 }),
  }),
  {
    name: "food-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
  }
);

export const createCartStore = (initState = defaultInitState) => {
  return createStore()(
    persist(
      (set) => ({
        ...initState,
        decrementQty: (id) =>
          set((state) => ({
            items: state.items.map((item) => {
              if (item.id === id) item.qty--;
              return item;
            }),
          })),
        incrementQty: (id) =>
          set((state) => ({
            items: state.items.map((item) => {
              if (item.id === id) item.qty++;
              return item;
            }),
          })),
        removeItem: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          })),
        addItem: (item) =>
          set((state) => ({
            items: [...state.items, item],
          })),
      }),
      { name: "cart" }
    )
  );
};
